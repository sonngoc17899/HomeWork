let productID = parseInt(localStorage.getItem("selectedProductID"));
let products = JSON.parse(localStorage.getItem(`products`));
let product = products.find(function(v){
    return (v.id === productID);
});
console.log(product);
console.log(productID);








