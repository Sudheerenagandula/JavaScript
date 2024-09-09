function status1()
{
    document.getElementById("inp").removeAttribute("placeholder")
    document.getElementById("ld").removeAttribute("style")
    document.getElementById("fd").style.borderColor="blue"
    document.getElementById("ld").style.color="blue"
    document.getElementById("ld").style.animation="moveup 0.5s;"
}
function status2()
{

    document.getElementById("inp").setAttribute("placeholder","Email or Phon")
    document.getElementById("ld").setAttribute("style","display:none")
    document.getElementById("fd").style.borderColor="gray"
}