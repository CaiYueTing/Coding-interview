// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const arr = [root,'s']
    let counter = []
    let count = 0
    while (arr.length){
        const node = arr.shift()
        if (node != 's'){
            count ++
            arr.push(...node.children)
        }else {
            counter.push(count)
            count = 0
            if (arr.length != 0){
                arr.push('s')
            }else {
                return counter
            }    
        }
    }
}

module.exports = levelWidth;
