[![Node.js CI](https://github.com/ismet1292-wq/01-docker-node-app/actions/workflows/nodejs.yml/badge.svg)](https://github.com/ismet1292-wq/01-docker-node-app/actions/workflows/nodejs.yml)

# DevOps Node.js Application

A production-style DevOps portfolio project demonstrating containerization, orchestration, and continuous integration using Docker, Kubernetes, and GitHub Actions.

---

## Architecture

```text
                Developer
                    │
                    ▼
          GitHub Repository
                    │
                    ▼
        GitHub Actions (CI/CD)
                    │
                    ▼
          Docker Image Build
                    │
                    ▼
      Kubernetes Deployment
                    │
                    ▼
         Node.js Application
```

---

## Technologies

| Technology | Purpose |
|------------|---------|
| Node.js | Web application |
| Docker | Containerization |
| Kubernetes | Container orchestration |
| GitHub Actions | Continuous Integration |
| Git | Version Control |

---

## Skills Demonstrated

- Docker image creation
- Docker container management
- Kubernetes Deployments
- Kubernetes Services
- Kubernetes Scaling
- GitHub Actions CI/CD
- Git version control
- YAML configuration
- Node.js application deployment

---

## Project Structure

```text
01-docker-node-app
│
├── .github/
│   └── workflows/
│       └── nodejs.yml
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
├── app.js
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
```

---

## Run Locally

Install dependencies

```bash
npm install
```

Start the application

```bash
npm start
```

Open

```
http://localhost:3000
```

---

## Docker

Build

```bash
docker build -t devops-node-app:v1 .
```

Run

```bash
docker run --rm -p 127.0.0.1:3000:3000 devops-node-app:v1
```

---

## Kubernetes

Deploy

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

Verify

```bash
kubectl get deployments
kubectl get services
kubectl get pods
```

---

## CI/CD

GitHub Actions automatically:

- Checks out the repository
- Installs Node.js
- Installs project dependencies
- Tests actual HTTP payloads, health responses, and unknown routes
- Builds the Docker image
- Starts the container on a disposable runner and verifies its health,
  non-root user, read-only filesystem, and loopback-only port
- Removes the test container after verification

---

## Future Improvements

- Docker image publishing
- Terraform infrastructure
- AWS deployment
- Prometheus monitoring
- Grafana dashboards

---

## Author

**Ismet Xani**

## Verification scope

The test suite uses Node's built-in runner and a real HTTP server on an
ephemeral loopback port. The Docker smoke test polls its health state with a
60-second deadline instead of relying on a fixed startup sleep. It verifies
HTTP JSON payloads and runtime safeguards and removes its own test container.
GitHub runners are disposable; this workflow does not publish or retain a
public application, and it does not provision cloud resources.

The Kubernetes manifests remain a local Minikube example using a locally
built image. The updated CI does not deploy them. The NodePort service can
expose traffic through cluster nodes; review cluster networking separately.
No production deployment, load test, or security audit is established here.
