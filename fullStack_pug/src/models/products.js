class ProductModel {
    constructor() {
        this.products = [];
        this.nextId = 0;
    }

    getProduct(id) {
        return products.find(product => product.id == id);
    }
    
    getProducts() {
        return products;
    }
    
    addProduct(title, price, thumbnail) {
        const newProduct = {
            title: title,
            price: price,
            thumbnail: thumbnail
        };
        newProduct.id = `${nextId}`;
        products.push(newProduct);
        nextId++;
        return newProduct;
    };
    
    updateProduct(id, title, price, thumbnail) {
        const productToUpdate = products.find(product => product.id == id);
        if (productToUpdate != undefined) {
            productToUpdate.title = title;
            productToUpdate.price = price;
            productToUpdate.thumbnail = thumbnail;
            return true;
        } else {
            return false;
        }
    };
    
    deleteProduct(id) {
        const previousProductQuantity = products.length;
        products = products.filter(product => product.id != id);
        if (previousProductQuantity == products.length) {
            return false;
        } else {
            return true;
        }
    };
}

const productModel = new ProductModel();

module.exports = productModel;