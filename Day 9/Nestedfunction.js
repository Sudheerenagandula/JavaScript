//..................NESTED FUNCTION
//...............this is simple calling nested function..............

// function parent(){
//     console.log('this is parent function')
//     function child(){
//         console.log('this is child function')
//     }
//     child();
// }
// parent();

//.............we have to return child this is create a variable and call function............
// function parent(){
//     console.log('this is parent function')
//     function child(){
//         console.log('this is child function')
//     }
//     return child;
// }
// var fun=parent();
// fun();

//..........this is calling child inside a child.............
// function parent(){
//     console.log('this is parent function')
//     function child(){
//         console.log('this is child function')
//         function child2(){
//             console.log('this is child2 function')
//         }
//         return child2;
//     }
//     var a=child();
//     return a;
// }
// var fun=parent();
// fun();

//...................IIFE nested function...........

// (function(){console.log('this is function 1')(function(){console.log('this is function 2')})()})();

// var a=function(){
//     console.log("this fun 1")
//     var b=function(){
//         console.log("this fun 2")
//     }
//     return b
// }
// var fun=a()
// fun()

// var a=()=>{
//     console.log("this is fun1")
//     var b=()=>{
//         console.log("this is fun 2")
//     }
//     return b
// }
// var fun=a()
// fun()