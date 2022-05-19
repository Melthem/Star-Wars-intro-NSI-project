function validation(id, subject) {
    // La fonction prends la réponse choisie et la sauvegarde en tant que cookie, afin de la réutiliser plus tard
    let answer = document.getElementById(id);
    answer = answer.options[answer.selectedIndex].value;
    document.cookie = subject+"="+answer+"; path=/; SameSite=Lax";
    let cname = subject
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

function changePage(page) {
    // La fonction envoie tout simplement l'utilisateur sur la page donnée en argument
    window.location.href = page;
    return "";
}

