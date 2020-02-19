// Bai 4
do{
    var x = parseInt(prompt("Nhap so tien la boi so cua 10k: "));
}while(x<10000 || x%10000 !==0);
var a, b, c, d;
a = parseInt(x/100000);
b = parseInt((x - 100000*a)/50000);
c = parseInt((x - 100000*a - 50000*b)/20000);
d = parseInt((x - 100000*a - 50000*b - 20000*c)/10000);
console.log(""+ x +" vnđ = "+ a +" to 100000 + "+ b +" to 50000 + "+ c +" to 20000 + "+ d +" to 10000");



 