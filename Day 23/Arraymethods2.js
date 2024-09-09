// var arr=["s","a","g","a","r"]
// var arr1=arr.sort()
// console.log(arr1)

// var num=[6,5,4,5,3,5,3,4,5,7,6,7]
// var num1=num.sort()
// console.log(num1)

// var num2=[23,45,7,23,787]
//  num2.sort(function(a,b)
//  {
//     return a-b;
//  })
//  console.log(num2)

//  var num3=[232,45,876,465,5]
//  num3.sort(sortnum)
//  function sortnum(x,y)
//  {
//     return x-y
//  }
//  console.log(num3)

// var num=[1,2,7,5,9]
// console.log(num.some(function(a)
// {
//     return a%2==0
// }))

// var num=[2,4,6,2,8]
// console.log(num.every(function(a)
// {
//     return a%2==0
// }))

// var num=["sagar","pavan","ankit","kusul","abhi","deeraj","kasim"]

// console.log(num.find(function (a)
// {
//     return a.length<=4
// }))

// var num=["sagar","pa","aankit","kusul","abhi","deeraj","kasim"]
// console.log(num.findIndex(function(a)
// {
//     return a.length<=2
// }))

// var num=[1,34,0,6,4,5]
// console.log(num.find(function(a)
// {
//     return a%2==0;
// }))

// var num=[1,34,0,6,4,5]
//  console.log(num.findIndex(function(a)
//  {
//     return a%2==0
//  }))

// var str=["saagar","aankit","kaasim","aabhi","deeraaj","kusuaal","paavan"]

// var str1=str.fill("lowde",2,3)
// console.log(str1)


// var arr=["s","g","e"["s","a","g","s","d","r",["s","f"],"e","r","k","y"],"m","g"]
// console.log(arr)

// var arr1=arr.flat(7)
// console.log(arr1)

// var arr=["saagar","kusul","pavan","ankit"]
// console.log(arr)
// for(i=0;i<=arr.length-1;i++)
// {
//     console.log(arr[i])
// }
// var arr1=arr.map(function(a)
// {
//     return "name is :"+a
// })
// console.log(arr1)

// var num=[2,5,7,2]
// var num1=num.map(function(b)
// {
//     return b%2
// })
// console.log(num1)

// var age=[2,16,18,45,67]

// var age1=age.filter(function(age)
// {
//     // return age>=10;
//     // return age<=10
//     return age<=45 && age>=2
// })
// console.log(age1)

// var age=[2,16,18,45,67]
// for(x of age)
// {
//     console.log(x)
// }

// for(y in age)
// {
//     console.log(y)
// }

// var age=[2,3,4,5,5,6,6,7]
// var age1=age.keys()
// for(x in age)
// {
//     console.log(x)
// }
// var age=[2,3,4,5,5,6,6,7]
// for(y of age)
// {
//     console.log(y)
// }
// var age=[2,3,4,5,5,6,6,7]
// var age=age.entries()
// for(a of age)
// {
//     console.log(a)
// }
// var age=[2,3,4,5,5,6,6,7]
// var age2=age.values()
// for(b of age)
// {
//     console.log(b)
// }

var age=[2,3,4,5,5,6,6,7]
console.log(age.indexOf(6,1))
console.log(age.lastIndexOf(4))

var age1=age.toString()
console.log(age1)
age1=age1.replaceAll(",","-")
console.log(age1)