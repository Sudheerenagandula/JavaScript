var imag=["BikeRacing.jpg","background.png","parrot.jpg","Loginimage.jpg"]

var num=0;
function inc()
{
    
    if(num<=imag.length-1)
    {
        document.querySelector("header").style.backgroundImage=`url(./../../asset/images/${imag[num]})`
    }
    else
    {
        num=0
        document.querySelector("header").style.backgroundImage=`url(./../../asset/images/${imag[num]})`
    }
    num++
}

function dec()
{
    
    if(num>=0)
    {
        document.querySelector("header").style.backgroundImage=`url(./../../asset/images/${imag[num]})`
    }
    else
    {
        num=imag.length-1
        document.querySelector("header").style.backgroundImage=`url(./../../asset/images/${imag[num]})`
    }
    num--
}
function autoinc()
{
    if(num<=imag.length-1)
    {
        document.querySelector("header").style.backgroundImage=`url(./../../asset/images/${imag[num]})`
    }
    else{
        num=0;
        document.querySelector("header").style.backgroundImage=`url(./../../asset/images/${imag[num]})`
    }
    num++
    setTimeout(autoinc(),1000)
}
autoinc()