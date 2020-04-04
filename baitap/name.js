let name = prompt("Nhap ho va ten: ");
name = name.replace(/\s+/g, ' ');
name = name.trim().toLowerCase();
split = name.split(" ");
for(let i=0;i<split.length;i++)
{
    split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
}
console.log(split.join(" "));
















