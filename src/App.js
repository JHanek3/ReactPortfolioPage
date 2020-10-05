import React from "react";
import "./App.css";
import Home from "./views/Home.js";
import Projects from "./views/Projects.js"
import NavBar from "./components/Pages/NavBar.js";
import Footer from "./components/Pages/Footer.js"
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      <Footer />
    </>
  );
}

export default App;