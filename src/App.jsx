import Footer from "./components/Footer";
import FormularioTareas from "./components/FormularioTareas";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Container className="my-5">
        <h1 className="text-center display-3 color-titulo my-5">
          Lista de Tareas
        </h1>
        <FormularioTareas></FormularioTareas>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
