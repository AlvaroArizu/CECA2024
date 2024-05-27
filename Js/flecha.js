function toggleContent(icon) {
    var content = icon.parentElement.nextElementSibling;
    content.classList.toggle("hidden");
    icon.classList.toggle("rotate");
}


