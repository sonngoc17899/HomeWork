let n = parseInt(prompt("Nhập số phần tử của mảng thứ nhất: "));
while(n<1)
{
    n = parseInt(prompt("Nhập lại số phần tử của mảng thứ nhất: "));
}
let n1 = parseInt(prompt("Nhập số phần tử của mảng thứ hai: "));
while(n1<1 || n1<=n)
{
    n1 = parseInt(prompt("Nhập lại số phần tử của mảng thứ hai: "));
}
let a = [];
let b = [];
alert("Nhập mảng thứ nhất!");
for(let i=0;i<n;i++)
{
    let j = i+1;
    let x = prompt("Nhập phần tử thứ "+j+": ");
    a.push(x);
}
alert("Nhập mảng thứ hai!");
for(let i=0;i<n1;i++)
{
    let j = i+1;
    let x = prompt("Nhập phần tử thứ "+j+": ");
    b.push(x);
}
// sap xep 2 mang tang dan
a.sort();
b.sort();
// xoa cac ky tu giong nhau chi de lai 1 ky tu duy nhat ko trung
for(let i=1;i<a.length;i++)
{
    for(let j=0;j<i;j++)
    {
        if(a[j]===a[i])
        {
            a.splice(j, 1);
        }
    }
}
for(let i=1;i<b.length;i++)
{
    for(let j=0;j<i;j++)
    {
        if(b[j]===b[i])
        {
            b.splice(j, 1);
        }
    }
}
// xet tung phan tu mang a voi mang b
let index = 0;
for(let i=0;i<a.length;i++)
{
    for(let j=0;j<b.length;j++)
    {
        if(a[i]===b[j])
        {
            index++;
        }
    }
}
if(index === a.length) console.log("Mảng a thuộc mảng b!");
else console.log("Mảng a không thuộc mảng b!");

