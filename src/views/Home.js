import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Home/Sidebar"
import Header from "../components/Home/Header"
import Content from "../components/Home/Content"
import "../App.css"

function Home() {
  return (
    <Container className="myContainer" fluid>
      <Header />
      <Row>
        <Col xs={4}>
          <Sidebar />
        </Col>
        <Col xs={8}>
          <Content />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
