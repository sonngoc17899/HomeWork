let a = parseInt(prompt("Nhap vao so a: "));
let b = parseInt(prompt("Nhap vao so b: "));
let c = parseInt(prompt("Nhap vao so c: "));
if(a+b>c && a+c>b && b+c>a) console.log(""+a+", "+b+", "+c+" la 3 canh cua tam giac!");
else console.log(""+a+", "+b+", "+c+" khong la 3 canh cua tam giac!");
if(a+b>c && a+c>b && b+c>a)
{
    if((a**2 + b**2)===c**2 || (a**2 + c**2)===b**2 || (b**2 + c**2)===a**2){
        console.log("Day la tam giac vuong!");
    }
    else if(a===b && a===c && b===c)
    {
        console.log("Day la tam giac deu!");      
    }
    else if(a === b || a===c || b===c)
    {
        console.log("Day la tam giac can!");
    }
    else console.log("Day la tam giac thuong!");
    
}
