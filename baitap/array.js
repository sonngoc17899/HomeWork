let arr1 = [];
let arr2 = [];
let n = parseInt(prompt("Nhập số phần tử của mang 1: "));
while(n<=0)
{
    n = parseInt(prompt("Nhập lại số phần tử của mang 1: "));
}
for(let i=0;i<n;i++)
{
    let x = prompt("Nhập arr["+i+"]: ");
    arr1.push(x);

}
let m = parseInt(prompt("Nhập số phần tử của mang 2: "));
while(m<=0)
{
    m = parseInt(prompt("Nhập lại số phần tử của mang 2: "));
}
for(let i=0;i<m;i++)
{
    let x = prompt("Nhập arr["+i+"]: ");
    arr2.push(x);
}
// for(let i=0;i<arr1.length;i++)
// {
//     arr3[i] = arr1[i];
// }
// for(let i=arr3.length;i<(arr1.length+arr2.length);i++)
// {
//     for(let j=0;j<arr2.length;j++)
//     {
//         arr3[i] = arr2[j];
//     }
// }
let arr3 = arr1.concat(arr2);
let j = 0;
for(let i=0;i<arr3.length;i++)
{
    j = i+1;
    console.log(""+j+": "+arr3[i]+""); 
}
