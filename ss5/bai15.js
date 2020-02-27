let pass = prompt("Nhap mat khau: ");
while(!(pass.indexOf("$")>=0 && pass.indexOf("%")>=0 && pass.indexOf("_")>=0 && pass.length>=8)){
    pass = prompt("Nhap lai mat khau: ");
}