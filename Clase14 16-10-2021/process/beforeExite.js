// Node.js program to demonstrate the
// Process 'beforeExit' Event

// Importing process module
// const process = require("process");

// Event 'beforeExit'
process.on("beforeExit", (code) => {
  console.log("Process beforeExit event with code: ", code);
});

// Event 'exit'
process.on("exit", (code) => {
  console.log("Process exit event with code: ", code);
});

// Display the first message
console.log("This message is displayed first.");

// process.exit(1);
