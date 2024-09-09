//..............................[IIFE function].........................
// (function(){
//     console.log("this is an IIFE function there is no need to call it")
// })();

// (function(){
//     console.log("this is 2nd IIFE function ")
// })();

// console.log(fun)
//  var fun=(function(a,b){
//     console.log("addbetween "+a+" and "+b+" is "+(a+b))
//     return a+b+11
// })(2,4);
// console.log(fun)
//..............................[ANNONOMUS FUNCTION].......................
// var a=function(){
//     console.log("this ananomous fun")
// }
// a()
// console.log(typeof a)

// var f=function(a,b){
//     console.log(a+b)
//     return a+b+10
// }
//  var fu=f(2,2)
//  console.log(fu)

//.................................[ARROW FUNCTION]..........................

// var add=(a,b)=>{
//     console.log(a+b)
// }
// add(3,6)

// var add=a=>{
//     console.log(a+10)
// }
// add(11)

// var add=(a,b)=>a+b
// console.log(add(3,4))

// var add=(a,b)=>{
//     return a+b
// }
// console.log(add(2,2))
// var add=a=>{
//     return a+20
// }
// console.log(add(2))

//......................[CALL BACK FUNCTION && HIGHER ORDER FUNCTION]............

// function callbackfun(){
//     console.log("this is call back function")
// }
// function higherorder(fun){
//     console.log("this is higher order function")
//     fun()
// }
// higherorder(callbackfun)

//.........................finding remaining square part by CALL BACK FUNCTION && HIGHER ORDER FUNCTION...................

// function cir(r){
//     var area=3.14*r*r;
//     console.log("area of circle="+area)
//     return area;
// }
// function tri(b,h)
// {
//     var area=0.5*b*h
//     console.log("area of triangle="+area)
//     return area
// }
// function squ(s){
//     var area=s*s
//     console.log("area of square="+area)
//     return area
// }
// function rec(l,b){
//     var area=l*b
//     console.log("area of rectangle="+area)
//     return area
// }

// function higherorder(c,t,s,r,side){
//     var total=side*side
//     console.log("total area of bigsquare="+total)
//     var rem=total-(c(10)+t(10,30)+s(10)+r(10,20))
//     console.log("remaining part of bigsquare="+rem)
// }
// higherorder(cir,tri,squ,rec,30)


//.........................finding remaining square part by ARROW FUNCTION...................

var cir=r=>{return 3.14*r*r}
var tri=(l,b)=>{return 0.5*l*b}
var sq=s=>{return s*s}
var rec=(l,b)=>{return l*b}

var higherorder=(c,t,s,r,side)=>{
        var total=side*side
         console.log("total area of bigsquare="+total)
         var rem=total-(c(10)+t(10,30)+s(10)+r(10,20))
         console.log("remaining part of bigsquare="+rem)
}
higherorder(cir,tri,sq,rec,30);