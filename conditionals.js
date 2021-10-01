// const raining = true;
// const cold = false;

// if (raining) {
//   console.log("Don't forget your umbrella!");
// }

// if (cold) {
//   console.log("Make sure you pick out a scarf!");
// }

// console.log("Now you're ready to go outside!");


// const temperature = 12;

// if (temperature < 0) {
//   console.log("Make sure you pick out a scarf!");
// } else if (temperature < 15) {
//   console.log("Short sleeves won't cut it!");
// } else {
//   console.log("Short sleeves are fine.");
// }

// console.log("Now you're ready to go outside!");
// const isCitizen = true;
// const age = 26;

// if (isCitizen && age > 18) {
//   console.log("You are eligible to vote.");
// }
// if (temperature < -40 || temperature > 40) {
//   console.log("Maybe going outside isn't such a great idea…");
// }
// if (!raining) {
//   console.log("Leave your umbrella at home!");
// }
var x = 1;

while (/* your stop condition goes here */x <= 20) {
    // check divisibility
    // print Julia, James, or JuliaJames
    // increment x
   console.log (x % 3 ? (x % 5 ? 'JuliaJames' : 'Julia') : x % 5 ? 'James' : x)
   x += 1;
}
