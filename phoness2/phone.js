let listPhone = [
    {
        name: "SamSung Galaxy A71",
        madeBy: "SamSung",
        price: 12e6,
        img: "https://cdn.tgdd.vn/Products/Images/42/210246/samsung-galaxy-a71-blue-600x600-1-400x400.jpg",
        link: "detial.html",
    },
    {
        name: "SamSung Galaxy S20+",
        madeBy: "SamSung",
        price: 11e6,
        img: "https://cdn.tgdd.vn/Products/Images/42/217936/samsung-galaxy-s20-plus-600x600-fix-400x400.jpg",
        link: "detial.html",
    },
    {
        name: "Xiaomi Redmi Note 8",
        madeBy: "Xiaomi",
        price: 4790000,
        img: "https://cdn.tgdd.vn/Products/Images/42/212374/xiaomi-redmi-note-8-128gb-black-400x400.jpg",
        link: "detial.html",
    },
    {
        name: "Iphone 11 64GB",
        madeBy: "Apple",
        price: 21690000,
        img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-400x400.jpg",
        link: "detial.html",
    },
    {
        name: "Iphone 11 Pro Max 512 GB",
        madeBy: "Apple",
        price: 42e6,
        img: "https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-400x460.png",
        link: "detial.html",
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
    <td><button onclick="button(event);"">Thông tin điện thoại!</button></td>
    </tr>
    `
    a.innerHTML += html;
}
}
let ul = document.getElementById("Phone");
hienThi(ul, listPhone);
function button(e){
    for(let i=0;i<listPhone.length;i++)
    {   if(button[i]>=0){
        window.location.href = "detail.html";
        localStorage.setItem(`phone`, JSON.stringify(listPhone[i]));
    }
    }
    
}











