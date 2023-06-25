function Person(name , age){
    this.name = name;
    this.age = age;

}

const p1 = new Person("Pulkit", 24)


// this keyword 
// function fun(){
//     this.name = "Pulkit"

//     console.log(this)
//     console.log(this.name)
//     console.log(this.origin)
// }

// fun()

// Explicit Binding 

// const information = {
//     name: "Pulkit", 
//     age: 20,
//     email: "abc@gmail.com"
// }

// const user = {
//     name: "Raghav",
//     age: 30,

//     print: function(){
//         console.log(this)
//         console.log(this.name)
//         console.log(this.age)
//     }
// }

// user.print();
// user.print.call(information);

// const f1 = user.print.bind(information);

// f1();