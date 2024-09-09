document.getElementById("a").style.textAlign="center"
document.getElementById("a").style.transition="all 0.5s"

function blue() {
    document.getElementById("a").style.color="blue"
}
setTimeout(blue,1000)

setTimeout(function() {
    document.getElementById("a").style.color="red"
},2000)

setTimeout(function() {
    document.getElementById("a").style.color="lawngreen"
},3000)

setTimeout(function() {
    document.getElementById("a").style.color="orange"
},4000)

setTimeout(function() {
    document.getElementById("a").style.color="black"
},5000)
