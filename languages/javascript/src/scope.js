// Problem 1 - Lexical scope
export const problem1 = () => {

    const fruitName = "🥭"

    function getName() {
        console.log(fruitName);
    }

    function fruit() {
        const fruitName = "apple";
        getName();
    }

}

// Problem 2 - this pointer

const problem2 = () => {

    let pokemon = {
        name: "blastoise",
        type: "💧",
        getType() {
            setTimeout(() => {
                console.log(this.type);
            }, 0)
        }
    }


    pokemon.getType()

}

// Problem 3

const problem3 = () => {

    let pokemon = {
        name: "Charizard",
        type: "🔥",
        getType: () => {
            console.log(this.type);
        }
    }


    pokemon.getType()

}


export default {
    problem1,
    problem2,
    problem3
}