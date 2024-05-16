const mySym = Symbol("key1")


const JsUser = {
    name: "Deepak",
    "full name": "Deepak sharma",
    [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "Deepaksharma@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser)