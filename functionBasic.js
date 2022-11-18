// FUCTION -----------> function is a block of code 

// function declearation 
 let a =55555449;
 let b = 43547588;

function AddFun(){
    let result =a+b;
    console.log("function declearation :"+result);
}
AddFun();    //------>function excuted when somthing calls it.
// *******************************************************************************************

// function expresstion
let AddFunExp =function AddFunExp(){
    let result1 = a+b;
    console.log("function expresstion :"+result1);
}
AddFunExp();

// *******************************************************************************************
// Anonymous function
let AddFunExp1 =function(){
    let result1 = a+b;
    console.log("Anonymous function :"+result1);
}
AddFunExp1();

// *******************************************************************************************
// Arrow function
let AddFunExpArrow =()=>{
    let result1 = a+b;
    console.log("Arrow function :",result1);
}
AddFunExpArrow();

// ********************************************************************************************
// IIFE -stands for immediately invokes function expresstion
(function(n,m){
    result5 =n+m;
    console.log("IIFE :",result5);
})(a,b);


// IIFE INSIDE ANOTHER IIFE
(()=>{
    let s=234;
    let l =657;
    let j=s+l;
    (()=>console.log("IIFE HAVE ANOTHER IIFE :",j))();

})();

// *******************************************************************************************
// ARUGMENTS

function ArungFun(){
    let final=0;
    for (let key of arguments){
        final+=key;
    }
    return final
}

let result6=ArungFun(23,34,45,56)
console.log(result6);

// ******************************************************************************************

// REST OPERATORS
function ArungFunRest(...args){              //rest operator used function 
   let result8=args.reduce((a,b)=>a+b)
   return result8
    
}

let result7=ArungFunRest(23,34,45,56)
console.log("REST OPERATORS",result7);

// ******************************************************************************************
// DEFAULT PARAMETER

function DeflFun(salery ,tax=1500)   //passing arguments directly into parameter .
{
let TotalAmt = salery+tax;
console.log("total amount gained :",TotalAmt)
}
 let DeflArg =DeflFun(15000)

//  ****************************************************************************************
