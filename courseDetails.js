const header = document.querySelector("#contentInnerWrapper > #contentInner > h1");
const bulletList = document.querySelector("form > ul.bulletList");
if (header != null && bulletList != null) {
    const rawH1 = header.textContent.trim();
    const firstNewLine = rawH1.indexOf('\n');
    const lvaName = rawH1.substring(rawH1.indexOf(' '));
    if (firstNewLine !== -1) {
        lvaName = lvaName.substring(0, firstNewLine);
    }
    lvaName = lvaName.trim();
    const lvaLink = "https://vowi.fsinf.at/LVA/" + lvaName.replace(" ", "_");
    const liElement = document.createElement("li");
    const linkElement = createLinkElement(lvaLink, lvaName);
    linkElement.innerText = "VoWi";
    liElement.appendChild(linkElement);
    bulletList.appendChild(liElement);
}
