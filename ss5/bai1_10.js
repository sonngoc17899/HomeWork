//Bai1
console.log("In ra cac so tu 0 den 100!");
for(let i=0;i<=100;i++)
{
    console.log(i);    
}
//Bai2
console.log('In ra cac so tu 100 ve 0!');
for(let i=100;i>0;i--)
{
    console.log(i);
}
//Bai3
console.log("In ra cac so chan tu 0 den 100!");
for(let i=0;i<=100;i+=2)
{
console.log(i);
}

console.log("In ra cac so le tu 0 den 100!");
for(let i=1;i<=100;i+=2)
{
    console.log(i);
}
//Bai4
console.log("In ra cac so chan tu 100 ve 0!");
for(let i=100;i>0;i-=2)
{
    console.log(i);
}

console.log("In ra cac so le tu 100 den 0!");
for(let i=99;i>0;i-=2)
{
    console.log(i);
}
let n = parseInt(prompt("Nhap so n(la so nguyen va >0): "));
while(n<0)
{
    n = parseInt(prompt("Nhap lai n: "));
}
//Bai5
let s = 0;
for(let i=1;i<=n;i++)
{
    s += i;
}
console.log("In ra tong: "+s);
//bai6
let s1 = 0;
for(let i=1;i<=(2*n+1);i+=2)
{
    s1 += i;
}
console.log("In ra tong: "+s1);
//Bai7
let s2 = 0;
for(let i=0;i<=(2*n);i+=2)
{
    s2 += i;
}
console.log("In ra tong: ",+s2);
//Bai8
let s3 = 0;
for(let i=1;i<=n;i++)
{
    s3 += 1/i
}
console.log("In ra tong: "+s3);
//Bai9
let s4 = 0;
for(let i=1;i<=n;i++)
{
    s4 += 1/(i*(i+1));
}
console.log("In ra tong: "+s4);
//Bai10
let f1 = 1, f2 = 1;
let fn;
let s5 = 0;
let i=3;
if(n===1){
    console.log("Phan tu thu "+n+" bang: 1");  
    console.log("Tong "+n+" phan tu dau tien trong day Fibonacci bang 1");
}else if(n===2){
    console.log("Phan tu thu "+n+" bang: 1");  
    console.log("Tong "+n+" phan tu dau tien trong day Fibonacci bang 2");
}
else{
while(i<=n){
    fn = f1 + f2;
    f1 = f2;
    f2 = fn;
    s5 += fn;
    i++;
}
console.log("Phan tu thu "+n+" trong day Fibonacci bang : ", +fn);
console.log("Tong "+n+" phan tu dau tien trong day Fibonacci la: "+s5);
}











