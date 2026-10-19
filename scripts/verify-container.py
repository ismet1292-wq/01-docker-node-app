"""Verify the isolated CI container and remove it even if validation fails."""
import json
import subprocess
import time
import urllib.request

name = "project01-ci"
try:
    subprocess.run(["docker", "run", "--detach", "--name", name,
                    "--publish", "127.0.0.1:13001:3000", "--read-only",
                    "--tmpfs", "/tmp:rw,noexec,nosuid,size=16m",
                    "--cap-drop", "ALL", "--security-opt", "no-new-privileges",
                    "--memory", "256m", "--pids-limit", "128",
                    "devops-node-app:ci"], check=True)
    deadline = time.monotonic() + 60
    while True:
        info = json.loads(subprocess.check_output(["docker", "inspect", name], text=True))[0]
        status = info["State"]["Health"]["Status"]
        if status == "healthy":
            break
        if status == "unhealthy" or not info["State"]["Running"] or time.monotonic() >= deadline:
            raise RuntimeError("Container did not become healthy")
        time.sleep(1)
    assert info["HostConfig"]["ReadonlyRootfs"] is True
    assert info["HostConfig"]["PortBindings"]["3000/tcp"] == [{"HostIp": "127.0.0.1", "HostPort": "13001"}]
    uid = subprocess.check_output(["docker", "exec", name, "id", "-u"], text=True).strip()
    assert uid != "0", "Container must not run as root"
    with urllib.request.urlopen("http://127.0.0.1:13001/health", timeout=5) as response:
        assert json.load(response) == {"status": "Healthy"}
    with urllib.request.urlopen("http://127.0.0.1:13001/", timeout=5) as response:
        assert json.load(response)["status"] == "Running"
    print("PASS: Docker health, HTTP payloads, non-root UID, read-only root and loopback port.")
finally:
    subprocess.run(["docker", "logs", name], check=False)
    subprocess.run(["docker", "rm", "--force", name], check=False)
