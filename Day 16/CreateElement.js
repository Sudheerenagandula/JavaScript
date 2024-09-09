
var divison=document.createElement("div")
document.body.appendChild(divison)
divison.style.width="300px"
divison.style.height="400px"
divison.style.backgroundColor="red"
divison.style.display="flex"
divison.style.justifyContent="center"
divison.style.alignItems="center"
var imge=document.createElement("img")
imge.src="./../../asset/images/animelogo.jpeg"
divison.appendChild(imge)
imge.style.width="120px"
imge.style.height="120px"
divison.style.display="flex"
var heading1=document.createElement("h1")
heading1.innerHTML="ANIME"
heading1.style.color="white"
console.log(heading1)
divison.appendChild(heading1)
divison.style.flexDirection="column"
divison.style.borderRadius="20px"
imge.style.borderRadius="20px"
imge.style.boxShadow="10px 10px 10px black ,-10px -10px 10px black"
