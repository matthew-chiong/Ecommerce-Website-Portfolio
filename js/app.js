const headerNavContainer = document.querySelector(".header-nav-container");
const cartDetails = document.querySelector(".cart-details");
const checkout = document.querySelector(".checkout");
const mainContainer = document.querySelector(".main-container-wrapper");

//toggle open hamburger menu
function hamburger() {
  let burger = document.querySelector(".hamburger");
  burger.classList.toggle("open");
  headerNavContainer.classList.toggle("open");
}
// toggle open cart icon
function cart() {
  let cart = document.querySelector(".cart-container");
  cart.classList.toggle("open");
}

// if cart is empty

const cartEmpty = () => {
  if (productItems.length === 0) {
    checkout.style.display = "none";
    cartDetails.innerHTML = `
    <p class="empty">Cart is empty<p>`;
  } else {
    checkout.style.display = "block";
  }
};
// this is where you add items
let productItemsData = [
  {
    productThumbnail: [
      "images/image-product-1.jpg",
      "images/image-product-2.jpg",
      "images/image-product-3.jpg",
      "images/image-product-4.jpg",
    ],
    productImage: [
      "images/image-product-1-thumbnail.jpg",
      "images/image-product-2-thumbnail.jpg",
      "images/image-product-3-thumbnail.jpg",
      "images/image-product-4-thumbnail.jpg",
    ],
    productId: "Fall_LE_Sneakers",
    productName: "Fall Limited Edition Sneakers",
    productInfo:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    productPrice: "$125.00",
    productDiscount: "50%",
    productOriginalPrice: "$250.00",
  },
  {
    productThumbnail: [
      "images/Hermes-Day-Sneaker-1.jpg",
      "images/Hermes-Day-Sneaker-2.jpg",
      "images/Hermes-Day-Sneaker-3.JPG",
      "images/Hermes-Day-Sneaker-4.JPG",
    ],
    productImage: [
      "images/Hermes-Day-Sneaker-1.jpg",
      "images/Hermes-Day-Sneaker-2.jpg",
      "images/Hermes-Day-Sneaker-3.JPG",
      "images/Hermes-Day-Sneaker-4.JPG",
    ],
    productId: "Hermes_Day_Sneaker",
    productName: "Hermes Day Sneaker",
    productInfo:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    productPrice: "$100.00",
    productDiscount: "50%",
    productOriginalPrice: "$200.00",
  },
  {
    productThumbnail: [
      "images/women-casual-shoes-sneakers-1.jpg",
      "images/women-casual-shoes-sneakers-2.jpg",
      "images/women-casual-shoes-sneakers-3.jpg",
      "images/women-casual-shoes-sneakers-4.jpg",
    ],
    productImage: [
      "images/women-casual-shoes-sneakers-1-thumbnail.jpg",
      "images/women-casual-shoes-sneakers-2-thumbnail.jpg",
      "images/women-casual-shoes-sneakers-3-thumbnail.jpg",
      "images/women-casual-shoes-sneakers-4-thumbnail.jpg",
    ],
    productId: "Women_Casual_Shoes_Sneakers",
    productName: "Women Casual Shoes Sneakers",
    productInfo:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    productPrice: "$150.00",
    productDiscount: "50%",
    productOriginalPrice: "$300.00",
  },
  {
    productThumbnail: [
      "images/woodbox-sneakers-shoes-for-girls-1.jpg",
      "images/woodbox-sneakers-shoes-for-girls-2.jpg",
      "images/woodbox-sneakers-shoes-for-girls-3.jpg",
      "images/woodbox-sneakers-shoes-for-girls-4.jpg",
    ],
    productImage: [
      "images/woodbox-sneakers-shoes-for-girls-1.jpg",
      "images/woodbox-sneakers-shoes-for-girls-2.jpg",
      "images/woodbox-sneakers-shoes-for-girls-3.jpg",
      "images/woodbox-sneakers-shoes-for-girls-4.jpg",
    ],
    productId: "Woodbox_Sneakers_Shoes_for_Girls",
    productName: "Woodbox Sneakers Shoes for Girls",
    productInfo:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    productPrice: "$125.00",
    productDiscount: "50%",
    productOriginalPrice: "$250.00",
  },
  {
    productThumbnail: [
      "images/fashionable-and-stylish-sneakers-1.jpeg",
      "images/fashionable-and-stylish-sneakers-2.jpeg",
      "images/fashionable-and-stylish-sneakers-3.jpeg",
      "images/fashionable-and-stylish-sneakers-4.jpeg",
    ],
    productImage: [
      "images/fashionable-and-stylish-sneakers-1-thumbnail.jpeg",
      "images/fashionable-and-stylish-sneakers-2-thumbnail.jpeg",
      "images/fashionable-and-stylish-sneakers-3-thumbnail.jpeg",
      "images/fashionable-and-stylish-sneakers-4-thumbnail.jpeg",
    ],
    productId: "Fashionable_and_stylish_sneakers",
    productName: "Fashionable and Stylish Sneakers",
    productInfo:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    productPrice: "$200.00",
    productDiscount: "20%",
    productOriginalPrice: "$250.00",
  },
  {
    productThumbnail: [
      "images/casual-stylish-women's-sneaker-shoes-1.jpg",
      "images/casual-stylish-women's-sneaker-shoes-2.jpg",
      "images/casual-stylish-women's-sneaker-shoes-3.jpg",
      "images/casual-stylish-women's-sneaker-shoes-4.jpg",
    ],
    productImage: [
      "images/casual-stylish-women's-sneaker-shoes-1.jpg",
      "images/casual-stylish-women's-sneaker-shoes-2.jpg",
      "images/casual-stylish-women's-sneaker-shoes-3.jpg",
      "images/casual-stylish-women's-sneaker-shoes-4.jpg",
    ],
    productId: "Casual_Stylish_Womens_Sneaker_Shoes",
    productName: "Casual Stylish Women's Sneaker Shoes",
    productInfo:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    productPrice: "$100.00",
    productDiscount: "50%",
    productOriginalPrice: "$200.00",
  },
];

// data that is being retrieved from the local storage
let productItems = JSON.parse(localStorage.getItem("data")) || [];

// cart icon data
let cartItems = () => {
  return (cartDetails.innerHTML = productItems
    .map((x) => {
      let { productId, productImage, productName, productPrice, productItem } =
        x;
      let price = productPrice;
      let newPrice = Number(price.replace(/[^0-9.-]+/g, ""));
      let total = "$" + newPrice * productItem;

      if (productItems.length === 0) {
        return `<p class="empty">Your cart is empty</p>`;
      } else {
        return `
      <div class="cart-product-container">
        <img class="cart-product-image" src="${productImage}" alt="">
        <div class="cart-div-1">
          <p class="cart-product-name">${productName}</p>
          <div class="cart-div-2">
           <p class="cart-product-amount">${productPrice}</p>
           <p class="cart-product-item">x &nbsp;${productItem}</p>
           <p class="cart-product-total">${total}</p>
          </div>
        </div>
        <img class="delete" src="images/icon-delete.svg" alt="delete item" onclick="deleteItem(${productId})">
      </div>
    `;
      }
    })
    .join(""));
};
cartItems();

//delete item from the cart
const deleteItem = (id) => {
  const search = productItems.find((x) => x.productId === id.id);
  const index = productItems.indexOf(search);

  productItems.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(productItems));
  JSON.parse(localStorage.getItem("data"));
  cartItems();
  updateCart();
  cartEmpty();
};

// hard coded html main container
let itemsData = () => {
  return (mainContainer.innerHTML = productItemsData
    .map((x) => {
      let {
        productThumbnail,
        productImage,
        productId,
        productName,
        productInfo,
        productPrice,
        productDiscount,
        productOriginalPrice,
      } = x;
      return `
      <div class="main-container">
        <div class="product-image">
          <ul class="${productId} product-preview">
            <img class="product-thumbnail current-slide" src=${productThumbnail[0]} alt="image of a pair of shoe with white and brown design"></img>
            <img class="product-thumbnail" src=${productThumbnail[1]} alt="image of a pair of shoe with white and brown design"></img>
            <img class="product-thumbnail" src=${productThumbnail[2]} alt="image of a pair of shoe with white and brown design"></img>
            <img class="product-thumbnail" src=${productThumbnail[3]} alt="image of a pair of shoe with white and brown design"></img>
          </ul>
          <img class="prev-btn" src="design/prev-btn.png" alt="Previous Button" onclick="prevSlide(${productId})">
          <img class="next-btn" src="design/next-btn.png" alt="Next Button" onclick="nextSlide(${productId})">
        </div>
        <div class="product-carousel">
          <ul class="${productId} preview-carousel">
            <li class="product-carousel-image current-carousel"><img src=${productImage[0]} alt="sample image of the white and brown shoes" onclick="targetSlide(${productId},event)"></li>
            <li class="product-carousel-image"><img src=${productImage[1]} alt="sample image of the white and brown shoes" onclick="targetSlide(${productId},event)"></li>
            <li class="product-carousel-image"><img src=${productImage[2]} alt="sample image of the white and brown shoes" onclick="targetSlide(${productId},event)"></li>
            <li class="product-carousel-image"><img src=${productImage[3]} alt="sample image of the white and brown shoes" onclick="targetSlide(${productId},event)"></li>
          </ul>
        </div> 
        <div class="product-details">
          <p class="product-company">SNEAKERS COMPANY</p>
          <h2 class="product-name">${productName}</h2>
          <p class="product-info">${productInfo}</p>
          <p class="product-price">${productPrice}</p>
          <p class="product-discount">${productDiscount}</p>
          <p class="product-original-price"><del>${productOriginalPrice}</del></p>
          <div class="product-quantity">
            <button class="decrement-btn" onclick="decrement(${productId})">-</button>
            <p id="${productId}" class="product-count">0</p>
            <button class="increment-btn" onclick="increment(${productId})">+</button>
          </div>
          <button class="add-to-cart-btn" onclick="addToCart(${productId})">Add to cart</button>
        </div>
      </div>  
        `;
    })
    .join(""));
};

itemsData();

// when i click plus, increment quantity -----------------------------------
const increment = (id) => {
  let count = parseFloat(id.innerHTML);

  count += 1;
  id.innerHTML = count;
};
// when i click minus, decrement quantity ----------------------------------
const decrement = (id) => {
  let count = parseFloat(id.innerHTML);

  if (count === 0) return;
  else {
    count -= 1;
    id.innerHTML = count;
  }
};

// when i click add to cart, add items to cart -----------------------------
const addToCart = (id) => {
  let search = productItems.find((x) => x.productId === id.id);
  let searchItemsData = productItemsData.find((x) => x.productId === id.id);
  let count = parseFloat(id.innerHTML);

  if (count === 0) return;
  if (search === undefined) {
    productItems.push({
      productId: id.id,
      productName: searchItemsData.productName,
      productImage: searchItemsData.productImage[0],
      productPrice: searchItemsData.productPrice,
      productItem: count,
    });
    id.innerHTML = 0;
    count = 0;
  } else {
    search.productItem += count;
    id.innerHTML = 0;
    count = 0;
  }
  localStorage.setItem("data", JSON.stringify(productItems));
  updateCart();
  cartEmpty();
};

// update cart everytime add to cart button is clicked
const updateCart = () => {
  let cartAmount = document.querySelector(".cart-amount");
  let nums = productItems.map((x) => x.productItem);
  let total = nums.reduce((a, b) => a + b, 0);
  cartAmount.innerHTML = total;
  cartItems();
};

updateCart();
cartEmpty();

// CAROUSEL SECTION
const track = document.querySelectorAll(".product-preview");
const trackArr = Array.from(track);
const carousel = document.querySelectorAll(".preview-carousel");
const carouselArr = Array.from(carousel);

// arrange slides next to one another
trackArr.map((arrTrack) => {
  const slides = Array.from(arrTrack.children);
  const slideWidth = slides[0].getBoundingClientRect().width;

  const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
  };

  slides.forEach(setSlidePosition);
});

// move to slide function

const moveToSlide = (track, position, targetSlide, currentSlide) => {
  track[position].style.transform =
    `translateX(-` + targetSlide.style.left + `)`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

// when i click left, move slide to the left.
const prevSlide = (id) => {
  const search = productItemsData.find((x) => x.productId === id.id);
  const pos = productItemsData
    .map((x) => x.productId)
    .indexOf(search.productId);
  const trackCurrent = trackArr[pos];
  const currentSlide = trackCurrent.querySelector(".current-slide");
  if (currentSlide.previousElementSibling === null) return;
  else {
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(trackArr, pos, prevSlide, currentSlide);
  }
};

// when i click right, move slide to the right.
const nextSlide = (id) => {
  const search = productItemsData.find((x) => x.productId === id.id);
  const pos = productItemsData
    .map((x) => x.productId)
    .indexOf(search.productId);
  const trackCurrent = trackArr[pos];
  const currentSlide = trackCurrent.querySelector(".current-slide");
  if (currentSlide.nextElementSibling === null) return;
  else {
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(trackArr, pos, nextSlide, currentSlide);
  }
};

const targetSlide = (id, event) => {
  const targetCurrent = event.target.closest("ul");
  const targetCarousel = event.target.closest("li");
  const currentCarousel = targetCurrent.querySelector(".current-carousel");
  if (!targetCarousel) return;
  else {
    currentCarousel.classList.remove("current-carousel");
    targetCarousel.classList.add("current-carousel");
  }
  const search = productItemsData.find((x) => x.productId === id.id);
  const pos = productItemsData
    .map((x) => x.productId)
    .indexOf(search.productId);
  const trackCurrent = trackArr[pos];
  const currentSlide = trackCurrent.querySelector(".current-slide");

  const targetArr = Array.from(targetCurrent.children);
  const carouselPos = targetArr.findIndex(
    (x) => x.className === "product-carousel-image current-carousel"
  );
  const targetCurrentSlide = trackCurrent.children[carouselPos];
  console.log(trackCurrent);
  trackCurrent.style.transform =
    `translateX(-` + targetCurrentSlide.style.left + `)`;
  currentSlide.classList.remove("current-slide");
  targetCurrentSlide.classList.add("current-slide");
  // moveToSlide(trackArr, pos, nextSlide, currentSlide);
};
// *! DEMO //

// *! DEMO //
