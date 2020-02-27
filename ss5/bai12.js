let a = parseInt(prompt("Nhap so dong: "));
while(a<=0)
{
    a = parseInt(prompt("Nhap lai so dong: "));
}
for(let i=1;i<=a;i++)
{
    for(j=1;j<=i;j++)
    {
        console.log("*");
    }
    
}