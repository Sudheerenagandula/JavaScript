function changecol()
{
    var changetext=document.getElementById("turncolor").value
    if(changetext=="Subscribe")
    {
        document.getElementById("turncolor").value="Subscribed"
        document.getElementById("turncolor").style.backgroundColor="gray"
    }
    else
    {
        document.getElementById("turncolor").value="Subscribe"
        document.getElementById("turncolor").style.backgroundColor="orangered"
    }
}
function hoverup()
{
    document.getElementById("turncolor").style.transform="scale(1.2)"
}
function hoverdown()
{
    document.getElementById("turncolor").style.transform="scale(1)"
}