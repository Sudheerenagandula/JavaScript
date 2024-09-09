document.getElementById("a").style.backgroundColor="gray"
document.getElementById("b").style.backgroundColor="blue"

var heading=document.getElementsByClassName("x")
heading[0].style.color="red"
heading[1].style.color="yellow"


var head=document.getElementsByTagName("h1");
head[0].style.color="lime"
head[0].innerHTML="ABHI DEERAJ KRUSHAL"
head[1].style.color="teal"
head[1].innerHTML="ABHI DEERAJ KRUSHAL"
head[2].style.color="aqua"
head[2].innerText="ABHI DEERAJ KRUSHAL"

var heading=document.getElementsByName("elemnets")
heading[2].innerHTML="sagar"
heading[4].innerHTML="paavan"

document.querySelector("#a").innerHTML="this is id selector"
document.querySelector("h2").innerHTML="this by using tag selector"
document.querySelector(".x").innerHTML="this is class "