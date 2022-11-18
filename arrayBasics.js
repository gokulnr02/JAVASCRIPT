// array -----> a collection of data

// finding element of array
let cars =['shift','skoda','MG','BMW','audi']
console.log(cars.indexOf('MG'))  //----->find the position
console.log(cars.includes('MG'));  //--->checking value of array whether in or out following ture or false


// finding a elements on refernce data type
const empDetails =[{id:1,name:"gokul",place:"kolathur"},
                   { id:2,name :"sri",place:"anthiyur"},
                {id:3,name:"karthikeyan",place:"kabilar malai"}]

var val = empDetails.findIndex((details)=>{      //----->find index used for objects 
    return details.name==="karthikeyan"
})

console.log(val);

var val2 = empDetails.find((details)=>{      //----->find index used for objects 
    return details.name==="karthikeyan"
})

console.log(val2);

// array elements value zero 

const arry2=[23,43,53,63,73,83];

let DeltValves =arry2.splice(0,arry2.length)      //----->delete all elements of array

console.log(arry2);

const arry3=[23,43,53,63,73,83];

const arr4=[44,55,66];

let arr5=arr4.concat(arry3);            //------concat
console.log(arr5);

console.log(arr5.slice(2,7));         //------> extract thats wants to show some secting values

let arr6 = [...arr5];
console.log("spread operator use:"+arr5)

// Joing and spliting array

// split

const arr1="gokul vars";
let splt =arr1.split(" ");
console.log(splt);

let JoinValues = splt.join("$'");
console.log(JoinValues)

// sorting ------> used to ascending purpose

let brry = [34,23,15,66,44,78]

let brrySort=brry.sort()
console.log(brrySort)
