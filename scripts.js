// Toggle the hamburger menu
const hamburger = document.getElementById('hamburger-menu');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu-visible');
});

// Toggle the language selection
document.getElementById("language-selector").addEventListener("change", function () {
    const language = this.value;
    window.location.href = `index-${language}.html`; // Redirect to the corresponding language version
});
