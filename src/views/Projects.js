import React from "react";
import { Container} from "react-bootstrap";
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
      </Container>
    </Container>
  );
}

export default Projects;