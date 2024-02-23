

//menggunakan looping (setiap looping nya masukan nilai ke dalam array kemudian gunakan function push)

function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
        z.push(i * x);
    }
    return z;
  }



//menggunakan function spread operator dan map (declaration function)

// function countBy(x, n) {
//     return[...Array(n)].map((el, i) => (i + 1) * x)
// }


//menggunakan arrow function

// const countBy = (x, n) => [...Array(n)].map((el, i) => (i + 1) * x)

console.log(countBy(2,5));
