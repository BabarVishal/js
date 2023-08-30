// var let const......................................................

// var function scoped hota he!

     function abcd (){
        for ( var i = 0; i < 12; i++){
            console.log(i);
        }
        console.log(i);
     }

     abcd();                     // Output = 12;

 // let Bresess scoped hota he!
 
 function vishal (){
    for ( let i = 0; i < 12; i++){
        console.log(i);
    }
    console.log(i);
 }

 vishal();                           //Output = 11;



// execution context matlab jab jum function chalayenge function apna kudka ek imagnary 
// contanar bana lega jisme uski teen cheeje hogi 
// 1) variable.
// 2) Function inside that parent function.
// 3) lexical environment of that function.
//    -----> lexical enviroment hota hai ek chart jisme ye likha hota hai ke 
//           aapka particular function ki cheejo ko access kar sakta hai
//           and kinko nahi, matlab ki holds its scope and scope chain! 

function cantener (){
    var a = 22;
    function cantener2(){
        var b = 23;
    }
}

cantener();

// Spere Opratar.............................................................
//   ---> copy the arry

var a = [1,2,3,4,5];

var b = [...a];

b.pop();

var obj = {name:"Vishal"};
var copyobj = {...obj};  


// Foreach......

var a = [1,2,3,44,55,6,,66,55,];

a.forEach(function(val){
    console.log(val + 2);
})


//object...........................................................

var obj = {
    name : "Vishal",
    age : 11,
    city : "jalna",

}

for (var key in obj){
 console.log(key,obj[key]);
}

setTimeout(function(){

    console.log("2 Second baad")

    // for (let i = 0; i < 10; i++){
        
    //     console.log("2 Second baad")
    // }
    
},2000);


