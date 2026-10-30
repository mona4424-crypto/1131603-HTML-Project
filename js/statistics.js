document.addEventListener("DOMContentLoaded", () => {
    if (typeof Chart === "undefined") return;
    const labels = ["手機", "錢包", "學生證", "鑰匙", "其他"];
    const values = [30, 20, 10, 25, 15];
    const colors = ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0", "#9966ff"];
    const barCanvas = document.getElementById("lostItemsBar");
    if (barCanvas) new Chart(barCanvas, {
        type: "bar",
        data: { labels, datasets: [{ label: "遺失物數量", data: values, backgroundColor: colors, borderWidth: 0 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true, ticks: { stepSize: 5 }, grid: { color: "#dddddd" } }, x: { grid: { color: "#dddddd" } } } }
    });
    const pieCanvas = document.getElementById("lostItemsPie");
    if (pieCanvas) new Chart(pieCanvas, {
        type: "pie",
        data: { labels, datasets: [{ label: "遺失物比例", data: values, backgroundColor: colors, borderColor: "#fff", borderWidth: 2 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "top" } } }
    });
});
