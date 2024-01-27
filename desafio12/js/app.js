const main = document.getElementById("main");
const nav = {
    home: document.getElementById("home"),
    searchfilm: document.getElementById("searchfilm"),
    filterfilm: document.getElementById("filterfilm"),
};

const peliculas = [
    { "titulo": "Rocky", "descripcion": "Rocky Balboa is a struggling boxer trying to make the big time, working as a debt collector for a pittance. When heavyweight champion Apollo Creed visits Philadelphia, his managers want to set up an exhibition match between Creed and a struggling boxer, touting the fight as a chance for a 'nobody' to become a 'somebody'. The match is supposed to be easily won by Creed, but someone forgot to tell Rocky, who sees this as his only shot at the big time", "anioLanzamiento": "1976" },
    { "titulo": "Terminator", "descripcion": "Sent back from a dystopian 2029--where the cold machines have conquered the entire world--to 1984 Los Angeles, the indestructible cyborg-assassin known as the 'Terminator' commences his deadly mission to kill humankind's most important woman: the unsuspecting Sarah Connor. However, from the same war-torn post-apocalyptic future comes a battle-scarred defender--Kyle Reese, a brave soldier of the human Resistance Army--bent on stopping the cybernetic killer from eliminating the world's last hope. But, the Terminator has no feelings, he doesn't sleep, and above all, he won't stop until he carries out his grim task. Does our future lie in our past?", "anioLanzamiento": "1984" },
    { "titulo": "Duro de Matar", "descripcion": "NYPD cop John McClane goes on a Christmas vacation to visit his wife Holly in Los Angeles where she works for the Nakatomi Corporation. While they are at the Nakatomi headquarters for a Christmas party, a group of robbers led by Hans Gruber take control of the building and hold everyone hostage, with the exception of John, while they plan to perform a lucrative heist. Unable to escape and with no immediate police response, John is forced to take matters into his own hands", "anioLanzamiento": "1988" },
    { "titulo": "Jurassic Park", "descripcion": "Huge advancements in scientific technology have enabled a mogul to create an island full of living dinosaurs. John Hammond has invited four individuals, along with his two grandchildren, to join him at Jurassic Park. But will everything go according to plan? A park employee attempts to steal dinosaur embryos, critical security systems are shut down and it now becomes a race for survival with dinosaurs roaming freely over the island", "anioLanzamiento": "1993" },
    { "titulo": "Gladiador", "descripcion": "Maximus is a powerful Roman general, loved by the people and the aging Emperor, Marcus Aurelius. Before his death, the Emperor chooses Maximus to be his heir over his own son, Commodus, and a power struggle leaves Maximus and his family condemned to death. The powerful general is unable to save his family, and his loss of will allows him to get captured and put into the Gladiator games until he dies. The only desire that fuels him now is the chance to rise to the top so that he will be able to look into the eyes of the man who will feel his revenge", "anioLanzamiento": "2000" },
    { "titulo": "Star Wars: A New Hope", "descripcion": "A young farmer named Luke joins a mission to rescue Princess Leia from the clutches of the evil Darth Vader. With the help of a wise old mentor named Obi-Wan Kenobi, a smuggler named Han Solo, and a droid duo, R2-D2 and C-3PO, they set out on an adventure across galaxies to deliver secret plans that could save the galaxy. They face thrilling battles and meet strange creatures, all while striving to defeat the oppressive Empire and its planet-destroying weapon. As they work together, Luke discovers his own hidden potential and learns about the power of the Force. The movie is a tale of heroes, villains, and the struggle between good and evil in a faraway galaxy", "anioLanzamiento": "1977" },
];

window.onload = () => {
    refreshHTML();
};

function refreshHTML() {
    let currentPageName = window.location.hash.replace("#", "");

    if (!currentPageName) {
        currentPageName = "home";
    }

    getContentHTML(currentPageName);
}

const links = [nav.home, nav.searchfilm, nav.filterfilm];

for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.addEventListener('click', (e) => {
        getContentHTML(e.target.id);
    });
}

// obtengo el contenido del main de cada página
function getContentHTML(pageName) {
    if (!pageName) {
        pageName = "home";
    }

    const filepath = "./" + pageName + ".html";
    const xhr = new XMLHttpRequest();

    xhr.open("get", filepath);

    xhr.onload = () => {
        if (xhr.status === 200) {
            setActiveLink(links, nav[pageName]);
            main.innerHTML = xhr.response;
            if (pageName == "home") {
                cargarPeliculas();
                const btnAgregarPelicula = document.getElementById("btn-agregar_pelicula");
                btnAgregarPelicula.addEventListener('click',() => {
                    agregarPelicula(document.getElementById("titulo-nueva-pelicula").value, 
                                    document.getElementById("desc-nueva-pelicula").value, 
                                    document.getElementById("anio-nueva-pelicula").value);
                });

            } else if (pageName == "searchfilm"){
                const btnSearchFilm = document.getElementById("btn-search-film");
                btnSearchFilm.addEventListener('click', () => {
                    buscarPelicula(document.getElementById("searchFilmTitle").value);
                });
            } else if (pageName == "filterfilm"){
                const btnFilterFilm = document.getElementById("btn-filter-film");
                btnFilterFilm.addEventListener('click', () => {
                    filtrarPeliculas(document.getElementById("searchFilmYear").value);
                });
            }
        }
    };

    xhr.send();

}

function setActiveLink(links, linkActive) {
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.className = "";
    }

    linkActive.className = "link-active";
}


const cargarPeliculas = () => {
    const listadoPeliculas = window.parent.document.getElementById("filmlist");
    listadoPeliculas.innerHTML = "";

    peliculas.forEach((e, i) => {
        const tituloPelicula = document.createElement('p');
        tituloPelicula.innerText = `TITULO: ${e.titulo.toUpperCase()}`;
        const descPelicula = document.createElement('p');
        descPelicula.innerText = `DESCRIPCIÓN: ${e.descripcion}`;
        const anioLanz = document.createElement('p');
        anioLanz.innerText = `AÑO DE LANZAMIENTO: ${e.anioLanzamiento}`;

        const divPelicula = document.createElement("div");
        divPelicula.style.margin = "3vw";
        divPelicula.append(tituloPelicula);
        divPelicula.append(descPelicula);
        divPelicula.append(anioLanz);

        listadoPeliculas.append(divPelicula);
    });
}

function buscarPelicula(nombrePelicula) {
    const listadoPeliculas = window.parent.document.getElementById("filmlist");
    listadoPeliculas.innerHTML = "";

    peliculas.forEach((e, i) => {
        if (e.titulo.toUpperCase().includes(nombrePelicula.toUpperCase())) {
            const tituloPelicula = document.createElement('p');
        tituloPelicula.innerText = `TITULO: ${e.titulo.toUpperCase()}`;
        const descPelicula = document.createElement('p');
        descPelicula.innerText = `DESCRIPCIÓN: ${e.descripcion}`;
        const anioLanz = document.createElement('p');
        anioLanz.innerText = `AÑO DE LANZAMIENTO: ${e.anioLanzamiento}`;

        const divPelicula = document.createElement("div");
        divPelicula.style.margin = "3vw";
        divPelicula.append(tituloPelicula);
        divPelicula.append(descPelicula);
        divPelicula.append(anioLanz);

        listadoPeliculas.append(divPelicula);
        }
    });
}

function filtrarPeliculas(anio) {
    const listadoPeliculas = window.parent.document.getElementById("filmlist");
    listadoPeliculas.innerHTML = "";

    peliculas.forEach((e, i) => {
        if (e.anioLanzamiento == anio) {
            const tituloPelicula = document.createElement('p');
        tituloPelicula.innerText = `TITULO: ${e.titulo.toUpperCase()}`;
        const descPelicula = document.createElement('p');
        descPelicula.innerText = `DESCRIPCIÓN: ${e.descripcion}`;
        const anioLanz = document.createElement('p');
        anioLanz.innerText = `AÑO DE LANZAMIENTO: ${e.anioLanzamiento}`;

        const divPelicula = document.createElement("div");
        divPelicula.style.margin = "3vw";
        divPelicula.append(tituloPelicula);
        divPelicula.append(descPelicula);
        divPelicula.append(anioLanz);

        listadoPeliculas.append(divPelicula);
        }
    });
}

const agregarPelicula = (titulo, descripcion, anio) => {
    peliculas.push({titulo: titulo, descripcion: descripcion, anioLanzamiento: anio});
    cargarPeliculas();
}




const btnBack = document.getElementById("back");
const btnForward = document.getElementById("forward");

btnBack.addEventListener('click', () => {
    history.back();
});

btnForward.addEventListener('click', () => {
    history.forward();
});

window.onhashchange = (e) => {
    let pageName = e.currentTarget.location.hash.replace("#", "");
    getContentHTML(pageName);
};
