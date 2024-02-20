const body = document.querySelector("body");
const btn = document.querySelector("#start button");

const hackStatements = [
  "Accessing mainframe",
  "Bypassing security protocols",
  "Initiating brute force attack",
  "Cracking encryption",
  "Deploying malware",
  "Injecting code",
  "Creating backdoor",
  "Exploiting vulnerability",
  "Executing command",
  "Elevating privileges",
  "Hacking complete",
];

btn.addEventListener("click", () => {
  console.log("Button Pressed");
  msgGenerator(hackStatements);
});

const msgGenerator = async (statements) => {
  for (const statement of statements) {
    await new Promise((resolve) => {
      setTimeout(() => {
        addMsg(statement);
        resolve();
      }, getRandom(1, 5) * 1000);
    });
  }
//   let msgs = document.querySelectorAll(".container");
//   msgs = Array.from(msgs);
//   msgs.pop();
//   console.log(msgs);
//   setTimeout(() => {
//     for (const singleMsg of msgs) {
//       singleMsg.innerText = "😈";
//     }
//   }, 4000);
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const addMsg = (msg) => {
  const newContainer = document.createElement("div");
  newContainer.classList.add("container");

  const newMsg = document.createElement("p");
  newMsg.innerText = msg;

  const newBox = document.createElement("div");
  newBox.classList.add("box", "grow");

  newContainer.append(newMsg);
  newContainer.append(newBox);

  addRandPosition(newContainer);

  body.append(newContainer);

  dotsGen(newMsg);
};

const dotsGen = async (msg) => {
  for (let i = 0; i < 3; i++) {
    await new Promise((resolve) => {
      setTimeout(() => {
        msg.innerText = msg.innerText.concat("", ".");
        resolve();
      }, 1000);
    });
  }
};

const addRandPosition = (container) => {
  let y = getRandom(15, 85);
  let x = getRandom(0, 45);
  container.style.top = `${y}vh`;
  container.style.left = `${x}vw`;
};
