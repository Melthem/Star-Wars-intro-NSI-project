function validation(id, subject) {
    let answer = document.getElementById(id);
    answer = answer.options[answer.selectedIndex].value;
    // ok we need to save this in cookie
    document.cookie = subject+"="+answer+"; path=/; SameSite=Lax";
    let cname = subject
    //on recupère la value de "reponse"
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function goToII() {
    window.location.href = 'II.html';
    return "";
}

function goToFinal() {
    window.location.href = "sw.html";
    return "";
}

function lastReponse() {
    console.log(document.cookie);
    return "";
}
