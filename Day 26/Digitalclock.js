function digittclok()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var da=date.getDay();
    var dayarr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    da=dayarr[da];
    var yy=date.getFullYear();
    var dd=date.getDate();
    var mo=date.getMonth()+1;
    console.log(hh,mm,ss,da,dd,mo,yy)
    var am_pm="Am"
    if(hh>=12)
    {
        am_pm="Pm"
    }
    if(hh>12)
    {
        hh=hh-12
    }
    if(hh==0)
    {
        hh=122
    }
    var arrimg=["mon.jpg","tue.jpg","wed.jpg","thu.jpg","fri.jpg","sat.jpg","sun.jpg"]
    document.getElementById("hours").innerHTML=hh
    document.getElementById("minutes").innerHTML=mm
    document.getElementById("ampm").innerHTML=am_pm
    document.getElementById("secs").innerHTML=ss
    document.getElementById("date").innerHTML=`${dd}-${mo}-${yy}`
    document.body.style.backgroundImage=`url(./../../asset/images/${arrimg[da]})`
    setTimeout(digittclok,1000)
}
digittclok()