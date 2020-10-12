import React from "react";
import "./App.css";
import Home from "./views/Home.js";
import Projects from "./views/Projects.js"
import NavBar from "./components/Pages/NavBar.js";
import Footer from "./components/Pages/Footer.js"
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from 'react-router-dom';
import List from "./components/ToDo/ToDoList"
import Quote from "./components/Quote/Quote"
import ChatHome from "./components/ChatRoom/ChatHome"
import ChatRoom from "./components/ChatRoom/ChatRoom"
import DashboardPage from './components/Blog/DashboardPage'
import PostsPage from './components/Blog/PostsPage'
import SinglePostPage from './components/Blog/SinglePostPage'
import SWPlanet from "./components/SWApi/SWPlanet"
import WeatherAPI from "./components/Weather/WeatherApi"

function App() {
  return (
    <>
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/List" component={List}/>
          <Route exact path="/projects/FunReads" component={Quote}/>
          <Route exact path="/projects/ChatApp" component={ChatHome} />
          <Route exact path="/ChatApp/:roomId" component={ChatRoom} />
          <Route exact path="/projects/Blog" component={DashboardPage} />
          <Route exact path="/projects/Blog/posts" component={PostsPage} />
          <Route exact path="/projects/Blog/posts/:id" component={SinglePostPage} />
          <Route exact path="/projects/SWPlanet" component={SWPlanet} />
          <Route exact path="/projects/WeatherAPI" component={WeatherAPI} />
        </Switch>
      <Footer />
    </>
  );
}

export default App;