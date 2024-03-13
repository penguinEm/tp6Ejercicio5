import Footer from "./components/Footer";
import FormularioTareas from "./components/FormularioTareas";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Container className="my-5 main">
        <h1 className="text-center display-3 color-titulo my-5">
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
