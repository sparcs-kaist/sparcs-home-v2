import React, { Component } from "react"
import { Route } from "react-router-dom"
import { Home, AboutUs, Projects, Seminars } from "../pages"

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component = {Home} />
        <Route path="/aboutus" component = {AboutUs} />
        <Route path="/projects" component = {Projects} />
        <Route path="/seminars" component = {Seminars} />
      </div>
    )
  }
}

export default App
