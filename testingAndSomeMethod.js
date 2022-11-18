const arry =[22,34,43,54,66]
let b = arry.every((val)=>{
   return val%2==0
})  
console.log('EVERY METHOD '+b);

let c=arry.some((value)=>{
    return value%2==0
})
console.log("SOME METHOD :"+c);

const arr =[{id:1,name:"gokul",name2:"sree",age:24}
            ,{id:2,name:"gokul",name2:"vars",age:23}
            ,{id:3,name:"karthick",name2:"KN",age:25}]

let d =arr.every((item)=>{
    return item.name=='gokul'
})

console.log("every method is used object :"+d);


let f=arr.map(function(val){
    let h=[val.name,val.name2].join(" ")
    var n ={id:val ,fullname:h}
  return n
})
console.log(f);


// reduce method

let Red=[23,455,34,22,90,10];

let redFun = Red.reduce(function(previousValue,currentValue){
    return previousValue+currentValue;
})
console.log("reduce method"+redFun);

let redFunc =arr.reduce(function(previousValue,currentValue){
    return previousValue+currentValue.age
},0)
console.log ( "reduce method used in object "+redFunc);



