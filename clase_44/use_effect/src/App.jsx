// La siguiente línea de código, importa la hoja de estilos.
import { useEffect, useState } from "react";
import "./app.scss";

const App = () => {
    const [ count, setCount ] = useState();

    useEffect(() => {
        setCount(0);
        console.log("soy el useEffect");
    }, []);

    const handleOnClickIncrement = () => {
        setCount(count + 1);
    };

    const handleOnClickDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }

    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleOnClickIncrement}>Incrementar</button>
            <button onClick={handleOnClickDecrement}>Decrementar</button>
        </div>
    );
};

export default App;