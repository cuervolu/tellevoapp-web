import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import qr from "../assets/qr.png";
import download from "../assets/download.jpg";

import { isMobile } from "react-device-detect";

export const Download = () => {
  const url =
    "https://drive.google.com/uc?export=download&id=1uY41Mk-FDLCHWygEneP-IQ1diODv5HMF";
  let isMobileOrDesktop;

  if (isMobile) {
    isMobileOrDesktop = (
      <>
        <Image
          src={download}
          fluid
          thumbnail
          alt="Link de descarga"
          loading="lazy"
          className="download-image animate__fadeInUp"
        />

        <Button variant="warning" href={url} target="_blank" className="text-center">
          Descargar
        </Button>
      </>
    );
  } else {
    isMobileOrDesktop = (
      <Image src={qr} alt="Código QR" className="download-qr" loading="lazy" />
    );
  }

  return (
    <section className="download" id="download">
      <Container>
        <Row className="align-items-center download-section">
          <Col xs={12} md={6} xl={7} className="align-self-center">
            <h1>Descarga la aplicación</h1>
            <p className="text-start">
              Con la app, tu destino está al alcance de tu mano. Simplemente
              abra la aplicación y de la lista de choferes disponibles,
              seleccione uno para que lo lleve a su sede de manera confiable.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {isMobileOrDesktop}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
