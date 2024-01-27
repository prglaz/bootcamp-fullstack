function elegirPersonaje() {
    personajeElegido = window.prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
    console.log("Personaje seleccionado: " + personajeElegido)

    let nombresCompletos = {
        "Mario": "Mario",
        "Luigi": "Luigi",
        "Bowser": "Bowser Morton Koopa",
        "Peach": "Princesa Peach Toadstool",
        "Yoshi": "T.Yoshisaur Munchakoopas",
        "Toad": "Toad",
        "Toadette": "Toadette",
        "Daisy": "Princesa Daisy"
    }

    elementoSpan = document.querySelector("span")

    elegido = nombresCompletos[personajeElegido]

    if (elegido) {
        elementoSpan.innerText = elegido

        elementoHTMLElegido = document.querySelector("#" + personajeElegido.toLowerCase())
        elementoHTMLElegido.setAttribute("title", "Presentado")
    } else {
        elementoSpan.innerText = "(desconocido)"
    }

    boton.style.setProperty("display","none")
}


boton = document.querySelector("#id-button")
console.log(boton)
boton.onclick = elegirPersonaje


