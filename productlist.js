// COPIED CODE FROM PREVIOUS PROJECT - BEWARE :)

const urlParams = new URLSearchParams(window.location.search);

const url = "DATABASE URL GOES HERE";

const products = {
    headers: {
        "x-apikey": "API KEY GOES HERE",
    },
};

fetch(url, products)
    .then((res) => res.json())
    .then((data) => handleProductList(data));

function handleProductList(data) {
    console.log(data);
    data.forEach(showProduct);
}

function showProduct(product) {
    // grab template
    const template = document.querySelector("template").content;

    // clone template
    const myClone = template.cloneNode(true);

    // change content
    myClone.querySelector(".productName").textContent = product.productname;
    myClone.querySelector(
        "img"
    ).src = `http://carolinethostrup.dk/CustomiseMeImages/${product.imageurl}`;
    myClone.querySelector(".price").textContent = `DKK ${product.price},-`;

    myClone.querySelector("img").alt = `${product.name}`;
    myClone
        .querySelector(".productButton")
        .setAttribute("href", `productPage.html?_id=${product._id}`);

    // select parent & append
    const parent = document.querySelector("main");
    parent.appendChild(myClone);
}