let input = prompt("Nhập một xâu ký tự là số: ");
let split = input.split("");
let sChan = 0;
let sLe = 0;
for(let i=0;i<split.length;i++)
{
    if(split[i]%2 === 0){
        sChan += parseInt(split[i]);
    }
    if(split[i]%2 !== 0)
    {
        sLe += parseInt(split[i]);
    }
}
let hieu = sChan - sLe;
console.log("Hieu cua tong cac so chan tru tong cac so le la "+hieu);


