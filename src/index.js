import initialPageLoad from "./pageLoad";
import menuPage from "./menu";
import contactPage from "./contact";

const navBar = document.createElement("div");
navBar.classList.add("nav-Bar");

const homeBtn = document.createElement("button");
homeBtn.innerText = "HOME";
navBar.appendChild(homeBtn);

const menuBtn = document.createElement("button");
menuBtn.innerText = "MENU";
menuBtn.type = "button";
navBar.appendChild(menuBtn);

const contactBtn = document.createElement("button");
contactBtn.innerText = "CONTACT";
navBar.appendChild(contactBtn);

content.appendChild(navBar);

initialPageLoad();

homeBtn.addEventListener("click", () => {
    removePage();
    initialPageLoad();
});

menuBtn.addEventListener("click", () => {
    removePage();
    menuPage();
});

contactBtn.addEventListener("click", () => {
    removePage();
    contactPage();
});

const removePage = () => {
    const pageContent = document.querySelector(".page-content");
    if (pageContent) {
        content.removeChild(pageContent);
    }
};