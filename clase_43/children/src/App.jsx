// La siguiente línea de código, importa la hoja de estilos.
import "./app.scss";
import Despedida from "./Despedida";
import Saludo from "./Saludo";


const App = () => {
    return (
        <div>
            <Saludo nombre="Juan" apellido="Perez" edad="21"/>
            <Saludo nombre="Lorena" />
            <Despedida titulo="Titulo por Props 1">
                <div>
                    <h4>Titulo del children 1</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint commodi accusamus pariatur earum ad! Consequuntur tempore nobis possimus est a. Illum vitae nobis labore ex exercitationem animi voluptatem qui.</p>
                </div>
            </Despedida>
            <Despedida titulo="Titulo por Props 2">
                <div>
                    <h4>Titulo del children 2</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint commodi accusamus pariatur earum ad! Consequuntur tempore nobis possimus est a. Illum vitae nobis labore ex exercitationem animi voluptatem qui.</p>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quam excepturi praesentium doloribus nesciunt nemo quasi, quia omnis perspiciatis impedit debitis! Nostrum ex modi provident aliquid tempore atque dolores eveniet.</p>
                </div>
            </Despedida>
        </div>
    );
};

export default App;