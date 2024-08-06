const totalItemEl = document.querySelector('.total-item');
let totalItem = totalItemEl.innerText;
const cartModal = document.querySelector('.cart-modal');
const cartItemNumber = document.querySelector('.item-number');
const thumbImages = document.querySelectorAll('.thumbnail  img');
const galleryModal = document.querySelector('.gallery');

let activeThumbnail = document.querySelector('.thumbnail .active');
let page = 0;

const images = {
  product1: './images/image-product-1.jpg',
  product2: './images/image-product-2.jpg',
  product3: './images/image-product-3.jpg',
  product4: './images/image-product-4.jpg',
};

const openMenu = () => {
  document.querySelector('body').classList.add('active');
  document.querySelector('.menu').classList.add('active');
};

const closeMenu = () => {
  document.querySelector('.menu').classList.remove('active');
  document.querySelector('body').classList.remove('active');
};

const openCart = () => {
  if (cartModal.classList.contains('active')) {
    cartModal.classList.remove('active');
  } else {
    cartModal.classList.add('active');
  }
};

const addToCart = () => {
  const section = document.querySelector('.cart-modal section');

  if (totalItem > 0) {
    // open cart
    openCart();
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
  
                  
                  <button class="checkout">
                      <p>Checkout</p>
                  </button>`;

    document.querySelector('.checkout').addEventListener('click', () => {
      openCart();
      cartItemNumber.classList.remove('active');
    });
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

const openGallery = () => {
  page = 0;
  if (galleryModal.classList.contains('active')) {
    galleryModal.classList.remove('active');
    document.querySelector('body').classList.remove('active');
  } else {
    document.querySelector('body').classList.add('active');
    galleryModal.classList.add('active');
  }
};

const pagination = (e) => {
  if (e.target.classList.contains('jpg')) openGallery();
  thumbImages.forEach((image) => image.classList.remove('active'));
  e.target.classList.add('active');
  g(e.target.src);
};

const g = (active) => {
  activeThumbnail = active;
  document.querySelector('.image img').src = activeThumbnail;
};

const next = () => {
  if (page >= 3) return;
  page++;
  const imageKey = `product${page + 1}`;
  g(images[imageKey]);
};

const previous = () => {
  if (page <= 0) return;
  page--;

  const imageKey = `product${page + 1}`;
  g(images[imageKey]);
};

document.querySelector('.close').addEventListener('click', closeMenu);
document.querySelector('.menu-icon').addEventListener('click', openMenu);
document.querySelector('.cart-icon').addEventListener('click', openCart);
document.querySelector('.cart').addEventListener('click', addToCart);
document.querySelector('.number').addEventListener('click', cartItems);
document.querySelector('.thumbnail').addEventListener('click', pagination);
document.querySelector('.close-modal').addEventListener('click', openGallery);

document.querySelector('.next').addEventListener('click', next);
document.querySelector('.previous').addEventListener('click', previous);
