// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     const totalcol = n*2-1
//     const midpoint = n-1 // Math.floor(totalcol/2)
//     for (let row =0; row<n ;row++){
//         let str = ''
//         for (let col=0; col<totalcol;col++){
//             (col>=n-1-row && col<=n-1+row)?str += '#':str +=' '            
//             // (col>=midpoint-row && col<=midpoint+row)?str += '#':str +=' '
//         }
//         console.log(str)
//     }
// }

function pyramid(n, row =0, str ='') {
    if (row ===n){
        return;
    }

    if (str.length === 2*n-1){
        console.log(str)
        return pyramid(n, row+1)
    }
    let col = str.length
    let add;
    (col>=n-1-row && col<=n-1+row)?add = '#':add =' '  
    pyramid(n,row, str+add)
}

module.exports = pyramid;
