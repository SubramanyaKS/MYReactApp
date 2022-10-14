import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";
import Background from './Background';
export default function Skills() {
  return (
    <>
      <section className="skills py-5">
        <Container fluid className="App py-2 overflow-hidden">
          <Row className="justify-content-center">
            <h2 style={{fontSize:"35px",color:"#00ddff"}}>&lt; Skills /&gt;</h2>
          </Row>
          <br></br>
          <h4> Web Development </h4>
          <Row className="card-example d-flex flex-row flex-nowrap overflow-auto">
            <Card style={{ width: "6rem" }}>
              <Card.Body>
                <Card.Img src="./images/html.png" />
              </Card.Body>
            </Card>
            <Card style={{ width: "6rem" }}>
              <Card.Body>
                <Card.Img src="./images/css3.png" />
              </Card.Body>
            </Card>
            <Card style={{ width: "6rem" }}>
              <Card.Body>
                <Card.Img src="./images/javascript.png" />
              </Card.Body>
            </Card>
          </Row>
          <h4> Programming Language </h4>
          <Row className="card-example d-flex flex-row flex-nowrap overflow-auto">
            <Card style={{ width: "6rem" }}>
              <Card.Body>
                <Card.Img src="./images/cprog.png" />
              </Card.Body>
            </Card>
            <Card style={{ width: "6rem" }}>
              <Card.Body>
                <Card.Img src="./images/java.png" />
              </Card.Body>
            </Card>
            <Card style={{ width: "6rem" }}>
              <Card.Body>
                <Card.Img src="./images/python.png" />
              </Card.Body>
            </Card>
          </Row>
          <h4>DataBase</h4>
          <Row className="card-example d-flex flex-row flex-nowrap overflow-auto">
            <Card style={{ width: "6rem" }}>
              <Card.Body>
                <Card.Img src="./images/mongodb.png" />
              </Card.Body>
            </Card>
            <Card style={{ width: "6rem" }}>
              <Card.Body>
                <Card.Img src="./images/mysql.png" />
              </Card.Body>
            </Card>
          </Row>
          <h4>Web FrameWork</h4>
          <Row className="card-example d-flex flex-row flex-nowrap overflow-auto">
            <Card style={{ width: "6rem" }}>
              <Card.Body>
                <Card.Img src="./images/react.png" />
              </Card.Body>
            </Card>
            <Card style={{ width: "6rem" }}>
              <Card.Body>
                <Card.Img src="./images/flask.png" />
              </Card.Body>
            </Card>
            <Card style={{ width: "6rem" }}>
              <Card.Body>
                <Card.Img src="./images/django.png" />
              </Card.Body>
            </Card>
            <Card style={{ width: "6rem" }}>
              <Card.Body>
                <Card.Img src="./images/bootstrap.png" />
              </Card.Body>
            </Card>
          </Row>
          <h4>Tools</h4>
          <Row className="card-example d-flex flex-row flex-nowrap overflow-auto">
            <Card style={{ width: "6rem" }}>
              <Card.Body>
                <Card.Img src="./images/git.png" />
              </Card.Body>
            </Card>
            <Card style={{ width: "6rem" }}>
              <Card.Body>
                <Card.Img src="./images/android.png" />
              </Card.Body>
            </Card>
            <Card style={{ width: "6rem" }}>
              <Card.Body>
                <Card.Img src="./images/jupyter.png" />
              </Card.Body>
            </Card>
            <Card style={{ width: "6rem" }}>
              <Card.Body>
                <Card.Img src="./images/vscode.png" />
              </Card.Body>
            </Card>
            <Card style={{ width: "6rem" }}>
              <Card.Body>
                <Card.Img src="./images/eclipse.png" />
              </Card.Body>
            </Card>
          </Row>
        </Container>
        <Background id="tsparticles" />
      </section>
    </>
  );
}
