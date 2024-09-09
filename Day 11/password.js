function password(){
    var passw=document.getElementById("inputpass").value;
    var passlen=passw.length;
    if(passlen==0)
    {
        document.getElementById("status").innerHTML=""
    }
    else if(passlen>0 && passlen<=5){
        document.getElementById("status").innerHTML="WEAK PASSWORD"
        document.getElementById("status").style.color="red"
    }
    else if(passlen >5 && passlen<=10)
    {
        document.getElementById("status").innerHTML="GOOD PASSWORD"
        document.getElementById("status").style.color="blue"
    }
    else{
        document.getElementById("status").innerHTML="STRONG PASSWORD"
        document.getElementById("status").style.color="green"
    }
}