let chieuCao = parseFloat(prompt("Nhap vao chieu cao(tinh bang met): "));
let canNang = parseFloat(prompt("Nhap vao can nang(tinh bang kg): "));
let BMI = parseFloat(canNang/(chieuCao**2));
console.log("Chi so BMI cua ban la: "+BMI);
console.log("Tinh trang suc khoe cua ban theo chi so BMI: ");

if(BMI<18.5){
    console.log("Gầy!");
}
else if(BMI>=18.5 && BMI<25)
{
    console.log("Bình thường!");
}
else if(BMI>=25 && BMI<30)
{
    console.log("Hơi béo!");
}
else if(BMI>=30 && BMI<35)
{
    console.log("Béo phì cấp độ 1!");
}
else if(BMI>=35 && BMI<40)
{
    console.log("Béo phì cấp độ 2!");
}
else if(BMi >=40)
{
    console.log("Béo phì cấp độ 3!");  
}