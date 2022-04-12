const express = require('express');
const path = require('path');
const mainRouter = require('./routes/index');
const productModel = require('./models/products');

const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Listening on port ${server.address().port}...`);
})

server.on('error', (error) => {
    console.log(`Server error: ${error}`);
});

const publicPath = path.resolve(__dirname, '../public');
const layoutsPath = path.resolve(__dirname, './../views/layouts');
const partialsPath = path.resolve(__dirname, './../views/partials');
console.log(`${layoutsPath}`);

app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', mainRouter);

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/products', (req, res) => {
    const products = productModel.getProducts();
    res.render('products', { products: products, listExists: products.length });
});

app.get('/', (req, res) => {
    res.render('new_product');
});