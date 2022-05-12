var select;

function functiontest(select) {
    select = document.getElementById('period');
    select = select.options[select.selectedIndex].value;

    window.location.href = 'II.html';
    return false;

}

function test(select) {
    console.log(select)
}
