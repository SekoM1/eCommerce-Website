let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

console.log(cart);
// READ
function readProducts(products) {
  document.querySelector("#cart").innerHTML = "";

  // let total = cart
  //   .reduce((total, product) => {
  //     return total + product.price * product.qty;
  //   }, 0)
  //   .toFixed(2);

  products.forEach((product, position) => {
    console.log(product);
    document.querySelector("#cart").innerHTML += `
        <div class="card">
          <img src="${product.img}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-title">Qty:${product.qty}</p>

            <p class="card-text">R${product.price * product.qty}</p>
            
            <button type="button" class="btn btn-danger" onclick="deleteCart(${position})" >
            <i class="material-icons">remove_shopping_cart</i>
            </button>
            <button type="button" class="btn btn-warning" onclick="addToCart(${position})" >
            UPDATE
            </button>
            </div>
            </div>
            
            `;
  });
}

readProducts(cart);

// total price
function readCart(cart) {
  document.querySelector("#cart").innerHTML = "";
  let total = cart.reduce((total, product) => {
    return total + product.price * product.qty;
  }, 0);
}

// delete cart
function deleteCart(position) {
  let confirmation = confirm(
    "Are you sure you want to delete the selected product?"
  );

  if (confirmation) {
    cart.splice(position, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    readProducts(cart);
  }
}













// // sort by catergoty

// function sortCategory(){
//     let category = document.querySelector(#sortCategory).value;

//     let foundProduct = proucts.filter(product => {
//         return product.category == category  });
// }

// sort by name

// function sortName(){
//     let direction = document.querySelector("#sortName").value;

//     products=products.sort((a,b) => a.title - b.title);
