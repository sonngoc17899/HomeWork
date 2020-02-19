// Bai 5
do{
    var y = parseInt(prompt("Nhap vao mot so co 3 chu so: "));
}while(y < 100 || y > 999);
var q, w, e, r;
q = parseInt(y/100);
w = parseInt((y - q*100)/10);
e = parseInt(y - q*100 - w*10);
r = q + w + e;
console.log("So "+y+" co tong cac chu so la "+r);