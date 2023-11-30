// Problem 1
// ECMA Specification - https://262.ecma-international.org/5.1/#sec-11.9.3

const age = 28;
const userObject = [28];

if (age == userObject) {
    console.log('true');
}

// Problem 2

const testParams = [null, undefined, NaN, Infinity, -Infinity, 0, -0, 1, -1, [], {}]

testParams.forEach(ele => {
    if (ele) {
        console.log(`%c ${ele} - true`, 'color: green')
    } else {
        console.log(`%c ${ele} - false`, 'color: red')
    }
})
