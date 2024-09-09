var num=0;
function inc(){
    num++
    if(num<=30)
    {
        document.getElementById("output").value=num
    }
    else{
        num=30
    }
}
function dec(){
    num--
    if(num>=-10)
    {
        document.getElementById("output").value=num
    }
    else
    {
        num=-10
    }
}