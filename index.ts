// let a=12;

// let b="c";


// enum SatusCode{
//   ABANDONED=500,
//   BANED=404,

// }
// console.log(SatusCode.BANED);
// interface User{
//   name:string;
//   age:number;
//   isAdmin:boolean;
// }


// function getUser(Obj : User){
//   console.log(Obj.name);
//   console.log(Obj.age);
//   console.log(Obj.isAdmin);
// }
// getUser({name:"John",age:30,isAdmin:true});



// const obj={
//   name:"Lipun",
//   age:23,
//   isAdmin:true,
//   role:"SOFTWARE ENGINEER"
// }
// interface User{
//   name:string;
//   age:number;
//   isAdmin:boolean;
// }
// interface Admin extends User{
//   role?:string;
// }


// function getUser(ov:Admin){
//   console.log(ov.name);
//   console.log(ov.age);
//   console.log(ov.isAdmin);
//   console.log(ov.role);
//   ov.role="Admin";
  
// }
// getUser(obj);



//UNION TYPE
// type Val=number | string | boolean;

// let a :Val;

// a=true;
// console.log(a);


//Intersection Type

// type A = { name: string };
// type B = { age: number };

// type Person = A & B;

// let p: Person = {
//   name: "Lipun",
//   age: 21
// };


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
  Age(): void {
    console.log(`I am ${this.age} years old`);
  } 
}
let person1 = new Person("Lipun", 21);
person1.greet();
person1.Age();