import React from "react"
import { Row, Col, Dropdown, DropdownButton, ButtonGroup, ListGroup, } from "react-bootstrap";

function Header() {
  return (
    <>
      <Row>
        <Col>
        <h2>About Me</h2>
        <p className="myPara">
          Self-Taught Web Developer with a background in BioChemistry. My degree
          in BioChemistry has provided me with a wide array of analytical and
          problem-solving skills that has helped with my web development journey. No Industry
          experience as of yet, looking to get into the field. I'm on the fence between ReactJS and VueJS,
          a potential job opportunity arose with Vue so I went down that route for a bit. Now I've come back to
          React just to have a refresher on the syntax. Check out the projects tab for my React work.
        </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Education</h2>
          <p>
            <b>Bachelor's of BioChemistry | University of Illinois at Chicago |
            May 2019</b>
            <br/>
              <span className="tab">
                Published a paper as the 4th author in the Proteomics ScienceJournal
              </span>
          </p>
          <p>
            <b>Self-Taugh Web Developer | UDemy, Coursera, Reddit, Stack Overflow,
            and Official Docs | Present</b>
            <br/>
            <span className="tab">A wizard at reading docs, excel at learning quickly and applying
            new topics</span>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Experience</h2>
          <p>
            All my experience is gained through the projects I have created and
            the certificates I've achieved. Take a look at my projects in the
            Navigation bar.
          </p>
          <div className="mb-2">
            {/* Probably should map this, just lazy */}
            <DropdownButton
              as={ButtonGroup}
              id='dropdown-button-drop-up'
              drop='up'
              variant="secondary"
              title="Certificates"
            >
              <Dropdown.Item>Beginner Full Stack Web Development</Dropdown.Item>
              <Dropdown.Item>JavaScript Fundamentals</Dropdown.Item>
              <Dropdown.Item>Advanced and Object Oriented JavaScript and ES6</Dropdown.Item>
              <Dropdown.Item>JS, Bootstrap, & PHP for beginners</Dropdown.Item>
              <Dropdown.Item>Angular Crash Course</Dropdown.Item>
              <Dropdown.Item>Completed SQLZOO</Dropdown.Item>
              <Dropdown.Item>Scrimba React Bootcamp</Dropdown.Item>
              <Dropdown.Item>Vue Mastery Beginner Path</Dropdown.Item>
              <Dropdown.Item>Python For Everybody Full Completion</Dropdown.Item>
            </DropdownButton>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
        {/* Could've mapped this and made cool loaders, again just trying to get this up and running */}
          <h2>Skills</h2>
          <ListGroup horizontal>
            <ListGroup.Item >HTML5</ListGroup.Item>
            <ListGroup.Item>JavaScript</ListGroup.Item>
            <ListGroup.Item>ReactJS</ListGroup.Item>
            <ListGroup.Item>Bootstrap</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>VueJS</ListGroup.Item>
            <ListGroup.Item>Vuetify</ListGroup.Item>
            <ListGroup.Item>Vuex</ListGroup.Item>
            <ListGroup.Item>Python</ListGroup.Item>
            
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>Django</ListGroup.Item>
            <ListGroup.Item>NodeJS</ListGroup.Item>
            <ListGroup.Item>Express</ListGroup.Item>
            <ListGroup.Item>SQL</ListGroup.Item>
          </ListGroup>

        </Col>
      </Row>
    </>
  )
}

export default Header