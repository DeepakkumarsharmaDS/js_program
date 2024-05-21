const userLOggedIn = true
const temperature = 51

if(temperature === 41){
    console.log("yes, temperature is 41");
}
else{
    console.log("temperature is either down or high then 41");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}