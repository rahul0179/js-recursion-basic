const products = [

    { name: 'iphone', price: 50000 },
    { name: 'mi', price: 22000 },
    { name: 'asus laptop', price: 100000 },
    { name: 'accer', price: 75000 },
    { name: 'hp laptop', price: 85000 },
    { name: 'del', price: 65000 },
    { name: 'apple', price: 115000 }

]

function searchProduct(products, searchText) {
    const result = [];
    for (const product of products) {
        if (product.name.includes(searchText)) {
            result.push(product);
        }


    }
    return result;
}
console.log(searchProduct(products, "laptop "));