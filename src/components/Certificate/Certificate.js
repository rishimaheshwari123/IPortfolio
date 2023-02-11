
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProjectCards from "../Projects/ProjectCards";
import Particle from "../Particle";

import bookMyPark from "../../Assets/Projects/bookMyPark.PNG";
import ReactBasic from "../../Assets/Projects/reactBasic.PNG";
import javaScript from "../../Assets/Projects/javaScript.PNG";
import java from "../../Assets/Projects/java.PNG";
import CertificateCard from "./CertificateCard";


function Certificate() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certificates </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={ReactBasic}
              isBlog={false}
              title="Coursera"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
            imgPath={javaScript}
              isBlog={false}
              title="Coursera"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={java}
              isBlog={false}
              title="Linkedin"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
