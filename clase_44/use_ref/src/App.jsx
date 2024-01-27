// La siguiente línea de código, importa la hoja de estilos.
import { useRef, useState } from "react";
import "./app.scss";

const App = () => {
    const countRef = useRef(0);
    const [ count, setCount ] = useState(countRef.current);

    const handleOnClickIncrement = () => {
        // setCount(count + 1);
        countRef.current += 1;
        console.log(countRef);

        if (countRef.current >= 5) {
            setCount(countRef.current);
        }
    };

    const handleOnClickDecrement = () => {
        // if (count > 0) {
        //     setCount(count - 1);
        // }
        if (countRef.current > 0) {
            countRef.current -= 1;
            console.log(countRef);
        }

        if (countRef.current >= 5) {
            setCount(countRef.current);
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