"use strict";
// let a=12;
Object.defineProperty(exports, "__esModule", { value: true });
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
// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   greet(): void {
//     console.log(`Hello, my name is ${this.name}`);
//   }
//   Age(): void {
//     console.log(`I am ${this.age} years old`);
//   } 
// }
// let person1 = new Person("Lipun", 21);
// person1.greet();
// person1.Age();
// class bottleMaker{
//   constructor(public name : String , public Price:number ,public Colour :String,public Mterial : String){
//   }
// }
// let bottle1 = new bottleMaker("Lipun", 200, "Red", "Plastic");
// console.log(bottle1);
//This Key Word
// class bottleMaker{
//   constructor(public name : String , public Price:number ,public Colour :String,public Mterial : String){
//   }
// }
// let bottle1 = new bottleMaker("Lipun", 200, "Red", "Plastic");
// console.log(bottle1);
//Access Modifiers
// class Person {
//   private age: number;
//   constructor(age: number) {
//     this.age = age;
//   }
//   showAge() {
//     console.log(this.age); // ✅ allowed
//   }
// }
// const p1 = new Person(22);
// p1.showAge(); // ✅ allowed
// class Animal {
//   protected sound: string = "Some sound";
// }
// class Dog extends Animal {
//   showSound() {
//     console.log(this.sound); // ✅ allowed
//   }
// }
// const d = new Dog();
// d.showSound(); // ✅ allowed
// // console.log(d.sound); ❌ Error
//Getter & Setter
class User {
    _name;
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let a = new User("Lipun");
console.log(a);
a.name = "John";
console.log(a);
//# sourceMappingURL=index.js.map