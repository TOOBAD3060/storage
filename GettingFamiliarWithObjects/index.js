//          WAYS OF CREATING OBJECTS

//      1. Object Literal Way

const myDetails = {
    fullName: "TOOBAD NLA",
    occupation:"Web Developer"
// This object has only properties as its member(No method)
}

console.log(myDetails);
//     2. Factory Function Way

function entertainment(category,aim){
    return  {
            type:"sports",
            category:category,
            action: function(){
                console.log(`${aim} always`)
            }
        }
    
// This object has both properties and method as its members
// When an object has at least a method,it is said to have a behaviour
}
entertainment("football","Fair play").action();
console.log(entertainment("rugby","rough play"));


//  3. Constructor Function Way

function ProperNaming(name){
   {
    this.name=name;
}
}

const Ola = new ProperNaming("Lekan");
console.log(Ola.name);


//  Working with properties

let x;

function increase(){
 return {
    gender:"male",
    name:"boss",
    intro: function(){console.log("I hail ooo")}
 }
 
}
x=increase()
console.log(x)

// Enumerating Properties
for (let key in x){
    if(typeof x[key] !== "string")
    console.log(key)
}

console.log(Object.keys(x))

if("gender" in x)
  console.log("x has a gender")

//    Private Properties, getters and setters

function TimeTable(){
    this.subject = "Mathematics";
    this.units = 3;
    let totalScore = 100;
    this.getTotalScore = function(){
        return totalScore;
    }
    this.success = function(){
        return "Score >= 70";
    }

    Object.defineProperty(this,"totalScore",{
        get:function(){
        return totalScore
    },
    set: function(value){
        if(typeof value !== "number")
        throw new Error("Pls assign a number")
        totalScore = value
    }
})
}

const olasco= new TimeTable();

console.log(olasco.totalScore)
olasco.totalScore=39
