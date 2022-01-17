let products = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : [
      {
        title: "Chanel Grand Extrait",
        category: "Women",
        price: 2975.0,
        img: "https://albuksha.com/wp-content/uploads/2021/02/3145891255300.jpg",
      },
      {
        title: "Valentino, Born In Roma",
        category: "Men",
        price: 1810.0,
        img: "https://www.valentino.com/variants/images/11813139151084035/R/w400.jpg",
      },
      {
        title: "Hermès 24 Fauberg",
        category: "Women",
        price: 10239.99,
        img: "https://cdnx.jumpseller.com/jose-candido-perfume-conc/image/11894478/resize/480/480?1601224564",
      },
      {
        title: "Dior Homme",
        category: "Men",
        price: 3945.49,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF58oKqdV2qG5c_DdWZeGa-yXmXOrMbbGUFqMER1keIt36dF8q7vpTg-EykS8QnZrChng&usqp=CAU",
      },
      {
        title: "Versace, Bright Crystal",
        category: "Women",
        price: 975.95,
        img: "https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwa631772a/rollover/90_R510030-R050MLS_RNUL_22_BrightCrystal50ml-Fragrances-versace-online-store_3_21.jpg?sw=450&sh=632&sm=fit&sfrm=jpg",
      },
      {
        title: "Chanel, Bleu de Chanel",
        category: "Men",
        price: 2810.99,
        img: "https://hpcismart.com/images/website/ManChemNews/DIR_229/F_111410.jpg",
      },
      {
        title: "Yves Saint-Laurent",
        category: "Men",
        price: 1220.0,
        img: "https://media.vogue.fr/photos/5e42ddbb9acaaa00085eb6c7/master/w_960,c_limit/Y-Live-eau-de-toilette-inte.jpg",
      },
      {
        title: "Burberry Touch Perfume",
        category: "Women",
        price: 695.89,
        img: "https://img.fragrancex.com/images/products/parent/medium/801w.jpg",
      },
    ];

let cart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

// READ
function readProducts(products) {
  document.querySelector("#badge").innerHTML = cart.length;
  document.querySelector("#products").innerHTML = "";
  products.forEach((product, position) => {
    document.querySelector("#products").innerHTML += `
      <div class="card">
        <img src="${product.img}" class="card-img-top" alt="${product.title}">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">R${product.price}</p>
          <p>Qty:</p>

          <input type="number" min=1 value="1" id="addToCart${position}" style="width: 150px;">
          <button type="button" class="btn btn-success" onclick="addToCartProduct(${position})" >
          <i class="material-icons">add_shopping_cart</i>
          </button>

          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editProduct${position}" >
          <i class="material-icons">edit</i>
          </button>
          <button type="button" class="btn btn-danger" onclick="deleteProduct(${position})" >
            <i class="material-icons">delete</i>

          </button>

           
              <div
                class="modal fade"
                id="editProduct${position}"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Edit ${product.title}
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="mb-3">
                        <label for="editTitle${position}" class="form-label">Title</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editTitle${position}"
                          id="editTitle${position}"
                          value="${product.title}"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="editCategory${position}" class="form-label">Category</label>
                        <select
                          class="form-select"
                          name="editCategory${position}"
                          id="editCategory${position}"
                        >
                          <option value="Fruit">Men</option>
                          <option value="Vegetables">Women</option>
                          
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="editPrice${position}" class="form-label">Price</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editPrice${position}"
                          id="editPrice${position}"
                          value="${product.price}"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="editImg${position}" class="form-label">Image URL</label>
                        <input
                          class="form-control"
                          type="text"
                          name="editImg${position}"
                          id="editImg${position}"
                          value="${product.img}"
                        />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        onclick="updateProduct(${position})"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    `;
  });
}

readProducts(products);

// CREATE
function createProduct() {
  let title = document.querySelector("#addTitle").value;
  let category = document.querySelector("#addCategory").value;
  let price = document.querySelector("#addPrice").value;
  let img = document.querySelector("#addImg").value;

  try {
    if (!title || !price || !img) throw new Error("Please fill in all fields");
    products.push({
      title,
      category,
      price,
      img,
    });
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  } catch (err) {
    alert(err);
  }
}

// UPDATE
function updateProduct(position) {
  let title = document.querySelector(`#editTitle${position}`).value;
  let category = document.querySelector(`#editCategory${position}`).value;
  let price = document.querySelector(`#editPrice${position}`).value;
  let img = document.querySelector(`#editImg${position}`).value;

  try {
    if (!title || !price || !img) throw new Error("Please fill in all fields");
    products[position] = {
      title,
      category,
      price,
      img,
    };
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  } catch (err) {
    alert(err);
  }
}

// DELETE
function deleteProduct(position) {
  let confirmation = confirm(
    "Are you sure you want to delete the selected product?"
  );

  if (confirmation) {
    products.splice(position, 1);
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  }
}
// ADD TO CART
function addToCartProduct(position) {
  let qty = document.querySelector(`#addToCart${position}`).value;
  alert(`Added ${qty} to cart`);

  //   let qty = document.querySelector(`#addToCart${position}`).value;
  cart.push({ ...products[position], qty });
  document.querySelector("#badge").innerHTML = cart.length;
  localStorage.setItem("cart", JSON.stringify(cart));
}



// SORT BY CATEGORY
function sortCategory() {
  let category = document.querySelector("#sortCategory").value;

  if (category == "All") {
    return readProducts(products);
  }

  let foundProducts = products.filter((product) => {
    return product.category == category;
  });

  readProducts(foundProducts);
  console.log(foundProducts);


// SORT BY NAME

function sortName() {
  let direction = document.querySelector("#sortName").value;

  let sortedProducts = products.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  if (direction == "descending") sortedProducts.reverse();
  console.log(sortedProducts);
  readProducts(products);
}}
// SORT BY PRICE

function sortPrice() {
  let direction = document.querySelector("#sortPrice").value;

  let sortedProducts = products.sort((a, b) => a.price - b.price);

  console.log(sortedProducts);

  if (direction == "descending") sortedProducts.reverse();
  readProducts(sortedProducts);
}
