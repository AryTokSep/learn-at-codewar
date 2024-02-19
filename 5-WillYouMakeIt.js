// Soal : Will you make it?


// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump / mpg <= fuelLeft;
//   };



const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return fuelLeft * mpg >= distanceToPump;
  };


  console.log(zeroFuel(50, 25, 2));