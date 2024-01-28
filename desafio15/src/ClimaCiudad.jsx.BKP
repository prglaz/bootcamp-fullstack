// La siguiente línea de código, importa la hoja de estilos.
import { useEffect, useState } from "react";
import axios from "axios";
import "./climaCiudad.scss";

const ClimaCiudad = () => {

    const [temp, setTemp] = useState();
    const [inputCity, setInputCity] = useState("");
    const [cityToSearch, setCityToSearch] = useState("");

    // https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0e9433324d341cd2833880497c105c58
    const URL_API = "https://api.openweathermap.org/data/2.5/weather";

    const params = new URLSearchParams({
        q: cityToSearch,
        units: "metric",
        appid: "0e9433324d341cd2833880497c105c58",
    });

    const handleOnChangeInputCity = (e) => {
        // Actualiza el valor de input mientras se escribe
        setInputCity(e.target.value);
    };

    useEffect(() => {
        if (cityToSearch != "") {
            fetch(`${URL_API}?${params}`)
                .then((response) => response.json())
                .then((data) => setTemp(data.main["temp"]));
        }
        else {
            setTemp("");
        }
    }, [cityToSearch]);

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

                <div>
                    {(temp) && <p>Temperatura: {temp}</p>}
                    {(temp && temp > 30) && <span className="warm">¡Hace mucho calor!</span>}
                    {(temp && temp < 10) && <span className="cold">¡Hace mucho frío!</span>}
                </div>
            </main>
        </>
    );
};

export default ClimaCiudad;