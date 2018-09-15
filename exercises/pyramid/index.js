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

function pyramid(n) {
    const totalcol = (n+1)/2

    for (let row =0; row<n ;row++){
        let str = ''
        for (let col=0; col<totalcol;col++){
            (row<=col)? str+='#' :' '
        }
    }

}

module.exports = pyramid;
