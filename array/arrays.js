const array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const another_array = array.flat(Infinity)

console.log(another_array)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
