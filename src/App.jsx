import FormularioTareas from "./components/FormularioTareas";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="my-5">
      <h1 className="text-center display-3 color-titulo my-5">Lista de Tareas</h1>
      <FormularioTareas></FormularioTareas>
    </Container>
  );
}

export default App;
