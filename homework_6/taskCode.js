'use strict';

const Basket = {
    products: [],

    addToBasket(product, cost) {
        let repeat = false;
        let repeat_position = 0;
        let newCost = 0;
        let newQuantity = 0;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name === product) {
                repeat = true;
                newQuantity = this.products[i].quantity += 1;
                newCost = this.products[i].cost += cost;
                repeat_position = i;
                break;
            } else if (this.products[i].name !== product) {

            }
        }
        if (repeat === true) {
            this.products.slice(repeat_position, 1, {name: product, cost: newCost, quantity: newQuantity});
        } else {
            this.products.push({name: product, cost: cost, quantity: 1});
        }
        Basket.init();
    },

    clearBasket() {
        this.products = [];
        Basket.init();
    },

    calculateCost() {
        let result = 0;
        for (let i = 0; i <= this.products.length - 1; i++) {
            result += this.products[i].cost;
        }
        return result;
    },

    calculateProdQuan() {
        let result = 0;
        for (let i = 0; i <= this.products.length - 1; i++) {
            result += this.products[i].quantity;
        }
        return result;
    },

    init() {
        Products.init();
        let dataBlock = document.querySelector('#basket');
        dataBlock.innerText = '';
        dataBlock.innerHTML += '<div class="basket_block">' +
            '<div class="b_header">Корзина:</div>' +
            '<div class="b_content"></div>' +
            '<div class="b_footer"></div></div>';
        let basketBlock = document.querySelector('.basket_block');
        basketBlock.style.display = 'flex';
        basketBlock.style.flexDirection = 'column';
        basketBlock.style.height = '100%';
        dataBlock.style.boxSizing = 'border-box';
        let headerBlock = document.querySelector('.b_header');
        headerBlock.style.height = '30px';
        headerBlock.style.borderBottom = '2px dashed lightgrey';
        headerBlock.style.textAlign = 'center';
        headerBlock.style.paddingTop = '10px';
        dataBlock.innerHTML += '<div class="b_content"></div>';
        let contentBlock = document.querySelector('.b_content');
        contentBlock.style.display = 'flex';
        contentBlock.style.flexWrap = 'wrap';
        contentBlock.style.margin = 'auto';
        contentBlock.style.flexDirection = 'column';
        contentBlock.style.padding = '10px';
        contentBlock.style.boxSizing = 'border-box';
        contentBlock.style.overflow = 'auto';
        contentBlock.style.flexDirection = 'row';
        contentBlock.style.textAlign = 'center';
        contentBlock.style.alignItems = 'center';
        contentBlock.style.width = '100%';
        if (this.products.length !== 0) {
            for (let i = 0; i < this.products.length; i++) {
                contentBlock.innerHTML += `<div class="basket_elem-${i + 1}">Наименование: ${this.products[i].name}<br>
            Стоимость: ${this.products[i].cost}<br>Количество: ${this.products[i].quantity}<br><br></div>`;
                let element = document.querySelector(`.basket_elem-${i + 1}`);
                element.style.border = '1px dotted grey';
                element.style.width = '90%';
                element.style.alignItems = 'center';
                element.style.alignContent = 'center';
                element.style.clear = 'both';
                element.style.marginBottom = '5px';
                element.style.padding = '10px';
                element.style.boxSizing = 'border-box';
            }
        } else {
            contentBlock.style.width = 'auto';
            contentBlock.innerHTML += '<div>Корзина пуста</div>';
        }
        let footerBlock = document.querySelector('.b_footer');
        footerBlock.style.borderTop = '2px dashed lightgrey';
        footerBlock.style.padding = '10px';
        footerBlock.style.boxSizing = 'border-box';
        footerBlock.innerHTML += `<br>Товаров в корзине: ${this.calculateProdQuan()}
                                  <br>Общая стоимость товаров: ${this.calculateCost()}<br>
                                  <button id="clear_basket" onclick="Basket.clearBasket()">Очистить корзину</button>`;
    },
};

const Products = {
    products: [{name: 'Принтер', cost: 14500}, {name: 'Сканер', cost: 8000}, {name: 'Монитор', cost: 22000},
        {name: 'Системный блок', cost: 64000}, {name: 'Веб-камера', cost: 3400}, {name: 'Фотоаппарат', cost: 20000},
        {name: 'Блок питания', cost: 7000}, {name: 'Видеокарта', cost: 999999}, {name: 'Мат. плата', cost: 12000},
        {name: 'Процессор', cost: 30000}, {name: 'Наушники', cost: 4600}, {name: 'Клавиатура', cost: 4300}],

    init() {
        let dataBlock = document.querySelector('#products');
        dataBlock.innerHTML += '<div class="p_header">Каталог товаров:</div>';
        let headerBlock = document.querySelector('.p_header');
        headerBlock.style.height = '30px';
        headerBlock.style.borderBottom = '2px dashed lightgrey';
        headerBlock.style.textAlign = 'center';
        headerBlock.style.paddingTop = '10px';
        dataBlock.innerHTML += '<div class="p_content"></div>';
        let contentBlock = document.querySelector('.p_content');
        contentBlock.style.display = 'flex';
        contentBlock.style.flexWrap = 'wrap';
        contentBlock.style.margin = 'auto';
        if (this.products.length === 0) {
            contentBlock.innerHTML += 'Пусто';
        } else {
            this.productStructure(contentBlock);
        }
    },

    buttonInit(num) {
        let myElement = document.getElementById(`product-${num}`);
        let name = myElement.querySelector('span.prod_name');
        let cost = myElement.querySelector('span.ps_cost');
        function addToBasket() {
            Basket.addToBasket(name.innerHTML, parseInt(cost.innerHTML));
        }
        addToBasket();
    },

    imageInit(num, alt=0) {
        if (num !== 777) {
            let image = document.getElementById(`prod_button-${num}`);
            let imgGallery = document.querySelector('#gallery');
            imgGallery.innerHTML += `<div class="img_gall-${num}"></div>`;
            let imgGalleryElem = document.querySelector(`.img_gall-${num}`);
            imgGallery.style.position = 'absolute';
            imgGallery.style.width = '99%';
            imgGallery.style.height = '99%';
            imgGallery.style.backgroundColor = 'rgba(151, 141, 132, 0.8)';
            imgGallery.style.display = 'flex';
            imgGallery.style.flexDirection = 'row';
            imgGalleryElem.innerHTML += `
                        <div class="img_left"><button onclick="Products.imageInit(777, ${parseInt(num) - 1})" 
                        class="img_left_b"></button></div>
                        <img onclick="Products.imageInit(777, 666)" class="big_img" src="img_b/img_${num}.png" 
                        alt="img"><div class="img_right"><button onclick="Products.imageInit(777, ${parseInt(num) + 1})" 
                        class="img_right_b"></button></div>
                        `;
            let bigImg = document.querySelector(`.big_img`);
            let leftImg = document.querySelector(`.img_left`);
            let rightImg = document.querySelector(`.img_right`);
            let leftBtn = document.querySelector(`.img_left_b`);
            let rightBtn = document.querySelector(`.img_right_b`);

            bigImg.style.align = 'center';
            bigImg.style.position = 'absolute';
            bigImg.style.left = '40%';
            bigImg.style.top = '30%'
            bigImg.style.width = '20%';

            leftImg.style.width = '5%';
            leftImg.style.height = '100%';
            leftImg.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            leftImg.style.position = 'absolute';
            leftImg.style.left = '0px';

            leftBtn.style.width = '100%';
            leftBtn.style.height = '100%';
            leftBtn.style.border = 'none';
            leftBtn.style.backgroundColor = 'none';
            leftBtn.style.outline = 'none';

            rightBtn.style.width = '100%';
            rightBtn.style.height = '100%';
            rightBtn.style.border = 'none';
            rightBtn.style.backgroundColor = 'none';
            rightBtn.style.outline = 'none';

            rightImg.style.width = '5%';
            rightImg.style.height = '100%';
            rightImg.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            rightImg.style.position = 'absolute';
            rightImg.style.right = '0px';
        } else {
            if (alt !== 666) {
                let imgGallery = document.querySelector('#gallery');
                imgGallery.parentNode.removeChild(imgGallery);
                let globalParent = document.querySelector('body');
                globalParent.innerHTML += '<div id="gallery"></div>';
                if (alt === 0) {
                    Products.imageInit(`${this.products.length}`);
                } else if (alt === this.products.length + 1) {
                    Products.imageInit(1);
                } else {
                    Products.imageInit(alt);
                }
            } else {
                let imgGallery = document.querySelector('#gallery');
                imgGallery.parentNode.removeChild(imgGallery);
                let globalParent = document.querySelector('body');
                globalParent.innerHTML += '<div id="gallery"></div>';
            }
        }
    },

    productStructure(block) {
        block.style.height = '100%';
        for (let i = 0; i < this.products.length; i++) {
            block.innerHTML += `<div id="product-${i + 1}" class="product-${i + 1}"></div>`;
            let prodBlock = document.querySelector(`.product-${i + 1}`);
            prodBlock.style.backgroundColor = 'rgba(0,0,0,0.05)';
            prodBlock.style.width = '110px';
            prodBlock.style.fontSize = '80%';
            prodBlock.style.height = '110px';
            prodBlock.style.border = '1px solid #adadad';
            prodBlock.style.margin = '5px';
            prodBlock.style.boxSizing = 'border-box';
            prodBlock.style.display = 'flex';
            prodBlock.style.flexDirection = 'column';
            prodBlock.innerHTML = `<span class="prod_name">${this.products[i].name}</span>
            <span class="${this.products[i + 1]}">Цена: <span class="ps_cost">${this.products[i].cost}</span> руб.</span>
            <img onclick="Products.imageInit(${i + 1})" class="prod_img-${i + 1}" src="img_l/img_${i + 1}.png" alt="img">
            <button onclick="Products.buttonInit(${i + 1})" class="prod_button-${i + 1}">Купить</button>`;
            let prodName = document.querySelector(`.prod_name-${i + 1}`);
            let prodButton = document.querySelector(`.prod_button-${i + 1}`);
            let prodImg = document.querySelector(`.prod_img-${i + 1}`);
            let prodCost = document.querySelector(`.prod_cost-${i + 1}`);
            prodButton.style.height = '100%';
            prodButton.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
            prodButton.style.width = '100%';
            prodButton.style.border = 'none';
            prodButton.style.color = 'brown';
            prodButton.style.color = 'brown';
            prodImg.style.width = '50%';
            prodBlock.style.alignItems = 'center';
        }
    },
}

Basket.init()
