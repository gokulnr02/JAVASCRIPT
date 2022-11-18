// LOOPS
// loops through a block of code number of times

// FOR LOOPS

for(let i=0;i<=10;i++)
{
    if(i%2==0)
    console.log("even num :"+i); 
}


// *********************************************************************

// while loop
let g=10; 
while(g>0){
    console.log("while num :"+g )
    g--;
}
// **********************************************************************

// do while loop
let s=20;
do{
    if(s%2==0)
    console.log("do while output is "+s);
    s++;
}
while(s<=30);

// ***********************************************************************
// for in loop
// loops through the  properties of an objects
const obj1={
    name:"gokul_vars",
    age: 24,
    gender:"male"
}
for(let key in obj1){
    console.log(key+":"+obj1[key])
}

const arry1=['gokul','sri','karthikeyen','ramanan']
// for loop used array
for (let arr in arry1){
console.log("for in loop   :"+arry1[arr])
}
// *************************************************************************

// for of loop
// loops through the values
const arry2=['gokul','sri','karthikeyen','ramanan']
for (let key1 of arry2 ){
    console.log("for of loop   :"+key1);
}
