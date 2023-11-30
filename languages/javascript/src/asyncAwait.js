// function getTweet() {
//     promise.resolve('Anoop')
//     console.log('hi get tweet')

// }

// async function getData() {
//     console.log("hi async")
//     const data = await getTweet();
//     console.log("bye async")
// }

// console.log("hi global");

getData();

export const problem1 = () => {
    function getTweet() {
        return new Promise((resolve, reject) => {
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

    console.log("hi global");
    getData();
}

export default {
    problem1
}