let x = parseInt(prompt("Nhap vao so dien: "));
let giaTien;
if(x>0 && x<=50)
{
    giaTien = x*1678;
}
else if(x>50 &&x<101)
{
    giaTien = (x-50)*1734 + 50*1678;
}
else if(x>100 && x<201)
{
    giaTien = (x-100)*2014 + 50*1678 + 50*1734;
}
else if(x>200 && x<301)
{
    giaTien = (x-200)*2536 + 100*2014 + 50*1678 +50*1734;
}
else if(x>300 && x<401)
{
    giaTien = (x-300)*2834 + 100*2536 + 100*2014 + 50*1678 + 50*1734;
}
else giaTien = (x-400)*2927 + 50*1678 + 50*1734 + 100*2014 + 100*2536 + 100*2834;
console.log("So tien dien phai tra cho "+x+" so dien la "+giaTien+"");
