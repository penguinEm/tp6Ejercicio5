import Footer from "./components/Footer";
import FormularioTareas from "./components/FormularioTareas";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Container className="mt-5 mb-0 pb-0 main">
        <h1 className="text-center display-3 color-titulo mt-5 mb-0 pb-0 titulo">
          Lista de Tareas
        </h1>
      </Container>
      <Routes>
        <Route>
          <Route
            className="container"
            exact
            path="/"
            element={
              <FormularioTareas
                editar={false}
                btnTexto={"Agregar"}
              ></FormularioTareas>
            }
          ></Route>
          <Route
            exact
            path="/editar/:id"
            element={
              <FormularioTareas
                editar={true}
                btnTexto={"Editar"}
              ></FormularioTareas>
            }
          ></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
