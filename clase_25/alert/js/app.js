const alert = document.querySelector(".alert");
const alertText = document.querySelector(".alert__text");
const showAlert = document.querySelector("#id-show-alert");
const hideAlert = document.querySelector(".alert__close");

function show() {
    alertText.innerHTML = "Todo salio OK"
    alert.setAttribute("class", "alert alert-error")
    setTimeout(() => {
        alert.setAttribute("class", "alert alert");
    }, 2000);
    
}

function hide() {
    alert.setAttribute("class", "alert")
}

showAlert.onclick = show;
hideAlert.onclick = hide;


/* ************************************************ */





