var heading=document.getElementsByTagName("h1")
console.log(heading)
 
for(i=0;i<heading.length;i++)
{
    if(i%2==0)
    {
        heading[i].innerHTML=`${i} EVEN ELEMENTS HEADING`
        heading[i].style.color="red"
    }
    else{
        heading[i].innerHTML=`${i} ODD ELEMENTS HEADING`
        heading[i].style.color="blue"
    }
}
