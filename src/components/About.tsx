import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import about from "../assets/about.jpg";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className="align-self-center">
            <h1>De alumnos para los alumnos</h1>
            <p>
              Luego de la pandemia, el retorno a las actividades en forma
              presencial ha generado una serie de dificultades, las cuales han
              quedado en evidencia con el pasar de los días.
              <span>
                Una de las dificultades es el retorno de los alumnos de Duoc UC
                a sus hogares al término de la jornada diurna o vespertina.
              </span>
              Los motivos de estas dificultades son variados, sin embargo, se
              pueden identificar las más comunes:
            </p>
            <ul>
              <li className="reasons-list">
                <span>Falta de transporte público en ese horario.</span>
              </li>
              <li className="reasons-list">
                <span>
                  Alto costo de servicios de transporte particular (Uber, taxi,
                  etc.).
                </span>
              </li>
              <li className="reasons-list">
                <span>No contar con movilización propia.</span>
              </li>
              <li className="reasons-list">
                <span>
                  Falta de transporte facilitado por la institución de
                  educación.
                </span>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <Image src={about} roundedCircle fluid></Image>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
