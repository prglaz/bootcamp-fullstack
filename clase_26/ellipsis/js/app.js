const paragraph = document.getElementById("id-parrafo4")
const buttonShow = document.getElementById("id-show")

function show() {
    // paragraph.setAttribute("class","")
    // paragraph.removeAttribute("class")
    paragraph.className = ""
    buttonShow.innerText = "ver menos"
    buttonShow.onclick = hide
;}

function hide() {
    paragraph.className = "parrafo4-short"
    buttonShow.innerText = "ver más"
    buttonShow.onclick = show
}

buttonShow.onclick = show
