document.getElementById("uservalue").setAttribute("placeholder","enter the password")
function fun()
{
    var valueinput=document.getElementById("uservalue").value
    var varlen=valueinput.length;
    if(varlen>=5)
    {
        document.getElementById("buttonsubmit").removeAttribute("disabled")
    }
    else{
        document.getElementById("buttonsubmit").setAttribute("disabled","true")
    }
}