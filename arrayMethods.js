//  ARRAY ---> array is collection of data

// Adding Elements on Array
//  1. push  -------> values adding end of the array 
//  2. unshit-------> values adding starting position of array
//  3. splice-------> values adding you specifies a poisition that place adding

let Fruits =['grapes','apple','banana']
Fruits.push('mango')
console.log(Fruits);
Fruits.unshift('orange');
console.log(Fruits);
Fruits.splice(1,0,'guva');
console.log(Fruits);

// removing the elements of Array
//  1.pop -----> values delete by last position
//  2.shift----> values delete by first position
//  3.splice --->  same as adding method but position and removing position gives 

Fruits.pop();
console.log(Fruits);
Fruits.shift();
console.log(Fruits);
Fruits.splice(1,2);
console.log(Fruits);
