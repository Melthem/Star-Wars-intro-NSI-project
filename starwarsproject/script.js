var period = 'alors ?';
function allez() {
    period = document.getElementById('period');
    period = period.options[period.selectedIndex].value;
    window.location.href = 'sw.html';
    return false;
}

function final () {
        if (period === 'republic') {
        document.querySelector("h1").textContent = "REPUBLIIIIIQUE";
    }
}
