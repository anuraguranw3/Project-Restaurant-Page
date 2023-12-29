// CONTACT

function contactPage() {
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const myName = document.createElement("h3");
    myName.innerText = "Lost Zoro";
    contact.appendChild(myName);

    const myEmail = document.createElement("h4");
    myEmail.innerText = "don'tcallmeionlylistentomycaptain.meetme@hell.in";
    contact.appendChild(myEmail);

    const myNumber = document.createElement("h4");
    myNumber.innerText = "333,333,333,3";
    contact.appendChild(myNumber);

    // pageContent.appendChild(pageContent);
    pageContent.appendChild(contact);
    content.appendChild(pageContent);
}

export default contactPage;