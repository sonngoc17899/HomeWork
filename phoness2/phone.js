
  

let products = [
    {
        id: 1,
        name: 'Samsung Galaxy Note 10',
        brand: 'Samsung',
        price: 20e6,
        img: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/n/o/note_10_plus_xanh.jpg',
    },
    {
        id: 2,
        name: 'iPhone 11',
        brand: 'Apple',
        price: 22e6,
        img: 'https://clickbuy.com.vn/uploads/2019/09/thumb_11-ProMAX_4-600x600.jpg',
    },
    {
        id: 3,
        name: 'Samsung Galaxy Note 10',
        brand: 'Samsung',
        price: 20e6,
        img: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/n/o/note_10_plus_xanh.jpg',
    },
    {
        id: 4,
        name: 'Samsung Galaxy Note 10',
        brand: 'Samsung',
        price: 20e6,
        img: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/n/o/note_10_plus_xanh.jpg',
    },
    {
        id: 5,
        name: 'Samsung Galaxy Note 10',
        brand: 'Samsung',
        price: 20e6,
        img: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/n/o/note_10_plus_xanh.jpg',
    },
    {
        id: 6,
        name: 'Samsung Galaxy Note 10',
        brand: 'Samsung',
        price: 20e6,
        img: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/n/o/note_10_plus_xanh.jpg',
    }
];

function showProducts(listProducts){
    let tbody = document.getElementById('list-products');
    tbody.innerHTML = '';

    for (let i = 0; i < listProducts.length; i++) {
        const product = listProducts[i];
        
        let html = `<tr>
                        <td>${i + 1}</td>
                        <td>
                            <img src="${product.img}" alt="" width="100" height="100">
                        </td>
                        <td>${product.name}</td>
                        <td>${product.brand}</td>
                        <td>${product.price}đ</td>
                        <td>
                            <button class="btn btn-link" onclick="showDetail(${product.id})">Detail</button>
                        </td>
                    </tr>`;
        
        tbody.innerHTML += html;
    }
}

showProducts(products);

function showDetail(id){
    //1: save productId selected
    localStorage.setItem('selectedProductId', id);
    localStorage.setItem('products', JSON.stringify(products));
    //2: redirect
    window.location.href = 'detail.html';
}

function search(){
    let sName = document.getElementById('search-product-name').value;
    let priceMin = parseInt(document.getElementById('search-product-price-min').value);
    let priceMax = parseInt(document.getElementById('search-product-price-max').value);
    let result = [];
    result = products.filter(function (value){
        return (sName.trim() !== '' && value.name.toLowerCase().includes(sName.toLowerCase()))
        &&
        (!isNaN(priceMin) && value.price >= priceMin
            &&
        !isNaN(priceMax) && value.price <= priceMax);
    });
    console.log(sName);
    
    showProducts(result);
}

