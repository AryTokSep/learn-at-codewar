// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)

// membuat function untuk mengambil collection, kembalikan angka dari point team (x)

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

//menggunakan looping dan ambil karakter index ke 0 dan index ke 2 (1:0), index pertama (:) tidak di masukan
// function points(games) {
//     let result = 0;
//     for (let i = 0; i < games.length; i++) {
//         if (games[i][0] > games[i][2]) {
//             result += 3
//         } else if (games[i][0] === games[i][2]) {
//             result += 1
//         }
//     }
//     return result;
//   }

//menggunakan higher order function reduce() dengan accumulator
//menggunakan destructuring dan ternary
const points = (games) => games.reduce((acc, [x, _, y]) => (x > y ? 3 : x < y ? 0 : 1) + acc, 0);



console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))