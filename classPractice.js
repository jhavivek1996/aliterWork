class Add {
    constructor(){
        console.log("Hii, I am constructor");
    }
    add(x,y,z){
        z=x+y
        console.log(z);
    }
    sub(x,y,z){
        z=x-y
        return z;
    }
}

class Data extends Add{
    constructor(){
        super();
        console.log("This is child class constructor");
    }
    mult(x,y,z){
        z=x*y;
        return z;
    }
}

let x = new Data();

// console.log(x)
console.log(x.mult(19,14));

//console.log(`Substraction :${x.sub(19,14)} and multiplication :${x.mult(5,5)}`)

// class Animal {

//     constructor(name) {
//       this.name = name;
//     }
  
//   }
  
//   class Rabbit extends Animal {
//     constructor(name) {
//         super(name);
//       this.name = name;
//       this.created = Date.now();
//     }
//   }
  
//   let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
//   console.log(rabbit.name);