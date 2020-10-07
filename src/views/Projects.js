import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../App.css"
import ProjHeader from "../components/Projects/ProjHeader.js"
// import Quote from "./components/Quote/Quote"
// import SpeedTypingGame from "./components/SpeedTypingGame"
// import PicSome from "./components/PicSome/PicSome.js"
// import Cart from "./pages/Cart"
// import Calculator from "./components/Calculator"
// import SWApi from "./components/SWApi"
// import CRUD from "./components/CRUD"
// import WeatherAPI from "./components/Weather/WeatherApi"
// import SWChar from "./components/SWChar/SWChar"

function Projects() {
  return (
    <Container className="projContainer" fluid>
      <ProjHeader/>
      <hr></hr>
      <Container className="projContainer1">
      <p>My new projects will go here! The old react projects will be slowly integrated into this page.</p>
        <Row>
          <Col>
          {/* For loop through this in the future */}
          <Card style={{ width: '18rem', height: '15rem' }}>
            <Card.Body>
              <Card.Title>ToDo List</Card.Title>
              <Card.Text>
                One of my first react projects, just a simple to do list with the ablity to check and uncheck tasks. Wil add redux in the future.
              </Card.Text>
              <Button href="/projects/List" variant="primary">Take a look!</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem', height: '15rem' }}>
            <Card.Body>
              <Card.Title>Chat App</Card.Title>
              <Card.Text>
                Simple chat-app, to im with other users. Make sure you are in the same chat room, both login into chat room "test1".
              </Card.Text>
              <Button href="/projects/ChatApp" variant="primary">Take a look!</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;