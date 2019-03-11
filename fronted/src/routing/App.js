import React, { Component } from "react"
import { Route } from "react-router-dom"
import { Home, AboutUs, Projects } from "../pages"

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component = {Home}/>
        <Route path="/aboutus" component = {AboutUs}/>
        <Route path="/projects" component = {Projects}/>
      </div>
    )
  }
}

export default App
