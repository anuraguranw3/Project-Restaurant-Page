// MENU

function menuPage() {
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
    const ul = document.createElement("ul");

    // Item 1
    const item1 = document.createElement("li");
    item1.setAttribute("id", "item1");
    const itemName1 = document.createElement("h2");
    itemName1.innerText = "Samosa";
    item1.appendChild(itemName1);
    const itemAddr1 = document.createElement("img");
    itemAddr1.src = "imgs/570-5708273_samosa-tweo-samosa-hd-hd-png-download-removebg-preview.png";
    item1.appendChild(itemAddr1);
    const itemPrice1 = document.createElement("h4");
    itemPrice1.innerText = "₹ 20";
    item1.appendChild(itemPrice1);

    // Item 2
    const item2 = document.createElement("li");
    item2.setAttribute("id", "item2");
    const itemName2 = document.createElement("h2");
    itemName2.innerText = "Masala Dosa";
    item2.appendChild(itemName2);
    const itemAddr2 = document.createElement("img");
    itemAddr2.src = "imgs/Masala_dosa-removebg-preview.png";
    item2.appendChild(itemAddr2);
    const itemPrice2 = document.createElement("h4");
    itemPrice2.innerText = "₹ 100";
    item2.appendChild(itemPrice2);

    // Item 3
    const item3 = document.createElement("li");
    item3.setAttribute("id", "item3");
    const itemName3 = document.createElement("h2");
    itemName3.innerText = "Desserts";
    item3.appendChild(itemName3);
    const itemAddr3 = document.createElement("img");
    itemAddr3.src = "imgs/dessert-image6-1536x1026-removebg-preview.png";
    item3.appendChild(itemAddr3);
    const itemPrice3 = document.createElement("h4");
    itemPrice3.innerText = "Free";
    item3.appendChild(itemPrice3);

    ul.appendChild(item1);
    ul.appendChild(item2);
    ul.appendChild(item3);
    pageContent.appendChild(ul);
    content.appendChild(pageContent);
}

// const itemName = (name) => {
//     let x = createElement("h1");
//     h1.innerText = name;
// }

export default menuPage;