// La siguiente línea de código, importa la hoja de estilos.
import "./app.scss";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Sidebar from "./components/layout/Sidebar";

const App = () => {
    return (
        <>
            <Header title="Clase 43" subtitle="Modularizacion" />
            <Main>Soy el main</Main>
            <Sidebar />
            <Footer />
        </>
    );
};

export default App;