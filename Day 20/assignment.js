var division=document.createElement("div")
document.body.appendChild(division)
division.innerHTML=`<form>
<table>
    <tr>
        <th colspan="2">EMP TABLE</th>
    </tr>
    <tr>
        <th>Emp Name</th>
        <th><input></th>
    </tr>
    <tr>
        <th>Emp Id</th>
        <th><input></th>
    </tr>
    <tr>
        <th>Emp Sal</th>
        <th><input></th>
    </tr>
    <tr>
        <th colspan="2"><input></th>
    </tr>
</table>
</form>
`
var allforms=document.forms
console.log(allforms)

allforms[0].elements[3].type="Submit"

document.querySelector("table").style.border="2px solid black"
document.querySelector("table").style.borderCollapse="collapse"

var thtag=document.querySelectorAll("th")
for(i=0;i<thtag.length;i++)
{
    thtag[i].style.border="2px solid black"
}
