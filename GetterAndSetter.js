// GETTER -----> it's used to get data at funnction
// SETTER -----> it's used to set data at funnction

const student  ={
   firstName :"gokul",
   lastName  :"vars",
   get GetNameFun(){
    return [this.firstName ,this.lastName].join("  ");
   },
   set GetNameFun(value){
    let values =value.split(" ");
    this.firstName=values[0];
    this.lastName=values[1];
   } 
}
student.GetNameFun='karthick vars';
student.GetNameFun='sree vars';

console.log(student.GetNameFun);