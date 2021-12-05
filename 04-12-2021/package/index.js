const randomMessages = [
  "random 1",
  "random 2",
  "random 3",
  "random 4",
  "random 5",
  "random 6",
  "random 7",
];

function random() {
  const message = randomMessages[Math.floor(Math.random() * randomMessages.length)];
  console.log(message);
}

module.exports = { random };
