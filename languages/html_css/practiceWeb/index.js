// Problem 1
/*
function getTweet() {
    console.log('hi get tweet')
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Anoop")
        }, 1000)
    })
}

async function getData() {
    console.log("hi async")
    const data = await getTweet();
    console.log(data);
}

getData();
console.log("hi global");
*/

// OOP, Prototype, New Keyword, Class 
/*
function Fruit(name) {
    const obj = Object.create(functionStore)
    obj.name = name;
    return obj;
}
const functionStore = {
    getName: function () {
        this.name;
    }
}

const mango = Fruit('mango');
console.log(mango)


function AlagFruit(name) {
    this.name = name;
}
AlagFruit.prototype.getName = function () {
    return this.name;
}
const alagMango = new AlagFruit('mango');
console.log(alagMango)

class BahutAlagFruit {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

const bahutAlagMango = new BahutAlagFruit('mango');
console.log(bahutAlagMango)
*/
