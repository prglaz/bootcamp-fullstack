class Database {
    #username;
    #password;

    static instancia; // es un atributo de clase, no de objeto

    constructor(username, password) {
        if(Database.instancia) {
            throw new Error("No se puede crear una instancia extra de esta clase");
        }

        Database.instancia = this; // usa el nombre de la clase para llamar al atributo estatico
        this.#username;
        this.#password;
    }

    get username(){
        return this.#username;
    }
}


const database1 = new Database("juan", "123456");
console.log(database1.username)

const database2 = new Database("pedro", "121234");





