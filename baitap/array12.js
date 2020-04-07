let n = parseInt(prompt("Nhập số phần tử của mảng: "));
while(n<1)
{
    n = parseInt(prompt("Nhập lại số phần tử của mảng: "));
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
for(let i=0;i<n;i++)
{
    let j = i+1;
    let x = prompt("Nhập phần tử thứ "+j+": ");
    b.push(x);
}
a.sort();
b.sort();
let index = 0;
for(let i=0;i<a.length;i++)
{
    for(let j=0;j<b.length;j++)
    {
        if(a[i]!==b[j])
        {
            index = 1;
        }
    }
}
if(index === 0) console.log("Hai mảng bằng nhau!");
else console.log("Hai mảng khác nhau!");

