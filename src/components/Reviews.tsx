import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Quotes } from "./Quotes";


export const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
      <Container>
        <Row className="align-items-center">
          <Col>
            <h1 className="text-center mt-5">
              Escucha lo que dicen sobre nosotros
            </h1>
            <p className="text-center mx-5 mt-5 text-break">Siempre nos preocupamos de estar al tanto de las opiniones de nuestros usuarios.</p>
          </Col>
        </Row>
          <Quotes />
      </Container>
    </section>
  );
};
