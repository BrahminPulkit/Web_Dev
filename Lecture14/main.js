// let num = "FE";

// console.log(parseInt(num , 16))


// String in java scripit 

// let str = "this is a string";
// console.log(str[0]);
// console.log(str.length)
// console.log(str.charAt(-1));

// for(let char of str){
//     console.log(char)
// }

// let str = "this is a string is";
// console.log(str.indexOf("is", 5))

// let position = 0;
// while(true){
//     let foundPosition = str.indexOf("is", position);
//     if(foundPosition == -1) break;

//     console.log(`position is are :${foundPosition}`);

//     position = foundPosition + 1;
// }

// str[1] = "t";
// console.log(str[1]);

// let str1 = "is a string";

// if(str1.indexOf("is") != -1){
//     console.log("we have found the substring")
// };

// console.log(str1.includes("is"));
// console.log(str1.substring(2, 6))
// let string = ""

// for(let i = 65; i < 150; i++){
//     string += String.fromCodePoint(i)
// }

// console.log("}" > "z")
// console.log(string)

// Arrays in JS

// let arr = ["string" , 24, true , function(){console.log("hellow World!")}]

// console.log(arr[3]());

// arr[1] = 25;
// console.log(arr)

// arr.push("mango");

// console.log(arr);

// arr.pop();
// console.log(arr);

// const newarr = [1, 2, 3, 4]
// newarr.push("mango");
// console.log(newarr)

// newarr = [1, 2, 34, 5]
// console.log(newarr)

// let arr = [1, 2, 3, 4, 5, 6]

// for(let item of arr){
//     console.log(item);
// }

// const arr = new Array(200);
// console.log(arr);

// console.log(arr.splice(-3 , 0 , "mango", "grapes"));

// console.log(arr.slice(0, 4));

// console.log(arr)

// console.log(arr.concat([10, 11], [12, 13]) );

// console.log(arr.forEach((ele ,  pos , arr) => {
//     console.log(`the item are ${ele} , at position ${pos} , in array ${arr}`)
// }))


// const objecrArr = [
//     {
//         name : "Pulkit Sharma",
//         age: 24, 
//         city: "Dhanoura"
//     },
//     {
//         name:  "John", 
//         age: 20,
//         city: "Dhanoura"

//     },
//     {
//         name:  "Kartk ", 
//         age: 23,
//         city: "Dhanoura"
//     }
// ]

// console.log(objecrArr.find((item)=> item.name == "Pulkit Sharma"))

// console.log(objecrArr.filter((item)=>item.age <= 30));

// let newArr = [1]
// console.log(newArr.map((x)=> x*x));

// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].filter((x)=> x % 2 === 0 ));

// let sortArr = [1, 3 , 10 , 4, 8, 6 , 5]
// sortArr.sort((a , b)=> b-a);
// console.log(sortArr);

// let arr = [1 , 2 , 3]
// console.log(arr.concat([4, 5, 6]))

// console.log(arr)

// object

const persion = {
    "name" : "Pulkit Sharma" , 
    "age" : "24",
    "favColour" : "White & Black",
    printfn : function(){
        console.log("Hello World")
    },

    true: "Orange",
    "this is the a key" : true
}

// console.log(obj["this is a key"]);

console.log(Object.keys(person));

// let obj1 = {
//     name : "Pulkit Sharma",
//     age : "24"
// }