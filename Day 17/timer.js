var timer=59;
function countdown()
{
    timer--
    if(timer>=0)
    {
        document.getElementById("a").value=timer
        setTimeout(countdown,1000)
        document.getElementById("button").setAttribute("disabled","true")
    }
    else
    {
        document.getElementById("button").removeAttribute("disabled")
        timer=59;
    }
}

