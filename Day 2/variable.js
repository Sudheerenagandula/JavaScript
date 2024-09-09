// status                      var   let     cont

// declaration                 pos   pos     notpos
// for dec and ini             pos   pos     notpos
// for dec along with init     pos   pos     pos
// for recdec                  pos   notpos  notpos
// for reinit                  pos   pos     notpos
// hoisting                    pos   notpos  notpos
// scope                       pos   pos     pos
// scopeblock                  pos   notpos  notpos

//for declaration   
// var a;
//  let b;
//  const c;

//for declaration and inilitation
// var a;
//  a=10;
// console.log(a);
// let b;
// b=20;
// console.log(b);
// const c;
// c=30;
// console.log(c);

//dec along with init
 
//var a=20;
//console.log(a)
//let b=69
//console.log(b)
// const c=34
// console.log(c)

// for redeclaration

//var a=20;
//console.log(a)
//let b=55;
//console.log(b)
//const c=44;
//console.log(c)

//for reililization

// var a=20
// a=30
// console.log(a)
// let b=47
// b=55
// console.log(b)
// const c=45
// c=99
// console.log(c)

// for scope

//  var a=20
//  {
//     console.log(a)
//  }
//  let b=55
//  {
//     console.log(b)
//  }
//  const c=99
//  {
//     console.log(c)
//  }

// {
//     var a=56
// }
// console.log(a)
// {
//      let b=99
// }
//  console.log(b)
// {
//     const c=99
// }
// console.log(c)

// function fun() {
//     const a=90
// }
// fun()
// console.log(a)

document.getElementById("b").innerHTML="this is my javascript"
document.getElementById("a").innerHTML="<details> <summary>java</summary><h1>this is heading</h1></details>"
console.log("hey buddy");
var msg;
msg = "hello world";
alert(msg);