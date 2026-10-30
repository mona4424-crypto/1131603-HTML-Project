document.addEventListener("DOMContentLoaded", () => {
    const toggleMenuButton = document.getElementById("toggle-menu");
    const sideMenu = document.querySelector(".side-menu");

    if (toggleMenuButton && sideMenu) {
        toggleMenuButton.addEventListener("click", () => {
            const opened = sideMenu.classList.toggle("open");
            toggleMenuButton.setAttribute("aria-expanded", String(opened));
            toggleMenuButton.setAttribute("aria-label", opened ? "關閉側邊選單" : "開啟側邊選單");
        });
    }

    document.querySelectorAll(".custom-form").forEach((form) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
        });
    });
});
