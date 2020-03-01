let n = parseInt(prompt("Nhap vao mot so bat ki"));
let sqr = Math.sqrt(n);
let index = 0;
for(let i=2;i<=sqr;i++)
{
    if(n%i === 0)
    {
        index++;
    }
}
if(index===0 && n>=2){
     console.log("So "+n+" la so nguyen to!");
}else if(n>0)
{
    console.log("So "+n+" la hop so!");
    console.log("Cac uoc cua so "+n+" la:");
    for(let i=1;i<=(n/2);i++)
    {
        if(n%i === 0)
        {
            console.log(i);
        }
    }
    console.log(n);
}else console.log("Day la so am!");
if(sqr**2===n){
    console.log("So "+n+"  cung la so chinh phuong!");
}
//break thoat khoi vong lap
//continue bo qua 1 luot lap
// den luot 2 gap continue thi bo qua chay luot thu 3