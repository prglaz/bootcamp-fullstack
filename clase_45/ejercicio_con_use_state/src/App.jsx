import { useState } from "react";
import "./app.scss";

const App = () => {
    const [colors, setColors] = useState([
        { id: 1, name: "azul" },
        { id: 2, name: "gris" },
        { id: 3, name: "blanco" },
    ]);
    const [inputNewColor, setInputNewColor] = useState("");

    const generateId = () => {
        let maxId = 0;

        colors.forEach((color) => {
            if (color.id > maxId) {
                maxId = color.id;
            }
        });
        return maxId + 1;
    };

    const handleOnChangeNewColor = (e) => {
        setInputNewColor(e.target.value);
    };

    const handleOnClickAddColor = () => {
        if (inputNewColor.trim().length > 0) {
            const newColor = { id: generateId(), name: inputNewColor };
            setColors([...colors, newColor]);
            setInputNewColor("");
        }
    };

    const handleOnChangeModifyColor = (id, value) => {
        const index = colors.findIndex((color) => color.id === id);

        const cloneColors = [...colors];

        cloneColors[index].name = value;
        setColors(cloneColors);

    };

    const handleOnClickDeleteColor = (id) => {
        const index = colors.findIndex((color) => color.id === id);

        const currentColors = colors.toSpliced(index, 1);

        setColors(currentColors);

    };




    // const handleOnClickSave = () => {
    //     // Bloque optimizado
    //     const nuevosColores = [...colores, colorRef.current];
    //     setColores(nuevosColores);

    //     // Bloque alternativo
    //     // const nuevosColores = colores.map((color) => color);
    //     // nuevosColores.push(colorRef.current);
    //     // setColores(nuevosColores);
    // };

    // const handleOnClickModify = (color) => {
    //     colorRef.current = color;
    //     setColor(colorRef.current);
    //     // const coloresConModificacion = colores.toSpliced(index, 1, color);
    //     // setColores(coloresConModificacion);
    // };

    // const handleOnClickDelete = (index) => {
    //     const coloresConEliminacion = colores.toSpliced(index, 1);
    //     setColores(coloresConEliminacion);
    // };

    return (
        <div>
            <div>
                <label htmlFor="color">Nuevo Color </label>
                <input
                    type="text"
                    id="color"
                    value={inputNewColor}
                    onChange={(e) => handleOnChangeNewColor(e)} />
                <button onClick={handleOnClickAddColor}>Agregar Color</button>
            </div>
            <div>
                <ul>
                    {colors.map((color) => (
                        <li key={color.id}>
                            <input
                                type="text"
                                value={color.name}
                                onChange={(e) => handleOnChangeModifyColor(color.id, e.target.value)} />
                            <button onClick={() => handleOnClickDeleteColor(color.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;