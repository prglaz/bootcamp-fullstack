import { useState } from "react";
import ClimaCiudad from "./ClimaCiudad";

const App = () => {
    const [inputCity, setInputCity] = useState("");
    const [cityToSearch, setCityToSearch] = useState("");

    const handleOnChangeInputCity = (e) => {
        // Actualiza el valor de input mientras se escribe
        setInputCity(e.target.value);
    };

    const handleOnClickGetTemp = (e) => {
        e.preventDefault();
        setCityToSearch(inputCity);
    };

    return (
        <>
            <main>
                <h1>Temperatura</h1>
                <div>
                    <form>
                        <input
                            type="text"
                            id="City"
                            value={inputCity}
                            onChange={(e) => handleOnChangeInputCity(e)}
                            required />
                        <button onClick={(e) => handleOnClickGetTemp(e)}>Obtener temperatura</button>
                    </form>
                </div>
                <ClimaCiudad cityToSearch={cityToSearch} />
            </main>
        </>
    );
};

export default App;