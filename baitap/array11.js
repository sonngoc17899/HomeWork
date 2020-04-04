let a = [];
let n = parseInt(prompt("Nhập số phần tử của mảng: "));
while(n<1)
{
    n = parseInt(prompt("Nhập lại số phần tử của mảng: "));
}
let j = 0;
for(let i=0;i<n;i++)
{
    j = i+1;
    let x = prompt("Nhập phần tử thứ "+j+": ");
    a.push(x);
}
console.log("In ra mảng vừa nhập!");
for(let i=0;i<a.length;i++)
{
    console.log(a[i]);    
}
let index = 1;
let tam = 0;
for(let i=1;i<a.length;i++)
{
    for(let j=0;j<i;j++)
    {
        if(a[j]===a[i])
        {
            tam = 0;
            break;
        }
        else tam = 1;
    }
    if(tam === 1) index++;
}
console.log("Mang co "+index+" phan tu khac nhau!");
let b = [];
for(let i=0;i<a.length;i++)
{
    let index = 1;
    for(let j=i+1;j<a.length;j++)
    {
        if(a[i]===a[j]){
            index++;
            b[j]=0;
        }
    }
    if(b[i]!==0){
        b[i] = index;
        console.log("Phan tu "+a[i]+" xuat hien "+b[i]+" lan!");
    }
}


