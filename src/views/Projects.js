import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../App.css"
import ProjHeader from "../components/Projects/ProjHeader.js"

function Projects() {
  return (
    <Container className="projContainer" fluid>
      <ProjHeader/>
      <hr></hr>
      <Container className="projContainer1">
      <p>My new projects will go here! The old react projects will be slowly integrated into this page.</p>
        <Row>
          <Col>
          {/* For loop through this in the future, this is straight booty fix the layout too */}
          <Card className="projCard">
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
          <Card className="projCard">
            <Card.Body>
              <Card.Title>Quote Generator</Card.Title>
              <Card.Text>
                I like reading books and I like saving meaningful quotes I come across to share with others. Random select with animation.
              </Card.Text>
              <Button href="/projects/FunReads" variant="primary">Take a look!</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card className="projCard">
            <Card.Body>
              <Card.Title>Chat App</Card.Title>
              <Card.Text>
                Simple chat-app, to im with other users. Make sure you are in the same chat room. Server ran locally, looking how to deploy with heroku.
              </Card.Text>
              <Button href="/projects/ChatApp" variant="primary">Take a look!</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        <Row className="projRow">
          <Col>
            <Card className="projCard">
              <Card.Body>
                <Card.Title>SW API</Card.Title>
                <Card.Text>
                  Star Wars API call to receive some information about Planets. Then went on to display the information in a table and also with a graph.
                </Card.Text>
                <Button href="/projects/SWPlanet" variant="primary">Take a look!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="projCard">
              <Card.Body>
                <Card.Title>Weather Widget</Card.Title>
                <Card.Text>
                  Simple Weather API call that shows the 7 day forecast layout is react-bootstrap. Used useEffect instead of storing in Redux for the fetching.
                </Card.Text>
                <Button href="/projects/Blog" variant="primary">Take a look!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="projCard">
              <Card.Body>
                <Card.Title>Blog App</Card.Title>
                <Card.Text>
                  Getting my hands wet with redux. Following along https://www.taniarascia.com/redux-react-guide/#actions.
                </Card.Text>
                <Button href="/projects/Blog" variant="primary">Take a look!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;