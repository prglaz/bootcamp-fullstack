import Proptypes from "prop-types";

const Saludo = (props) => {
    const {nombre, apellido, edad} = props;
    const edadMasAnios = edad ?  `, ${edad} años` : null; //como agregue el default, ya no tiene sentido el operador ternario porque siempre tendria un valor
    return (
        <h1 className="title">Hola {nombre} {apellido}{edadMasAnios}</h1>
    );
};

Saludo.propTypes = {
    nombre: Proptypes.string.isRequired,
    apellido: Proptypes.string,
    edad: Proptypes.number,
};

Saludo.defaultProps = {
    edad: 18, //seteo valor por defecto
};

export default Saludo;
