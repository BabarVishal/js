//variable and constants...............................

let my_name = "Vishal";
console.log(my_name);

var myAge = 55;
console.log(myAge);

const myAgee = 555;
console.log(myAgee);

//hoisting......................................................

//             variable and function are hoisted which means there 
//                  declaration is move on top of the code 

//   console.log(a);
   
// var a = 44;
//    var a;

//    a =44;


//Type in js.....................................

// Primitive and reference               

//primitive = Number,String,Null,Undefined,Boolean

//reference = [] , () , {} 


let x = 77;

let b = (x);

b = b + 22;

console.log(x,b)


//conditionals........................................................

//if else  else-if

let age = 18;

if (age > 17){
    console.log("Vishal Babar");
}
else if(age >= 20){
    console.log("Vishal Babar");
    console.log("Vishal Babar");
}
else if(age >= 220){
    console.log("Vishal Babar");
    console.log("Vishal Babar");
    console.log("Vishal Babar");
}
else{
    console.log("Vishal Babar");
    console.log("Vishal Babar");
    console.log("Vishal Babar");
    console.log("Vishal Babar");
}


//loop - for while....................................................

for (let i = 0; i < 10; i++){
    console.log(i +" Vishal");
}

// functions......................................................

function abcd(){
    console.log("VishalBabar");
    console.log("VishalBabar");
    console.log("VishalBabar");
    console.log("VishalBabar");
    console.log("VishalBabar");
}
abcd();

//arguments

function Numeber(a,b,c){
    console.log(a,b,c);
    console.log(a + b  + c);
    
}

Numeber(22,33,44);


// arry.............................................................

let arr = [22,33,33,44,55,66];
arr[1];
console.log(arr);


// push, pop, shift, unshift..........................................

let arrr = [1,2,3,4,5,6,7,];

arr.push(8);

arr.pop();

arr.unshift(0);

arr.shift();

arr.splice(2,1)
