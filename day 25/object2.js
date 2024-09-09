// var obj={
//     add:function(a,b)
//     {
//         return a+b
//     },
//     sub:function(a,b)
//     {
//         return a-b
//     },
//     mul:function(a,b)
//     {
//         return a*b
//     }
// }
// console.log(obj.add(2,3))
// console.log(obj.sub(8,2))
// console.log(obj.mul(4,5))

// ...............This keyword........................

// var empdet={
//     fname:"Pavan",
//     lname:"Marrutori",
//     empid:101,
//     empsal:"10cr",
//     fullname:function()
//     {
//         return this.empid+" "+this.empsal
//     },
//     empdetails:function()
//     {
//         return this.fname+" "+this.lname
//     }

// }
// console.log(empdet.fullname())
// console.log(empdet.empdetails())

// ................object by creating new object...........

// var obj=new Object();
// console.log(typeof obj)
// obj.fname="ANKIT"
// obj.lname="DEWADI"
// obj.sal="50trillion"
// obj.id=108
// obj.fullname=function()
// {
//     return this.fname+" "+this.lname
// }
// console.log(obj.fullname())

// obj.fullnamerev=function()
// {
//     return this.fullname()+" and he got salary "+this.sal
// }
// console.log(obj.fullnamerev())

// function person(fname,lname,age,gender,sal)
// {
//     this.fname=fname
//     this.lname=lname
//     this.age=age
//     this.gender=gender
//     this.sal=sal
//     this.add=function(a,b)
//     {
//         return a*b
//     }
// }
// var pavan=new person("kususl","kumar",999,"others","50cr")
// console.log(pavan)
// console.log(pavan.add(2,3))