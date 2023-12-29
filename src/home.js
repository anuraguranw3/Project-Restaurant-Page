// home page

const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const hero = document.createElement("div");
    hero.classList.add("hero");

    const h1 = document.createElement("h1");
    h1.innerText = "Welcome to the BARATIE";
    // pageContent.appendChild(h1);
    hero.appendChild(h1);

    const p1 = document.createElement("p");
    p1.innerText = "The Baratie is an ocean-going restaurant run by Zeff. It is located in the Sambas Region of the East Blue, close to the entrance of the Grand Line.";
    // pageContent.appendChild(p1);
    hero.appendChild(p1);

    const image = document.createElement("img");
    image.src = "imgs/2434111-473592_sanji_time_skip_1.png";
    image.height = "500";

    pageContent.appendChild(hero);
    pageContent.appendChild(image);
    content.append(pageContent);
};

export default createRestaurantHomePage;