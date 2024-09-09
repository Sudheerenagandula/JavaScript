function collectvalue(){
    var name=document.getElementById("name").value;
    document.getElementById("printname").innerHTML=name;
    console.log(name)
   var col= document.getElementById("colval").value;
   document.getElementById('bdy').style.background=col
   console.log(col)
};