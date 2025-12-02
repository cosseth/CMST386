document.addEventListener("DOMContentLoaded", function() {
    function updateDateTime() {
        const now = new Date();

        const options = {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };

        const formatted = now.toLocaleString('en-US', options);

        const dateSpan = document.getElementById('current-date-time');
        if (dateSpan) {
            dateSpan.textContent = `Current Date & Time: ${formatted}`;
        }
    }

    updateDateTime(); // run immediately
    setInterval(updateDateTime, 1000); // update every second
});
