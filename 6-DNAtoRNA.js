// function DNAtoRNA(dna) {
//     let rna = '';
//     for (let i = 0; i < dna.length; i++) {
//         // if (dna[i] === 'T') {
//         //     rna += 'U';
//         // } else {
//         //     rna += dna[i];
//         // }
//         rna += dna[i] === 'T' ? 'U' : dna[i];
//     }
//     return rna;
//   }

//using conditional ternary operator

//rna += dna[i] === 'T' ? 'U' : dna[i];

//using map higher order function

const DNAtoRNA = (dna) => {
    return dna
    .split('')
    .map ((el)=>(el === 'T' ? 'U' : el))
    .join('');
}


console.log(DNAtoRNA('TTTT'));