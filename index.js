/* SLIDESHOW START */
var counter = 1;
setInterval (function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 4000);

function enquiryform_function(){
    document.getElementById("enquiry-form").reset();
    alert("Thank you for your feekback!")
}
/* SLIDESHOW END */

/* Cart start */
let openShopping = document.querySelector('.shopping i');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.cartQuantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
    
})



let products = [
    {
        id: 1,
        name: 'NIKE INVI3',
        image: 'AERUSFIRST.webp',
        price: 120000
    },
    {
        id: 2,
        name: 'NIKE VAPOR 3',
        image: 'VAPOR3FIRST.png',
        price: 120000
    },
    {
        id: 3,
        name: 'NIKE VOMERO 5',
        image: 'VOM5FIRST.png',
        price: 220000
    },
    {
        id: 4,
        name: 'YONEX ECLPISE',
        image: 'ECLIPFIRST.webp',
        price: 120000
    },
    {
        id: 5,
        name: 'YONEX COMFORT Z',
        image: 'COMFZFIRST.webp',
        price: 120000
    },
    {
        id: 6,
        name: 'YONEX AERUS',
        image: 'COMFZFIRST.webp',
        price: 220000
    },
    {
        id: 7,
        name: 'NIKE SUPERFLY 9',
        image: '4.PNG',
        price: 123000
    },
    {
        id: 8,
        name: 'NIKE PHANTOM GX',
        image: 'SUPER9FIRST.png',
        price: 320000
    },
    {
        id: 9,
        name: 'NIKE TIEMPO LEGEND',
        image: 'SUPER9FIRST.png',
        price: 120000   
    }
    
]


let listCarts  = [];

function addToCart(productId){
    // Find the product with the given ID
    const product = products.find(product => product.id === productId);

    // Check if the product is already in the listCarts
    if(!listCarts[productId]){
        // If not, add it
        listCarts[productId] = { ...product, quantity: 1 };
    } else {
        // If yes, increase the quantity
        listCarts[productId].quantity++;
    }

    // Reload the cart
    reloadCart();
}


function reloadCart(){
    listCart.innerHTML = '';
    let totalPrice = 0; 
    let count = 0;

    Object.values(listCarts).forEach(product => {
        totalPrice += product.price * product.quantity;
        count += product.quantity;

        let newDiv = document.createElement('li');
        newDiv.innerHTML = `
            <div><img src="images/products/${product.image}"/></div>
            <div>${product.name}</div>
            <div>${(product.price * product.quantity).toLocaleString()}</div>
            <div>
                <button class="quantityAdder" onclick="changeQuantity(${product.id}, ${product.quantity - 1})">-</button>
                <div class="count">${product.quantity}</div>
                <button class="quantityAdder" onclick="changeQuantity(${product.id}, ${product.quantity + 1})">+</button>
            </div>`;
        listCart.appendChild(newDiv);
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(productId, quantity){
    if(quantity == 0){
        delete listCarts[productId];
    }else{
        listCarts[productId].quantity = quantity;
    }
    reloadCart();
}
/* Cart end */