let a = ["Javascript", "Html", "Css", "Pascal"];
let key = prompt("Nhap mot ki tu: ");
for(let i=0;i<a.length;i++)
{
    if(a[i].indexOf(key.toLocaleUpperCase())>=0 || a[i].indexOf(key.toLowerCase())>=0)
    {
        console.log(a[i]);        
    }
}
//liet ke cac chu a, e, o, i, y, u
// so sanh 2 ten
// dau tien chuyen het ve cung 1 kieu

