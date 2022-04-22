window.addEventListener("DOMContentLoaded", init);

function init() {
    loadData();
}
async function loadData() {
    const response = await fetch(
        "https://carolinethostrup.dk/Theme09-Content/Silfen-WP/wp-json/wp/v2/bag?per_page=20"
    );
    console.log("response2", response);
    const bagData = await response.json();
    displaybag(bagData);
}
async function displaybag(userJSON) {
    userJSON.forEach((bags) => {
        const template = document.querySelector("#BagProductTemplate").content;
        const copy = template.cloneNode(true);
        copy.querySelector(".product-name").textContent = bags.title.rendered;
        copy.querySelector(".product-price").textContent = " DKK " + bags.price;
        copy.querySelector(".color1").style.backgroundColor = bags.color1;
        copy.querySelector(".color2").style.backgroundColor = bags.color2;
        copy.querySelector(".color3").style.backgroundColor = bags.color3;
        copy.querySelector(".color-name1").textContent = bags.colorname1;
        copy.querySelector(".product-img1").src = bags.image1.guid;
        copy.querySelector(".product-img2").src = bags.image2.guid;
        const parent = document.querySelector("main");
        parent.appendChild(copy);
    });
}