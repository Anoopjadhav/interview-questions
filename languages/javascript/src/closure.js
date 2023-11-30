//Problem 1 

const problem1 = () => {

    let x = 100;

    function abc() {
        return x + 10;
    }

    function overload(sub) {
        let x = 30;
        return sub;
    }

    console.log(
        overload(abc)()
    )

}


//Problem 2

const problem2 = () => {

    let x = 100;

    const print = function printValue() {
        return x;
    }

    x = 20

    console.log(
        print()
    )

}

export default {
    problem1,
    problem2
}