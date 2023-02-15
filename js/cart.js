// *! CART ITEMS

let cartItems = () => {
  const cartDetails = document.querySelector(".cart-details");
  return (cartDetails.innerHTML = productItems
    .map((x) => {
      let { productId, productImage, productName, productPrice, productItem } = x;
      let price = productPrice;
      let newPrice = Number(price.replace(/[^0-9.-]+/g, ""));
      let total = "$" + newPrice * productItem;
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
          <img class="delete" src="images/icon-delete.svg" alt="delete item" onclick="delete(${})">
        </div>
      `;
    })
    .join(""));
};
cartItems();
