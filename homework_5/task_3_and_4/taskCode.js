'use strict';

const Basket = {
    products: [{name: 'Принтер', cost: 14500}, {name: 'Сканер', cost: 8000}, {name: 'Монитор', cost: 22000}],

    addToBasket(product, cost) {
        this.products.push({name: product, cost: cost});
    },

    calculateCost() {
        let result = 0;
        for (let i = 0; i <= this.products.length - 1; i++) {
            result += this.products[i].cost;
        }
        return result;
    },

    showBasket() {
        let dataBlock = document.querySelector('#basket');
        dataBlock.innerHTML += 'В корзине: <br><br>';
        for (let i = 0; i < this.products.length; i++) {
            dataBlock.innerHTML += `Товар: ${this.products[i].name}; стоимость: ${this.products[i].cost} <br>`;
        }
        dataBlock.innerHTML += `<br> Товаров в корзине: ${this.products.length}`;
        dataBlock.innerHTML += `<br> Общая стоимость товаров: ${this.calculateCost()}`;
    },

    emptyCheck() {
        if (this.products.length == 0) {
            let a = document.querySelector('#basket');
            a.innerHTML += 'Корзина пуста';
        } else {
            this.showBasket();
        }
    },
};

const Products = {
    products: [{name: 'Принтер', cost: 14500}, {name: 'Сканер', cost: 8000}, {name: 'Монитор', cost: 22000},
        {name: 'Системный блок', cost: 64000}, {name: 'Веб-камера', cost: 3400}],

    showProducts() {
        let dataBlock = document.querySelector('#products');
        dataBlock.innerHTML += 'Каталог товаров: <br><br>';
        for (let i = 0; i < this.products.length; i++) {
            dataBlock.innerHTML += `Товар: ${this.products[i].name}; стоимость: ${this.products[i].cost} <br>`;
        }
    }

}

Products.showProducts()
Basket.emptyCheck()