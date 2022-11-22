// ES6
 class Naming {
    constructor (name="Anonymous"){
        // let x = 9  Private variable
        this._name=name;  //Private Vaiable 
        this.age=18;
        
        Object.defineProperty(this,"newAge",{
            set:()=> this.age=20
        })
    }
}

const TOOBAD = new Naming();
console.log(TOOBAD._name)
console.log(TOOBAD.age)


// Construtor Function
export const tee=  function (name){
    this.name=name;
    this.age=10;
    Object.defineProperty(this,"origin",{
        get: ()=> console.log("Osun")
    })
}

const OLA = new tee();
console.log(OLA.age)
console.log(OLA.origin)

