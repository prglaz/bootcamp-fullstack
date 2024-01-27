// La siguiente línea de código, importa la hoja de estilos.
import { useEffect, useState } from "react";
import axios from "axios";
import "./climaCiudad.scss";

const ClimaCiudad = () => {

    const [temp, setTemp] = useState();
    const [city, setCity] = useState();
    let aux = 0;

    // https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0e9433324d341cd2833880497c105c58
    const URL_API = "https://api.openweathermap.org/data/2.5/weather";

    const params = new URLSearchParams({
        q: "Buenos Aires",
        units: "metric",
        appid: "0e9433324d341cd2833880497c105c58",
    });

    const handleOnChangeCity = (e) => {
        // Actualiza el valor de input mientras se escribe
        setCity(e.target.value);
        console.log("ciudad: ", e);
    };

    useEffect(() => {
        fetch(`${URL_API}?${params}`)
            .then((response) => response.json())
            .then((data) => setTemp(data.results));
        // axios.get(`${URL_API}?${params}`, {})
        //     .then((response) => {
        //         console.log(response.data.results);
        //         setTemp(response.data.results);
        //     });
    }, [city]);

    const handleOnClickGetTemp = () => {
        aux += 1;
        setCity(aux);
        console.log(temp);
    };

    return (
        <>
            <main>
                <h1>Temperatura</h1>
                <div>
                    <input
                        type="text"
                        id="c"
                        // value={city}
                        // on={(e) => handleOnChangeCity(e)}
                        required />
                    <button onClick={(e) => handleOnChangeCity(e)}>Obtener temperatura</button>
                </div>
                <div>
                    <p>{`${temp}`}</p>
                </div>
            </main>
        </>
    );
};

export default ClimaCiudad;