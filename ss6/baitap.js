let a = [];
let n = parseInt(prompt("Nhap so phan tu cua mang!"));
while(n<=0)
{
    n = parseInt(prompt("Nhap lai so phan tu cua mang!"));
}
let j = 0;
for(let i=0;i<n;i++)
{
    j = i+1;
    let newNumber = parseInt(prompt("Nhap so thu "+j+": "));
    a.push(newNumber);
}
console.log("Hien thi mang sau khi nhap!");
let s = 0;
let tbc = 0;
let max = a[0];
let min = a[0];
for(let i=0;i<a.length;i++)
{
    j = i+1;
    console.log(""+j+": "+a[i]+"");
    s += a[i];
    if(a[i]>max) max = a[i];
    if(a[i]<min) min = a[i];
}
tbc = s/a.length;
console.log("Tong cac so trong mang la: "+s);
console.log("Trung binh cong cac so trong mang la: "+tbc);
console.log("So lon nhat trong mang la: "+max);
console.log("So nho nhat trong mang la: "+min);

for(let i=0;i<(a.length-1);i++)
{
    for(let j=i+1;j<a.length;j++)
    {
        if(a[i]>a[j])
        {
            let tg = a[i];
            a[i] = a[j];
            a[j] = tg;
        }
    }
}
console.log("Hien thi mang sau khi sap xep tang dan!");
for(let i=0;i<a.length;i++)
{
    j = i+1;
    console.log(""+j+": "+a[i]+"");
}
console.log("So lon thu 2 trong mang la so: "+a[a.length-2]);
console.log("So nho thu 2 trong mang la so: "+a[1]);

let N = parseInt(prompt("Nhap 1 so bat ki: "));
console.log("In ra cac so lon hon "+N+" trong mang(neu co)!");
for(let i=0;i<a.length;i++)
{
    const element = a[i];
    if(element > N)
    {
        console.log(""+a[i]+"");
    }
}





