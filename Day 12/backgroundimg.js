function bgimagechng(){

    var imgval=document.getElementById("bgimg").value;
    document.getElementById("bdy").style.backgroundImage=`url(./../../asset/images/${imgval}.png),url(./../../asset/images/${imgval}.jpg)`
}
