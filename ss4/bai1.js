let year = parseInt(prompt("Nhap nam: "));
if(year%4===0 && year%100!==0) console.log("Nam "+year+" co 366 ngay!");
else console.log("Nam "+year+" co 365 ngay!");

