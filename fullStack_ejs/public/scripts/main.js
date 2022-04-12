onSubmit = () => {
    event.preventDefault();
    const titleInput = document.getElementById("product_title");
    const priceInput = document.getElementById("product_price");
    const thumbnailInput = document.getElementById("product_thumbnail");
    fetch("http://localhost:8080/api/products", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            title: titleInput.value,
            price: priceInput.value,
            thumbnail: thumbnailInput.value
        })
    }).then((response) => {
        titleInput.value = '';
        priceInput.value = '';
        thumbnailInput.value = '';
    });
}

onProductListClick = () => {
    event.preventDefault();
    window.location.href = 'http://localhost:8080/products';   
}

onAddProductClick = () => {
    event.preventDefault();
    window.location.href = 'http://localhost:8080/';   
}