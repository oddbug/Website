const posts = {
    "2026-03-10": "260310.html",
    "2026-02-18": "260218.html"
};

const calendarEl = document.getElementById("calendar");
let current = new Date();

function renderCalendar() {
    const year = current.getFullYear();
    const month = current.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const monthName = current.toLocaleString('default', { month: 'long' });

    let html = `
        <div class="cal-header">
            <button id="prev">⟵</button>
            <span>${monthName} ${year}</span>
            <button id="next">⟶</button>
        </div>

        <div class="cal-grid">
        <div>S</div><div>M</div><div>T</div><div>W</div>
            <div>T</div><div>F</div><div>S</div>
    `;

    for (let i = 0; i < firstDay; i++) html += `<div></div>`;

    for (let d = 1; d <= daysInMonth; d++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

        if (posts[dateStr]) {
            html += `<div class="has-post"><a href="${posts[dateStr]}">${d}</a></div>`;
        } else {
            html += `<div>${d}</div>`;
        }
    }

    html += `</div>`;
    calendarEl.innerHTML = html;

    document.getElementById("prev").onclick = () => {
        current.setMonth(current.getMonth() - 1);
        renderCalendar();
    };

    document.getElementById("next").onclick = () => {
        current.setMonth(current.getMonth() + 1);
        renderCalendar();
    };
}

renderCalendar();