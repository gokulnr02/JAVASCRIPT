// if else condition
let Time = new Date();
let hours = Time.getHours();

if(hours>=0&&hours<=12){
    console.log("good morning")
}
else if(hours>=13&&hours<=18)
{
    console.log("afternoon ")
}
else
{
    console.log("good night")
}

// switch case
let grade =35;
switch(true){
    case(grade>=35&& grade<=40):console.log("you are just pass")
    break;
    case(grade>=40&&grade<=50):console.log("B grade")
    break;
    case(grade>=51&&grade<=75):console.log("A grade")
    break;
    case(grade>=75&&grade<=100):console.log("S grade")
    break;
    default: console.log("FAIL")
    break;
}


