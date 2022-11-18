//    OOPS 
// procedurel progamming is about written precedurel or  methods to perform operations
// in onjects.
// while oops created object that contains both data and methods
// its faster and easier to excute .it provides clear structure for programs.
   
   
   
   const bike={
        name : "discover",
        model :2013,
        insurence : true,
        details(){
          var msg=  `my bike model name is ${this.name} ,
          model of the bike ${this.model}, 
          insurence is current is ${this.insurence}`
           console.log(msg);
        }
    }

bike.details();
    
   