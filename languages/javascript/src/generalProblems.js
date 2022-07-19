/*
1. Custom implementation of Flat Map

for eg. [1, 2, [3, 4], 5];

*/
export const problem1 = () => {
  const arr = [1, 2, [3, 4], 5, [6, 7, [8, 9, [10, 11]]]];

  Array.prototype.customFlatMap = function () {
    const newArray = [];
    this.forEach((ele) => {
      if (Array.isArray(ele)) {
        newArray.push(...ele.customFlatMap());
      } else {
        newArray.push(ele);
      }
    });
    return newArray;
  };

  console.log(arr.customFlatMap());
};



/*
2. Custom Polyfill for bind or apply method
*/

export const problem2 = () => {
  const pokemon = {
    name: 'pikachu',
    type: 'electric'
  }

  const mouse = {
    getType: function () {
      return this.type
    }
  }




  //Ans 1
  Function.prototype.customBind = function (newContext) {
    return this.bind(newContext)()
  }
  //Ans 2
  Function.prototype.customBind = function (newContext) {
    newContext[this] = this;
    return newContext[this]()
  }

  // console.log(mouse.getType.apply(pokemon))
  console.log(mouse.getType.customBind(pokemon))
}

/*
3. Debouncing 
*/
export const problem3 = () => {

}
/*
4. Throtling  
*/

export const problem4 = () => {

}

/*
5. Implement

myIncome().crore(15).
lakh(29).
thousand(100)......
value();
*/
export const problem5 = () => {

  // Sol 1
  function myIncome(intialIncome = 0) {
    let income = intialIncome;
    return {
      crore: (val) => myIncome(income += val * 10000000),
      lakh: (val) => myIncome(income += val * 100000),
      thousand: (val) => myIncome(income += val * 1000),
      value: () => income
    }
  }
  // sol 2
  function myIncome() {
    let currentValue = 0;
    return {
      crore: function (param) {
        currentValue += param * 10000000;
        return this;
      },
      lakh: function (param) {
        currentValue += param * 100000;
        return this;
      },
      thousand: function (param) {
        currentValue += param * 1000;
        return this;
      },
      value: () => currentValue
    };
  }

  console.log(
    myIncome().crore(15).lakh(29).thousand(100).value()
  );

}

/*
6. 

"Pokemon".repeat(3,";"); //output - pokemon;pokemon;pokemon

*/
export const problem6 = () => {

  String.prototype.customRepeat = function (count, character) {
    const newStringArr = new Array(4).fill(this);
    return newStringArr.join(character)
  }

  console.log("pokemon".customRepeat(3, ";"))
}

export default {
  problem1,
  problem2,
  problem3,
  problem4,
  problem5,
  problem6,
};
