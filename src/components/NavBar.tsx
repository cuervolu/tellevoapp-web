import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


export const NavBar = () => {
  return (
    <>
      <Navbar  expand="lg" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home" className="nav-brand">

            <b>TeLlevoApp</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#about">Acerca de</Nav.Link>
              <Nav.Link href="#reviews">Reseñas</Nav.Link>
              <Nav.Link href="#download">Descargar</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
