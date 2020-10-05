import React from "react";
import {Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

function Sidebar(){
  return(
      <>
        <Row className="">
            <Col>
            <Image className="justify-content-md-center headshot" src={require("../../assets/headshot.jpg")} />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <h2>CONTACT</h2>
            <span>Hanekj25@gmail.com</span>
            <br />
            <FontAwesomeIcon icon={faEllipsisH}/>
            <br/>
            <span>(331)-625-2959</span>
            <br />
            <FontAwesomeIcon icon={faEllipsisH}/>
            <br/>
            <span>Chicago, IL</span>
            <br/>
            <FontAwesomeIcon icon={faEllipsisH}/>
            <br/>
            <a href="https://github.com/JHanek3">github.com/Jhanek3</a>
            <br/>
            <FontAwesomeIcon icon={faEllipsisH}/>
            <br/>
            <a href="https://www.linkedin.com/in/jonathon-hanek-731230177/">linkedin.com/JonathonHanek</a>
            <br/>
            <FontAwesomeIcon icon={faEllipsisH}/>
            <br/>
            <a href="http://hanekpro.com/">Hanekpro.com</a>
          </Col>
        </Row>
      </>
    )
}

export default Sidebar