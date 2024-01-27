class Persona {
    #nombre; //con el # adelante de la variable se hace privada
    #apellido;
    #edad;

    constructor (nombre, apellido, edad) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#edad = edad;
    }

    get nombre(){
        return this.#nombre;
    }
    get apellido() {
        return this.#apellido;
    }
    get edad() {
        return this.#edad;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }
    set apellido(apellido) {
        this.#apellido = apellido;
    }
    set edad(edad) {
        this.#edad = edad;
    }

    saludar() { // si le pongo el #, lo convierto en funcion/metodo privado
        console.log("Hola");
    }
}

const persona1 = new Persona("Juan", "Perez", 21);
const persona2 = new Persona("Lorena", "Perez", 25);

console.log(persona1);
console.log(persona2.nombre);

persona2.nombre = "Romina";
console.log(persona2.nombre);


class Estudiante extends Persona {
    #carrera;

    constructor(nombre, apellido, edad, carrera) {
        super(nombre, apellido, edad);
        this.#carrera = carrera;
    }

    get carrera() {
        return this.#carrera;
    }

    set carrera(carrera) {
        this.#carrera = carrera;
    }

    estudiar() {
        console.log("estudiando");
    }

}

const estudiante1 = new Estudiante("Jose", "Perez", 22, "Programacion");
console.log(estudiante1);
estudiante1.saludar();
estudiante1.estudiar();


