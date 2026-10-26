const test = require("node:test");
const assert = require("node:assert/strict");
const { calculartotal } = require("./pedido");

test("dos almuerzos", () => {
    assert.strictEqual(calculartotal(12000, 2), 24000);
});

test("tres jugos", () => {
    assert.strictEqual(calculartotal(4000, 3), 12000);
});
