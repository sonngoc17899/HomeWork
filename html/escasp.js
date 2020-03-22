alert("Welcome to Escape");
let heigh = parseInt(prompt("Nhap vao chieu dai: "));
while(heigh<=0)
{
    heigh = parseInt(prompt("Nhap lai chieu dai: "));
}
let width = parseInt(prompt("Nhap chieu rong: "));
while(width<=0)
{
    width = parseInt(prompt("Nhap lai chieu rong: "));
}
let a = [];
for(let i=0;i<heigh;i++){
    a[i] = [];
}
for(let i=0;i<heigh;i++)
{
    for(let j=0;j<width;j++)
    {
        a[i][j] = "*";
    }
}
a[width-6][heigh-2] = "K";
a[width-1][heigh-1] = "P";
a[width-4][heigh-6] = "E";
let str = "";
for(let i=0;i<heigh;i++)
{
    for(let j=0;j<width;j++)
    {
        str += a[i][j] + "";
    }
    str += "\n"; 
}
console.log(str);
let move = prompt("Nhap huong di chuyen: ");
while(move !== "s" && move !== "w" && move !== "a" && move !== "d"){
    move = prompt("Nhap lai huong di chuyen: ");
}






