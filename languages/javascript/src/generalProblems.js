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
2. Custom Polyfill for apply method
3. Debouncing and throtling  
4. Implement

myIncome().crore(15).
lakh(29).
thousand(100)......
value();

5. 

1500.crore()

6. 

"Pokemon".repeat(3,";"); //output - pokemon;pokemon;pokemon









*/

export default {
  problem1
};
