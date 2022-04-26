// COPIED CODE FROM PREVIOUS PROJECT - BEWARE :)
/* 
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url =
    "https://carolinethostrup.dk/Theme09-Content/Silfen-WP/wp-json/wp/v2/bag/" +
    id; */
/* 
const products = {
  headers: {
    "x-apikey": "API KEY GOES HERE",
  },
}; */

/* fetch(url, bags)
    .then((res) => res.json())
    .then((data) => displaybag(data)); */
/* 
function displaybag(product) {
    console.log(product);
 */
// change content
/*   document.querySelector(
    ".productImage"
  ).src = `http://carolinethostrup.dk/CustomiseMeImages/${product.imageurl}`;
  document.querySelector(".productImage").alt = product.productname;
  document.querySelector(".productName").textContent = product.productname;
  document.querySelector(
    ".productPrice"
  ).textContent = `DKK ${product.price},-`;
 */
// change meta title
/*     document.querySelector(
              "head title"
          ).textContent = `SILFEN | ${product.productname}`; */

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url =
    "https://carolinethostrup.dk/Theme09-Content/Silfen-WP/wp-json/wp/v2/bag/" +
    id;

fetch(url)
    .then((res) => res.json())
    .then((data) => displaybag(data));

function displaybag(bags) {
    console.log(bags);

    document.querySelector(".product-title").textContent = bags.title.rendered;
    document.querySelector(".product-detail p").textContent = bags.description;
    document.querySelector(".image1").src = bags.image1.guid;
    document.querySelector(".image2").src = bags.image2.guid;
    document.querySelector(".image3").src = bags.image3.guid;
    document.querySelector(".image4").src = bags.image2.guid;
    document.querySelector(".image5").src = bags.image3.guid;

    document.querySelector(".color1").style.backgroundColor = bags.color1;
    document.querySelector(".color2").style.backgroundColor = bags.color2;
    document.querySelector(".color3").style.backgroundColor = bags.color3;
    document.querySelector(".product-material").textContent = bags.materials;
    document.querySelector(".product-size").textContent = bags.size;
    document.querySelector(".product-strap-info").textContent = bags.straplength;

    document.querySelector(".product-price").textContent = " DKK " + bags.price;
    /*   document.querySelector(
                                                                                                                                                        ".product-img"
                                                                                                                                                    ).src = `http://carolinethostrup.dk/Theme09-Content/Silfen-WP/wp-content/uploads/2022/04/${bags.id}.webp`; */
}

const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener("click", (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage() {
    const displayWidth = document.querySelector(
        ".img-showcase img:first-child"
    ).clientWidth;

    document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener("resize", slideImage);

function displayMore() {
    let checkBox = document.getElementById("myCheck");
    let text = document.getElementById("product-details");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function displayMore2() {
    let checkBox = document.getElementById("myCheck2");
    let text = document.getElementById("delivery-info");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}