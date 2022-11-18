// FACTORY FUNCTION

function factory(name){
   return{
      name ,
      age : 24,
      gender:"male",
      greeting(){
        var data = `i am ${this.name} age is ${this.age} and gender ${this.gender}`
        console.log(data);
      }

   }
}
var FactoryData =factory("gokul")
FactoryData.greeting();
var FactoryData =factory("sri gokul")
FactoryData.greeting();

// CONSTRUCTOR
//  when creates objects by using new keyword is called constructor
function constrc(name1,location){
    
        this.name2=name1,
        this.loc =location,
        this.LocHis=function(){
            var data1 =`hi this is me ${this.name2} and my self ${this.loc}`
            console.log(data1)
        };
  
}

var person1 = new constrc("gokul","salem");
person1.LocHis();