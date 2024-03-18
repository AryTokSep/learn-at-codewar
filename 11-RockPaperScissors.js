// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"


// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!";
//     if (p1 === "rock" && p2 === "scissors") {
//       return "Player 1 won!";
//     } else if (p1 === "scissors" && p2 === "paper") {
//       return "Player 1 won!";
//     } else if (p1 === "paper" && p2 === "rock") {
//       return "Player 1 won!";
//     } else {
//       return "Player 2 won!";
//     }
//   };


// menggunakan or ||

// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!";
//     if (p1 === "rock" && p2 === "scissors" || p1 === "scissors" && p2 === "paper" || p1 === "paper" && p2 === "rock") {
//       return "Player 1 won!";
//     } else {
//       return "Player 2 won!";
//     }
//   };


//menggunakan ternary

// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!";

//     return (p1 === "rock" && p2 === "scissors" || p1 === "scissors" && p2 === "paper" || p1 === "paper" && p2 === "rock") ? "Player 1 won!" : "Player 2 won!"
//   };


//menggunakan ternary di dalam ternary

// const rps = (p1, p2) =>  (p1 === p2 ? "Draw!" : (p1 === "rock" && p2 === "scissors" || p1 === "scissors" && p2 === "paper" || p1 === "paper" && p2 === "rock") ? "Player 1 won!" : "Player 2 won!");


//menggunakan object (pasangan antara keys dan value) menggunakan string literal `

const rps = (p1, p2) => {
    const rules = {
        rock: "scissors",
        scissors: "paper",
        paper: "rock",
    };
    return p1 === p2 ? "Draw!" : `Player ${rules[p1] === p2 ? '1' : '2'} won!`;
  };


console.log(rps('rock', 'scissors'));