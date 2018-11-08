const iframe = document.getElementById("iframe");
const menuButton = document.getElementById("menu-button");
const menuContentStyle = document.getElementById("hamburger-content").style;
const menuItems = document.querySelectorAll("#list-item");

console.log(menuItems);

iframe.width = window.innerWidth;
iframe.height = window.innerHeight;

menuContentStyle.display = "none";

menuButton.addEventListener('click', () => {    
    if(menuContentStyle.display === "none")
        menuContentStyle.display = "block";
    else if(menuContentStyle.display === "block")
        menuContentStyle.display = "none";
});

function changeIframe(a) {
    iframe.src=a;
}