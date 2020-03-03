let a = ["Javascript", "Html", "Css", "Pascal"];
let key = prompt("Nhap mot ki tu: ");
for(let i=0;i<a.length;i++)
{
    if(a[i].indexOf(key)>0)
    {
        console.log(a[i]);        
    }
}
let b = [];
let c = [];
let x = b.push(prompt("Nhap vao mot chuoi: "));
let i = x.length-1;
let j =0;
while(i>=0)
{
    c[j] = b[i];
    i--;
    j++;
}
console.log(c[j]);
