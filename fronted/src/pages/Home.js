import React from "react"
import "./../styles/home.css"
import logo_welcome from "./../static/logo_welcome.png"

const Home = () => {
  return (
    <div className="welcome">
      <div className="centered">
        <div className="logo_home">
          <img className="logo_image" src={logo_welcome} alt="logo_welcome"/>
        </div>
        <div className="message">
          <h1 id="welcome_message" style={{color: "white"}}>WE MAKE <span style={{color: "#f1951c"}}>SERVICE</span>,<br/>YOU JUST <span style={{color: "#f1951c"}}>USE</span> IT.</h1>
        </div>
        <div id="goto">
          <a href="/aboutus"><button id="goto_button" className="ui inverted button">Go to page</button></a>
        </div>
      </div>
      <div className="bottom">
        <div className="linkto">
          <a href="https://www.facebook.com/kaistsparcs/"><i className="facebook icon link" id="facebook" style={{color: "white"}}></i></a>
          <a href="https://github.com/sparcs-kaist"><i className="github icon link" id="github" style={{color: "white"}}></i></a>
          <a href="mailto:staff@sparcs.org"><i className="mail icon link" id="mail" style={{color: "white"}}></i></a>
        </div>
      </div>
    </div>
  )
}

export default Home
