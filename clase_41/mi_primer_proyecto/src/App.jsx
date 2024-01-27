import "./app.scss";

function App() {
    class Persona {
        nombre;

        constructor(nombre) {
            this.nombre = nombre;
        }
    }

    const persona = new Persona("Juan");

    return (
        <div className="title">
            <h1>Hola Mundo {persona.nombre}</h1>
        </div>
    );
}

export default App;