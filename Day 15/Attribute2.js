function fun()
{
    var valueinput=document.getElementById("uservalue").value
    var varlen=valueinput.length;
    if(varlen==0)
    {
        document.getElementById("buttonsubmit").value="Enter the password"
    }
    else if(varlen>=0 && varlen<=5)
    {
        document.getElementById("buttonsubmit").value="weak password"
        document.getElementById("buttonsubmit").style.backgroundColor="red"
    }
    else if(varlen>=5 && varlen<=10)
    {
        document.getElementById("buttonsubmit").value="Good passsword"
        document.getElementById("buttonsubmit").style.backgroundColor="orange"
        document.getElementById("buttonsubmit").setAttribute("disabled","true")

    }
    else
    {
        document.getElementById("buttonsubmit").removeAttribute("disabled")
        document.getElementById("buttonsubmit").style.backgroundColor="green"
        document.getElementById("buttonsubmit").value="Submit"
    }
}