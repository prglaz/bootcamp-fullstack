import { useRef, useState } from "react";
import "./app.scss";

const App = () => {
    const colorRef = useRef();
    const [color, setColor] = useState();
    const [colores, setColores] = useState(["Azul", "Rojo", "Verde"]);

    const handleOnChangeColor = (color) => {
        colorRef.current = color;
        // console.log(colorRef);
    };

    const handleOnClickSave = () => {
        const nuevosColores = [...colores, colorRef.current];
        setColores(nuevosColores);
        // console.log(colores);
    };

    const handleOnClickModify = (color, index) => {
        colorRef.current = color;
        setColor(colorRef.current);
        const coloresConModificacion = colores.toSpliced(index, 1, color);
        setColores(coloresConModificacion);
    };

    const handleOnClickDelete = (index) => {
        const coloresConEliminacion = colores.toSpliced(index, 1);
        setColores(coloresConEliminacion);
    };

    return (
        <>
            <div>
                <label htmlFor="color">Color</label>
                <input type="text" id="color" onChange={(e) => handleOnChangeColor(e.target.value)} value={color} />
                {/* <p>{colorRef.current}</p> */}
                <button onClick={handleOnClickSave}>Guardar</button>
            </div>
            <div>
                <ul>
                    {colores.map((color, index) => (
                        <li key={index}>
                            {color}
                            <button onClick={() => handleOnClickModify(color, index)}>Modificar</button>
                            <button onClick={() => handleOnClickDelete(index)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default App;