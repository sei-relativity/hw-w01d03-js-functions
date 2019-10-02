const playGame = usr => {
  let rand = Math.round(Math.random() * 2 + 1);
  let comp = "";
  let res = "";
  rand === 1
    ? (comp = "rock")
    : rand === 2
    ? (comp = "paper")
    : rand === 3
    ? (comp = "scissors")
    : (comp = "error");

  comp === usr
    ? (res = "tie")
    : comp === "rock" && usr === "scissors"
    ? (res = "lose")
    : comp === "paper" && usr === "rock"
    ? (res = "lose")
    : comp === "scissors" && usr === "paper"
    ? (res = "lose")
    : (res = "win");
  console.log(`Computer picked: ${comp}. User picked: ${usr}. User ${res}`);
};

playGame("rock");
