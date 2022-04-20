// COPIED CODE FROM PREVIOUS PROJECT - BEWARE :)

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");

const url = "DATABASE URL GOES HERE" + id;

const products = {
  headers: {
    "x-apikey": "API KEY GOES HERE",
  },
};

fetch(url, products)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  // change content
  document.querySelector(
    ".productImage"
  ).src = `http://carolinethostrup.dk/CustomiseMeImages/${product.imageurl}`;
  document.querySelector(".productImage").alt = product.productname;
  document.querySelector(".productName").textContent = product.productname;
  document.querySelector(
    ".productPrice"
  ).textContent = `DKK ${product.price},-`;

  // change meta title
  document.querySelector(
    "head title"
  ).textContent = `SILFEN | ${product.productname}`;
}
