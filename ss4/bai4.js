let a = parseInt(prompt("Nhap vao so a: "));
let b = parseInt(prompt("Nhap vao so b: "));
let c = parseInt(prompt("Nhap vao so c: "));
let max, min, mid;
if(b >= a){
    max = b;
    min = a;
}else{
    max = a;
    min = b;
}

if(c >= max){
    mid = max;
    max = c;   
}else if(c <= min){
    mid = min;
    min = c;
}else {
    mid = c;
}
console.log("In theo thu tu tang dan "+min+" "+mid+" "+max+"");
