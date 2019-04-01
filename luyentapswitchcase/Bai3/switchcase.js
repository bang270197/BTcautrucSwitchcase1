/*let nhap=parseFloat(prompt("nhap so bat ky"));
if(nhap >0)
{
    alert('1');
}else if (nhap <0)
{
    alert('-1');
}else {
    alert('0');
}*/
let nhap =parseFloat(prompt('nhap so bat ky'));
switch (nhap >0) {
    case true:
        alert('1');
break;
    case false:
        if (nhap < 0)
            alert('-1');
        else
            alert('0');
break;



}