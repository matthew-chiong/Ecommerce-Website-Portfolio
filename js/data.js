// *! ITEMS DATA FUNCTION() //

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
      return `<div class="product-wrapper">
      <div class="product-image">
        <ul class="product-preview ${productId}">
          <img class="product-thumbnail current-slide" src=${productThumbnail[0]} alt="image of a pair of shoe with white and brown design"></img>
          <img class="product-thumbnail" src=${productThumbnail[1]} alt="image of a pair of shoe with white and brown design"></img>
          <img class="product-thumbnail" src=${productThumbnail[2]} alt="image of a pair of shoe with white and brown design"></img>
          <img class="product-thumbnail" src=${productThumbnail[3]} alt="image of a pair of shoe with white and brown design"></img>
        </ul>
  
        <img class="prev-btn" src="design/prev-btn.png" alt="Previous Button" onclick="prevSlide(${productId})">
        <img class="next-btn" src="design/next-btn.png" alt="Next Button" onclick="nextSlide(${productId})">
  
        <ul class="preview-carousel">
          <li><img class="product-carousel-image" src=${productImage[0]} alt="sample image of the white and brown shoes"></li>
          <li><img class="product-carousel-image" src=${productImage[1]} alt="sample image of the white and brown shoes"></li>
          <li><img class="product-carousel-image" src=${productImage[2]} alt="sample image of the white and brown shoes"></li>
          <li><img class="product-carousel-image" src=${productImage[3]} alt="sample image of the white and brown shoes"></li>
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
      
    </div>`;
    })
    .join(""));
};

itemsData();
