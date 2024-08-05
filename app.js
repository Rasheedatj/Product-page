const totalItemEl = document.querySelector('.total-item');
let totalItem = totalItemEl.innerText;
const cartModal = document.querySelector('.cart-modal');
const cartItemNumber = document.querySelector('.item-number');

const openMenu = () => {
  document.querySelector('body').classList.add('active');
  document.querySelector('.menu').classList.add('active');
};

const closeMenu = () => {
  document.querySelector('.menu').classList.remove('active');
  document.querySelector('body').classList.remove('active');
};

const openCart = () => cartModal.classList.toggle('active');

const addToCart = () => {
  const section = document.querySelector('.cart-modal section');

  if (totalItem > 0) {
    // open cart
    cartModal.classList.add('active');
    // calculte total amount
    const totalAmount = +totalItem * 125;
    // show number of items on icon
    cartItemNumber.classList.add('active');
    cartItemNumber.innerText = totalItem;

    // replace 'your cart is empty' with selected item
    section.innerHTML = `    <div class="item">
                      <img src="./images//image-product-1-thumbnail.jpg" alt="product image">
                      <div>
                          <p>Fall Limited Edition Sneakers</p>
                          <p>$125 x <span class="number">${Number(
                            totalItem
                          )}</span>  &nbsp; <span class="total">$${totalAmount}.00</span></p>
                      </div>
  
                      <div class="delete">
  
                          <img src="./images/icon-delete.svg" alt="delete">
                      </div>
                  </div>
  
                  
                  <button class="cart">
                      <p>Checkout</p>
                  </button>`;
  } else {
    alert('Select an item');
  }
};

const cartItems = (e) => {
  if (e.target.classList.contains('minus')) {
    if (totalItem !== 0) {
      // decrease item number
      totalItem--;
      totalItemEl.innerText = totalItem;
    }
  } else if (e.target.classList.contains('plus')) {
    // increase item number
    totalItem++;
    totalItemEl.innerText = totalItem;
  }
};

document.querySelector('.close').addEventListener('click', closeMenu);
document.querySelector('.menu-icon').addEventListener('click', openMenu);
document.querySelector('.cart-icon').addEventListener('click', openCart);
document.querySelector('.cart').addEventListener('click', addToCart);
document.querySelector('.number').addEventListener('click', cartItems);
