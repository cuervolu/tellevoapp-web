import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const Banner = () => {
  return (
    <main className="banner" id="home">
      <Container>
        <Row className="align-items-start animate__backInRight">
          <Col>
            <h1>
              Viaja con <span>seguridad</span>
            </h1>
            <br />
            <mark className="text-justify">
              En TeLlevoApp, tu seguridad es nuestra prioridad.
              <br />
              ¡Siempre sabremos donde estás!
            </mark>
          </Col>
        </Row>
        <Row className="align-self-start mt-3">
          <Col>
            <Button variant="warning" href="#download">Descargar</Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
