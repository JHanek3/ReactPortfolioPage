import React from "react"
import { Row, Col } from "react-bootstrap";

function Header() {
  return (
    <>
      <Row className="myHeader">
        <Col>
          <h1 className="text-center">Jonathon Hanek</h1>
          <h2 className="text-center">Front-End Developer</h2>
        </Col>
      </Row>
    </>
  )
}

export default Header