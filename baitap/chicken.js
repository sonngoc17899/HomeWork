function tangTrongLuong(a){
    for(let i=0;i<a.length;i++)
    {
        a[i] = a[i]*1.5;
    }
}
function chickenMax(a){
    let max = a[0];
    let viTri = 0;
    for(let i=0;i<a.length;i++)
    {
        if(a[i]>max){
            max = a[i];
            viTri = i+1;
        }
    }
    console.log("Con gà thứ "+viTri+" có trọng lượng lớn nhất bằng "+max+" kg"); 
}
function chickenDead(a){
    for(let i=0;i<3;i++)
    {
        let viTri = Math.floor(Math.random()*a.length);
        a.splice(viTri, 1);
    }
    for(let i=0;i<a.length;i++)
    {
        a[i] = a[i]*0.5;
    }
}
let chicken = [];
let j = 0;
for(let i=0;i<10;i++)
{
    j = i+1;
    let kg = parseFloat(prompt("Nhập trọng lượng của con gà thứ "+j+"(kg)"));
    while(kg <= 0){
        kg = parseFloat(prompt("Nhập lại trọng lượng của con gà thứ "+j+""));
    }
    chicken.push(kg);
}
console.log("Trọng lượng của đàn gà sau 2 tuần nuôi!");
tangTrongLuong(chicken);
for(let i=0;i<chicken.length;i++)
{
    j = i+1;
    console.log("chickenWeight"+j+" = "+chicken[i]+" kg");    
}
chickenMax(chicken);
chickenDead(chicken);
console.log("Đàn gà sau khi trải qua đợt dịch H5N1!");
for(let i=0;i<chicken.length;i++)
{
    j = i+1;
    console.log("chickenWeight"+j+" = "+chicken[i]+" kg");    
}

