let a = [2, 5, 7, 8 ,9, 3];
// let r1 = a.findIndex(function(v, i, a){
//     console.log(v = `${v}`);
//     console.log(i = `${i}`);
//     console.log(a);
//     return v > 4;
// });
// let r2 = a.find(function(v, i, a){
//     console.log(v = `${v}`);
//     console.log(i = `${i}`);
//     console.log(a);
//     return v > 4;
// });
let r3 = a.filter(function(v, i, a){
    console.log(v = `${v}`);
    console.log(i = `${i}`);
    console.log(a);
    return v > 4;
});
console.log("r3 = "+r3+"");

