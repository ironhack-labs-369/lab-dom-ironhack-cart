// ITERATION 1

function updateSubtotal(product) {
    let price = Number(product.querySelector('.price span').innerText).toFixed(
        2
    );
    let quantity = Number(product.querySelector('input').value);
    let subTotal = price * quantity;
    // console.log('price', price);
    // console.log('quantity', quantity);
    // console.log('subTotal', subTotal);

    const subtotal = product.querySelector('.subtotal span');
    subtotal.innerText = subTotal.toFixed(2);
    return subTotal;
}

function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.

    // const singleProduct = document.querySelector('.product');
    // updateSubtotal(singleProduct);
    // const row = document.querySelectorAll('.product').forEach((row) => {
    //     updateSubtotal(row);
    // });
    // end of test

    // ITERATION 2

    let totalPrice = 0;

    const rows = document.getElementsByClassName('product');
    for (let i = 0; i < rows.length; i++) {
        let subTotal = Number(updateSubtotal(rows[i]));
        console.log('subTotal', subTotal);
        totalPrice += subTotal;
    }
    console.log('totalPrice', totalPrice);

    // ITERATION 3
    const total = document.getElementById('total-value').firstElementChild;
    total.innerText = totalPrice.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget.parentNode.parentNode;
    console.log('The target in remove is:', target);
    const parent = target.parentNode;
    parent.removeChild(target);
    calculateAll();
}

// ITERATION 5

function createProduct() {
    const product = document.querySelector('.product');
    const newProduct = product.cloneNode(true);
    newProduct.querySelector('.name span').innerText = document.querySelector(
        '.create-product td input'
    ).value;
    newProduct.querySelector('.subtotal span').innerText = 0;
    newProduct.querySelector('.price span').innerText = document.querySelector(
        '#cart > tfoot > tr > td:nth-child(2) > input[type=number]'
    ).value;
    newProduct
        .querySelector('.action .btn')
        .addEventListener('click', removeProduct);
    const newTbody = document.querySelector('tbody');

    newTbody.appendChild(newProduct);
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    const removeButtons = document.getElementsByClassName('btn btn-remove');
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', removeProduct);
    }

    const createButton = document.getElementById('create');
    createButton.addEventListener('click', () => createProduct());
});
