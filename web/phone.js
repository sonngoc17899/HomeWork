let ulPhone = document.getElementById("Phone");
let ulPhone1 = document.getElementById("Phone1");
let ulPhone2 = document.getElementById("Phone2");
let ulPhone3 = document.getElementById("Phone3");
let ulPhone4 = document.getElementById("Phone4");
let listPhone = [
    {
        name: "SamSung Galaxy A71",
        madeBy: "SamSung",
        price: 12e6,
        img: "https://cdn.tgdd.vn/Products/Images/42/210246/samsung-galaxy-a71-blue-600x600-1-400x400.jpg",
        link: "https://www.thegioididong.com/dtdd/samsung-galaxy-a71",
    },
    {
        name: "SamSung Galaxy S20+",
        madeBy: "SamSung",
        price: 11e6,
        img: "https://cdn.tgdd.vn/Products/Images/42/217936/samsung-galaxy-s20-plus-600x600-fix-400x400.jpg",
        link: "https://www.thegioididong.com/dtdd/samsung-galaxy-s20-plus",
    },
    {
        name: "Xiaomi Redmi Note 8",
        madeBy: "Xiaomi",
        price: 4790000,
        img: "https://cdn.tgdd.vn/Products/Images/42/212374/xiaomi-redmi-note-8-128gb-black-400x400.jpg",
        link: "https://www.thegioididong.com/dtdd/xiaomi-redmi-note-8-128gb",
    },
    {
        name: "Iphone 11 64GB",
        madeBy: "Apple",
        price: 21690000,
        img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-400x400.jpg",
        link: "https://www.thegioididong.com/dtdd/iphone-11",
    },
    {
        name: "Iphone 11 Pro Max 512 GB",
        madeBy: "Apple",
        price: 42e6,
        img: "https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-400x460.png",
        link: "https://www.thegioididong.com/dtdd/iphone-11-pro-max-512gb",
    }
]
function hienThi(a, b){
for(let i=0;i<b.length;i++)
{
    let html = `<tr>
    <td>${i+1}</td>
    <td>${b[i].name}</td>
    <td>${b[i].madeBy}</td>
    <td>${b[i].price}</td>
    <td><img src = "${b[i].img}" width = 100px></td>
    <td><a href="${b[i].link}" target="_blank">Link mô tả chi tiết!</a></td>
    </tr>
    `
    a.innerHTML += html;
}
}
hienThi(ulPhone, listPhone);
listPhone.sort(listPhone.name);
hienThi(ulPhone1, listPhone);
listPhone.sort(listPhone.price);
hienThi(ulPhone2, listPhone);
listPhone.sort(function(a, b){return (b.price - a.price)});
hienThi(ulPhone3, listPhone);
let findPhone = listPhone.filter(function(v, i, a){
    return (v.price > 10e6 && v.price < 20e6);
});
hienThi(ulPhone4, findPhone);




