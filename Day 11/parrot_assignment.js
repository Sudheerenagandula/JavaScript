function imageEdit(){
    var blurvalue=document.getElementById("blur").value
    var brightnessvalue=document.getElementById("brightness").value
    var contrastvalue=document.getElementById("contrast").value
    var grayscalevalue=document.getElementById("grayscale").value
    var huevalue=document.getElementById("hue-rotate").value
    var invertvalue=document.getElementById("invert").value
    var opacityvalue=document.getElementById("opacity").value
    var saturatevalue=document.getElementById("saturate").value
    var sepiavalue=document.getElementById("sepia").value

    document.getElementById("image").style.filter=`blur(${blurvalue}px) brightness(${brightnessvalue}%) contrast(${contrastvalue}%) grayscale(${grayscalevalue}%) hue-rotate(${huevalue}deg) invert(${invertvalue}%) opacity(${opacityvalue}%) saturate(${saturatevalue}%) sepia(${sepiavalue}%)`

    var rotatevalue=document.getElementById("rotate").value
    var rotateXvalue=document.getElementById("rotateX").value
    var rotateYvalue=document.getElementById("rotateY").value
    var scaleXvalue=document.getElementById("scaleX").value
    var scaleYvalue=document.getElementById("scaleY").value
    var skewXvalue=document.getElementById("skewX").value
    var skewYvalue=document.getElementById("skewY").value
    var translateXvalue=document.getElementById("translateX").value
    var translateYvalue=document.getElementById("translateY").value

    document.getElementById("image").style.transform=`rotate(${rotatevalue}deg) rotateX(${rotateXvalue}deg) rotateY(${rotateYvalue}deg) scaleX(${scaleXvalue}) scaleY(${scaleYvalue}) skewX(${skewXvalue}deg) skewY(${skewYvalue}deg) translateX(${translateXvalue}px) translateY(${translateYvalue}px)`
}