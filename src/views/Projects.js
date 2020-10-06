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
        <Row>
          <Col>
          <p>My new projects will go here! The old react projects will be slowly integrated into this page.</p>
          {/* For loop through this in the future */}
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>ToDo List</Card.Title>
              <Card.Text>
                One of my first react projects, just a simple to do list with the ablity to check and uncheck tasks.
              </Card.Text>
              <Button href="/List" variant="primary">Take a look!</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;