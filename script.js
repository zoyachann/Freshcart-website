// disPlayProduct();

let productDiv = document.querySelector(".product-container");

let disPlayProduct = async () => {
    productDiv.innerHTML = "";

    let product = await fetch("https://fakestoreapi.com/products");
    let finalProduct = await product.json();

    productDiv.style.display = "flex";
    productDiv.style.flexWrap = "wrap";
    productDiv.style.justifyContent = "space-between";

    finalProduct.forEach((element) => {
        productDiv.innerHTML += `
      <div class="card-container mb-2 mt-5 px-2 col-lg-3 col-md-3 col-6 pt-5">
        <div class="card">
          <img src="${element.image}" class="card-img-top p-4 img-fluid" alt="${element.title}" style="height: 200px; object-fit: contain;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title fs-6">${element.title}</h5>
            <p class="card-text my-2">Price: Rs. ${element.price} | Rating: ${element.rating.rate}</p>
        

            <small class="text-warning">
                     <i class="bi bi-star-fill"></i>
                     <i class="bi bi-star-fill"></i>
                     <i class="bi bi-star-fill"></i>
                     <i class="bi bi-star-fill"></i>
                     <span class="text-muted small">4.5(149)</span>
                   </small>
                   <div class=" mt-3 text-center">
                     <p class=""> <span class="me-5 pe-5">$24</span>
                        <button class="btn-color border border-0 rounded-1 w-25 text-white ms-5 add-to-cart" data-product-id="${element.id}" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart"">+ Add</button>

                     </p>
                  </div>
          </div>
        </div>
      </div>
    `;
    });

    

    // Add to Cart button functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            alert('Product added to cart!');
           
        });
    });
};

disPlayProduct();

let cart = [];


 function addToCart(id) {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(product => {
      cart.push(product);
      displayCart();
    });
}

function displayCart() {
  let cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "Your cart is empty";
  } else {
    cartItems.innerHTML = cart.map(item => `
      <li class="list-group-item">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <img src="${item.image}" alt="${item.title}" style="height: 50px; width: 50px; object-fit: cover;">
          </div>
          <span>Rs. ${item.price}</span>
          <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      </li>
    `).join('');
  }
}


function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  displayCart();
}

