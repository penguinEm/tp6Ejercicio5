import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <Container>
          <NavLink className="navbar-brand gradiente" to={"/"}>
            <FontAwesomeIcon icon={faCubes} className="text-secondary me-1" />
            INICIO
          </NavLink>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
