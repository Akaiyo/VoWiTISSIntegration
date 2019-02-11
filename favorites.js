function createImgElement() {
    const imgObject = document.createElement("img");
    imgObject.src = "https://vowi.fsinf.at/favicon.ico";
    imgObject.style.width = "16px";
    imgObject.style.height = "16px";
    return imgObject;
}
const linkDivs = document.querySelectorAll("td.favoritesLinks");
linkDivs.forEach(function (linkDiv) {
    if (linkDiv.children.length !== 0) {
        const tr = linkDiv.parentElement;
        const titleTd = tr.children[1];
        const titleA = titleTd.firstChild;
        const lvaName = titleA.textContent.trim();
        const lvaLink = "https://vowi.fsinf.at/LVA/" + lvaName.replace(" ", "_");
        const linkElement = createLinkElement(lvaLink, lvaName);
        linkElement.appendChild(createImgElement());
        linkDiv.appendChild(linkElement);
    }
});
