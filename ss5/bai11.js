let a = parseInt(prompt("Nhap vao chieu dai: "));
let b = parseInt(prompt("Nhap vao chieu rong: "));
while(a <= 0 || b <= 0)
{
    a = parseInt(prompt("Nhap lai chieu dai: "));
    b = parseInt(prompt("Nhap lai chieu rong: "));
}
let s = "";
for(let i=1;i<=b;i++)
{
    s += "*";
}
let result ='';
for(let i=1;i<=a;i++)
{
    result += s+ "\n";
}
console.log(result);

