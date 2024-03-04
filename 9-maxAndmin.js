//Looping

// var min = function(list){
//     let minValue = list[0];
//     for(let i = 1; i < list.length; i++) {
//       if(minValue > list[i]) {
//         minValue = list[i];
//       }  
//     }
//     return minValue;
// };

// var max = function(list){
//     let MaxValue = list[0];
//     for(let i = 1; i < list.length; i++) {
//       if(MaxValue < list[i]) {
//         MaxValue = list[i];
//       }  
//     }
//     return MaxValue;
// }


//mengurutkan array dari yang paling kecil ke paling besar (nilai minimal = elemen dengan index pertama dan nilai maksimal = elemen dengan index terakhir)
//menggunakan pengurutan bilangan

const min = (list) => list.sort((a, b) => a - b)[0];

const max = (list) => list.sort((a, b) => b - a)[0];
 

//menggunakan function min dan max: Math.min()
//ubah array menjadi angka dengan menggunakan spread operator contohnya: [1, 2, 3] = 1, 2, 3

// const min = (list) => Math.min(...list);

// const max = (list) => Math.max(...list);

console.log(min([42, 54, 65, 87, 0]))
console.log(max([42, 54, 65, 87, 0]))