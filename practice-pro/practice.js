const icecream = [
    {
        comapnyName: "amul",
        flavour: "choco",
        rate: 20
    },
    {
        comapnyName: "amul",
        flavour: "vanila",
        rate: 300
    },
    {
        comapnyName: "amul",
        flavour: "stawberry",
        rate: 20
    },
    {
        comapnyName: "amul",
        flavour: "buttersoctch",
        rate: 40
    },
    {
        comapnyName: "amul",
        flavour: "rabdi",
        rate: 100
    },
    
]


const wine = [
    {
        type: "vodka",
        price: 10
    },
    {
        type: "beer",
        price: 90
    },
    {
        type: "scotch",
        price: 10
    },
]
let daaru = wine
daaru.forEach( (ok) => {
    console.log(ok.type);
})
const cart = icecream
cart.forEach( (item) => {
    console.log(item.flavour);
})

