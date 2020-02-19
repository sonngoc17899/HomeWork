let month = parseInt(prompt("Nhap vao thang: "));
if(month>0 && month <4){
    console.log("Thang "+month+" la mua xuan!");
}
else if(month>3 && month<7)
{
    console.log("Thang "+month+" la mua he!");
}
else if(month>6 && month<10)
{
    console.log("Thang "+month+" la mua thu!");
}
else if(month>9 && month<13)
{
    console.log("Thang "+month+" la mua dong!");
}else console.log("Nhap sai!");
