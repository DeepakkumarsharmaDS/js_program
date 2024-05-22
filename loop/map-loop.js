const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myNewNum = myNumers.map( (i) => i * 10).map( (i) => i + 2).filter( (i) => i >=20 )

console.log(myNewNum);