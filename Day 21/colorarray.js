var col=["red","green","yellow","orange","blue"]

var num=0;
function inc()
{
    num++
    if(num>col.length-1)
    {
        num=0;
        document.body.style.backgroundColor=col[num]
    }
    else{
        document.body.style.backgroundColor=col[num]
    }
}

function dec()
{
    num--;
    if(num<0)
    {
        num=col.length-1
        document.body.style.backgroundColor=col[num]
    }
    else{
        document.body.style.backgroundColor=col[num]
    }
}