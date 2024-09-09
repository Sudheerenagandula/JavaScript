//  Trim method
// var a=" S A G A R ";
// console.log(a);
// var aa=a.trim();
// console.log(aa);
// console.log(a.trimStart());
// console.log(a.trimEnd());

// replace method
// var b="ankit is frontend developer. and he will good at frontend and pavan is also frontend developer"
// console.log(b);
//  b=b.replace("frontend","backend");
//  console.log(b)
// b=b.replaceAll("frontend","fullstack")
// console.log(b)

// padstart and padend
// var c="100"
// c=c.padStart(8,"hii")
// console.log(c)
// var d="SAGAR"
// d=d.padEnd(8,"SAI")
// console.log(d)

//split method
// var e="SAAG AR is bad"
// console.log(e)
// e=e.split(" ")
// console.log(e)
// e=e.split("")
// console.log(e)

//startwith and endwith
// var f="pavan is good developer and is fullstack  is also"
// console.log(f)
// // console.log(f.startsWith("pavan"))
// // console.log(f.endsWith("also"))

// //indexof  lastindexof  includes methods
// console.log(f.indexOf("is",29))
// console.log(f.lastIndexOf("is"))
// console.log(f.includes("pavan"))

// //touppercase  tolowercase methods
// console.log(f.toUpperCase())
// console.log(f.toLowerCase())

var z="Today is Friday and Tomo is Saturday ,on Friday we go to Temple.Friday feels good";
console.log(z);
// console.log(z.replace("on Friday","on MOnday"))
console.log(z)
console.log(z.indexOf("Friday",10))
var z1=z.slice(0,41)
console.log(z1)
var z2=z.slice(41)
console.log(z2)
z2=z2.replace("Friday","Monday")
console.log(z1+z2)