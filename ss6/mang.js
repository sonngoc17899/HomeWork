// 1.kb mảng rỗng  ( yc ng dung nhâp 5 số vào mang)

// 2 in gtri cua mang ra tung dòng 
// 3.tính tổng giá trị của mảng 
// tính trung bình 
// 4 y/c ng dùng nhập 1 số N { + a,ktra số N có trong mảng ko 
// 			    + b, in ra các số thuộc mảng  <N (bé hơn )
// 5 cho ng dùng nhập 1 vi tri 1 gia tri update giatri nafyvafo Vị trí đó   (sua)

// 6. Cho ng dung nhap so luong SV trong lop N
// sau do cho nhap ten cua N sv nay.
// 7. In (theo format: STT : tên )
// 8. Cho ng dùng nhâp 1 STT và tên mới: sửa tên mới này trong mảng 
// 9. Cho ng dùng nhập 1 tên . ktra tên có thuộc mảng hay ko (ko phân biệt hoa thuong )
// 	Nếu có , thì có bao nhiêu ng trùng tên
// 10. Nhập 1 chữ cái , tìm tất cả tên chứa chữ cái đó (ko phân biệt hoa thường)

//6
let a = [];
let j=0;
let n = parseInt(prompt("Nhap so luong sinh vien trong lop: "));
while(n<=0)
{
    n = parseInt(prompt("Nhap lai so luong sinh vien trong lop: "));
}
for(let i=0;i<n;i++)
{
    j = i+1;
    let name = prompt("Nhap ten cua sinh vien thu "+j+": ");
    a.push(name);
}
//7
console.log("In ra danh sach "+n+" sinh vien trong lop!");
for(let i=0;i<a.length;i++)
{
    j = i+1;
    console.log(""+j+": "+a[i]+"");    
}
//8
let stt = parseInt(prompt("Nhap 1 so thu tu trong mang: "));
while(stt<=0 || stt >a.length)
{
    stt = parseInt(prompt("Nhap lai so thu tu: "));
}
a[stt-1] = prompt("Nhap 1 ten moi: ");
console.log("Mang sau khi sua ten o STT thu "+stt+"!");
for(let i=0;i<a.length;i++)
{
    j = i+1;
    console.log(""+j+": "+a[i]+""); 
}
//9
let newName = prompt("Nhap 1 ten bat ki: ");
// quy het ve chu thuong hoac quy het ve chu hoa
let index = 0;
for(let i=0;i<a.length;i++)
{
    const element = a[i];
    if(element.toLowerCase === newName.toLowerCase)
    {
        index++;
    }
}
if(index > 0){
    console.log("Ten co trong mang!");
    console.log("co "+index+" trung ten!");
}else console.log("Ten khong co trong mang!");

//10
let newKey = prompt("Nhap mot chu cai: ");
let index1 = 0;
console.log("In ra cac ten chua ki tu "+newKey+"(neu co!)");
for(let i=0;i<a.length;i++)
{
    if(a[i].indexOf(newKey.toUpperCase)>0 || a[i].indexOf(newKey.toLowerCase)>0)
    {
        j = i+1;
        index1++;
        console.log(""+j+": "+a[i]+"");
    }
}
if(index1===0) console.log("Khong co ten chua ki tu "+newKey+" trong mang!");
