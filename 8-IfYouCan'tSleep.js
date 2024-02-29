var countSheep = function (num){
    let result = ''
    for (let i = 1; i <= num; i++) {
        result += i + ' sheep...';
    }
    return result;
  }


//menggunakan string literal

// var countSheep = function (num) {
//     let result = ''
//     for (let i = 1; i <= num; i++) {
//         result += `${i} sheep...`;
//     }
//     return result;
// }


//menggunakan rest operator

// var countSheep = function (num) {
//     return [...Array(num)].map((_,i) => `${i + 1} sheep...`).join('');
// }



//diubah menjadi function expression

// const countSheep = (num) => [...Array(num)].map((_,i) => `${i + 1} sheep...`).join('');

console.log(countSheep(3));