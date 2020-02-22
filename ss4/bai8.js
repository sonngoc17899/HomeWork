Boolean soNguyenTo(parseInt(x)){
    if(x<2) return false;
    else if(x>2){
        if(x%2===0) return false;
        for(parseInt(i=2), i<=Math.sqrt(x), i++)
        {
            if(x%i===0) return false;
        }
    }
    return true;
}
let x = Number(prompt("Nhap vao 1 so: "));
let sqr = parseInt(Math.sqrt(x));
if(sqr*sqr === x){
    console.log("So "+x+" la so chinh phuong!"); 
}


