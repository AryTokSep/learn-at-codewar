// Mendapatkan jumlah dari dua buah array
// ada dua buah array yang berisi angka
// menjumlahkan semua angka di dua buah array tersebut

//menggunakan looping dasar
// function arrayPlusArray(arr1, arr2) {
//     let total = 0;
//     for (let i = 0; i < arr1.length; i++) {
//         total += arr1[i];
//     }

//     for (let i = 0; i < arr2.length; i++) {
//         total += arr2[i];
//     }

//     return total;
//   }


//menggunakan variable arguments
// function arrayPlusArray(arr1, arr2) {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         for (let j = 0; j < arguments[i].length; j++) {
//             total += arguments[i][j]
//         }
//     }

//     return total;
//   }


//menggunakan spread operator dan menggunakan fungsi reduce (accumulator dan currentValue)
// function arrayPlusArray(arr1, arr2) {
//    return [...arr1, ...arr2].reduce((acc, curr) => acc + curr, 0);
//   }



//mempersingkat
const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, curr) => acc + curr);



console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
