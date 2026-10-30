document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("searchInput");
    const form = document.getElementById("searchForm");
    const buttons = [...document.querySelectorAll(".category-button")];
    const cards = [...document.querySelectorAll(".product-card")];
    const noResults = document.getElementById("noResults");
    let selectedCategory = "all";
    function updateResults() {
        const keyword = input.value.trim().toLowerCase();
        let visibleCount = 0;
        cards.forEach((card) => {
            const categoryMatches = selectedCategory === "all" || card.dataset.category === selectedCategory;
            const visible = categoryMatches && card.textContent.toLowerCase().includes(keyword);
            card.hidden = !visible;
            if (visible) visibleCount += 1;
        });
        noResults.hidden = visibleCount > 0;
    }
    form.addEventListener("submit", (event) => { event.preventDefault(); updateResults(); });
    input.addEventListener("input", updateResults);
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            selectedCategory = button.dataset.filter;
            buttons.forEach((item) => item.classList.toggle("active", item === button));
            updateResults();
        });
    });
});
