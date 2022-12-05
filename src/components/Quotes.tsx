import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

import elon from "../assets/elonmusk.jpg";
import chayanne from "../assets/chayanne.jpg";
import satoru from "../assets/satoru.jpeg";

export const Quotes = () => {
  return (
    <>
      <Container className="mt-5">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col xl={10}>
            <Card>
              <Card.Body className="py-5">
                {/* Carousel wrapper  */}
                <Carousel variant="dark" slide indicators={false}>
                  <Carousel.Item>
                    <Row className="d-flex justify-content-center">
                      <Col md={8} lg={9} xl={8}>
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img
                              src={elon}
                              className="rounded-circle mb-4 mb-lg-0 shadow-2"
                              alt="woman avatar"
                              width="90"
                              height="90"
                            />
                          </div>
                          <div className="flex-grow-1 ms-4 ps-3">
                            <figure>
                              <blockquote className="blockquote mb-4">
                                <p>
                                  <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                                  <span className="font-italic">
                                    Nunca había visto una aplicación tan útil.
                                  </span>
                                </p>
                              </blockquote>
                              <figcaption className="blockquote-footer">
                                Elon Musk en
                                <cite title="Source Title"> Twitter</cite>
                              </figcaption>
                            </figure>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Row className="d-flex justify-content-center">
                      <Col md={8} lg={9} xl={8}>
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img
                              src={chayanne}
                              className="rounded-circle mb-4 mb-lg-0 shadow-2"
                              alt="woman avatar"
                              width="90"
                              height="90"
                            />
                          </div>
                          <div className="flex-grow-1 ms-4 ps-3">
                            <figure>
                              <blockquote className="blockquote mb-4">
                                <p>
                                  <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                                  <span className="font-italic">
                                    Está aplicación me permitió llegar a mi sede
                                    10 veces más rápido, además de gastar menos
                                    al mes.
                                  </span>
                                </p>
                              </blockquote>
                              <figcaption className="blockquote-footer">
                                Chayanne en
                                <cite title="Source Title"> The Guardian</cite>
                              </figcaption>
                            </figure>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Row className="d-flex justify-content-center">
                      <Col md={8} lg={9} xl={8}>
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img
                              src={satoru}
                              className="rounded-circle mb-4 mb-lg-0 shadow-2"
                              alt="woman avatar"
                              width="90"
                              height="90"
                            />
                          </div>
                          <div className="flex-grow-1 ms-4 ps-3">
                            <figure>
                              <blockquote className="blockquote mb-4">
                                <p>
                                  <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                                  <span className="font-italic">
                                    Cada vez que viajo me siento seguro con
                                    TeLlevoApp
                                  </span>
                                </p>
                              </blockquote>
                              <figcaption className="blockquote-footer">
                                Satoru Iwata en
                                <cite title="Source Title"> Time</cite>
                              </figcaption>
                            </figure>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Carousel.Item>
                </Carousel>
                {/* Carousel wrapper  */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
