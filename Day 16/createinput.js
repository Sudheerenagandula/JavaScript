var inp=document.createElement("input")
document.body.appendChild(inp)
inp.type="button"
inp.value="PAVAN"
var heading=document.createElement("h1")
document.body.appendChild(heading)

// document.getElementById("button").addEventListener("click",function()
// {
//     document.getElementById("msg").innerHTML="saagar"
// })

inp.addEventListener("mouseover",function()
{
    heading.innerHTML="PAVAN DEVELOPER"

})

inp.addEventListener("mouseout",function()
{
    heading.innerHTML=""

})