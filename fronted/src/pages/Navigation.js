import React, { Component } from "react"
import logo from "./../static/logo-1@3x.png"

class Navigation extends Component {

  constructor (props) {
    super(props)
    this.handleSparcsLogoClick = this.handleSparcsLogoClick.bind(this)
  }

  handleSparcsLogoClick(e) {
    e.preventDefault()
    console.log("sparcs_logo")
    document.getElementById('main-contents').style.marginTop = '0px'
    document.getElementById('menu_header').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelectorAll('.right.menu .item').forEach((item) => {
      item.classList.remove('active')
    })

    const width = window.innerWidth
    console.log(width)
  }

  render() {
    return (
       <div className="ui fixed inverted large secondary pointing menu" id="menu_header">
        <div id="rightResponsibleMenu" className="ui right sidebar inverted vertical menu">
          <a href="/aboutus" className="item" id="aboutus" >ABOUT US</a>
          <a href="/projects" className="item" id="projects" >PROJECTS</a>
          <a href="/seminars" className="item" id="seminars" >SEMINARS</a>
          <a href="/album" className="item" id="album" >ALBUM</a>
          <a href="/members" className="item" id="members" >MEMBERS</a>
          <div className="item">LOGIN</div>
        </div>
        <div className="ui container">
          <div className="menu">
            <a onClick={this.handleSparcsLogoClick} href="/aboutus" className="active" id="sparcs_logo" >
              <img className="logo" src={logo} alt="logo"/></a>
          </div>
  
          <div className="right menu">
            <a href="/aboutus" className="item" id="aboutus" >ABOUT US</a>
            <a href="/projects" className="item" id="projects" >PROJECTS</a>
            <a href="/seminars" className="item" id="seminars" >SEMINARS</a>
            <a href="/album" className="item" id="album" >ALBUM</a>
            <a href="/members" className="item" id="members" >MEMBERS</a>
            <div className="item">LOGIN</div>
          </div>
          <div className="hamburger">
            <i className="sidebar icon" style={{color: "white"}}></i>
          </div>
        </div>
      </div>
    )
  }

}

export default Navigation