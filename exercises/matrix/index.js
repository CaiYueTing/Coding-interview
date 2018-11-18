// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    var arr = []
    for (let i = 0; i <n; i++){
        arr.push([])
    }
    
    startRow = 0
    endRow = n-1
    startCol =0
    endCol = n-1
    count = 1
    while(endRow>=startRow && endCol>=startCol){

        for (let i=startRow; i<=endRow;i++){
            arr[startCol][i] = count
            count++
        }
        startCol++
        console.log(arr)

        for (let i=startCol; i<=endCol;i++){
            arr[i][endRow] = count
            count++
        }
        endRow--
        console.log(arr)

        for (let i=endRow;i>=startRow;i--){
            arr[endCol][i] = count
            count++
        }
        endCol--
        console.log(arr)

        for (let i=endCol;i>=startCol;i--){

            arr[i][startRow] = count
            count++
        }
        startRow++
        console.log(arr)

    }
    console.log(arr)
    return arr
}

module.exports = matrix;
