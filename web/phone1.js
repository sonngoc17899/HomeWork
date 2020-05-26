let ulPhone = document.getElementById("Phones");
let listPhone = [
    {
        name: "SamSung Galaxy A71",
        madeBy: "SamSung",
        price: 9e6,
        img: "https://cdn.tgdd.vn/Products/Images/42/210246/samsung-galaxy-a71-blue-600x600-1-400x400.jpg",
        link: "https://www.thegioididong.com/dtdd/samsung-galaxy-a71",
    },
    {
        name: "SamSung Galaxy S20+",
        madeBy: "SamSung",
        price: 21e6,
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
function hienThi(a){
for(let i=0;i<listPhone.length;i++)
{
    let html = `<tr>
    <td>${i+1}</td>
    <td>${listPhone[i].name}</td>
    <td>${listPhone[i].madeBy}</td>
    <td>${listPhone[i].price}</td>
    <td><img src = "${listPhone[i].img}" width = 100px></td>
    <td><a href="${listPhone[i].link}" target="_blank">Link mô tả chi tiết!</a></td>
    </tr>
    `
    a.innerHTML += html;
}
}
let ul1Phone = document.getElementById("Phones1");
let sort = document.getElementsByClassName("Sort");
listPhone.sort(listPhone.price);
hienThi(ul1Phone);
listPhone.sort(listPhone.madeBy);
hienThi();


