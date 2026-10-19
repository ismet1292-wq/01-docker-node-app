const {test} = require("node:test");
const assert = require("node:assert/strict");
const {once} = require("node:events");
const {createApp} = require("../app");

test("root payload, timestamp, health, headers and missing route", async () => {
  const server = createApp().listen(0, "127.0.0.1");
  await once(server, "listening");
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    const root = await fetch(base);
    assert.equal(root.status, 200);
    const body = await root.json();
    assert.equal(body.message, "Welcome to my DevOps Portfolio App!");
    assert.equal(body.status, "Running");
    assert.ok(Number.isFinite(Date.parse(body.timestamp)));
    assert.equal(root.headers.get("x-powered-by"), null);
    const health = await fetch(`${base}/health`);
    assert.equal(health.status, 200);
    assert.deepEqual(await health.json(), {status: "Healthy"});
    assert.equal((await fetch(`${base}/missing`)).status, 404);
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});
