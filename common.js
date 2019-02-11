function createLinkElement(link, title) {
    const linkElement = document.createElement("a");
    linkElement.href = link;
    linkElement.title = title;
    linkElement.target = "_blank";
    linkElement.rel = "noopener noreferrer";
    return linkElement;
}
