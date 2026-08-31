const { add } = require('./math');

console.log("Running unit tests...");

const result = add(2, 3);
if (result !== 5) {
  console.error(`Test Failed: Expected 5, but got ${result}`);
  process.exit(1);
}

console.log("✅ All tests passed successfully!");
process.exit(0);


// PR demo change