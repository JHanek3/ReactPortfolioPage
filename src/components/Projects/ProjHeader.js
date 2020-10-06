import React from "react"
import { Row, Col } from "react-bootstrap";

//Lets change the links to bootstrap cards in the future
function ProjHeader() {
  return (
    <>
      <Row className="myHeader">
        <Col>
          <h1 className="text-center">My Projects</h1>
          <h2 className="text-center">My VueJS projects can be found <a href="https://hanekvue.herokuapp.com/projects">here</a></h2>
          <h2 className="text-center">My previous ReactJS projects can be found <a href="http://hanekpro.com/my-app/build/index.html">here</a></h2>
        </Col>
      </Row>
    </>
  )
}

export default ProjHeader