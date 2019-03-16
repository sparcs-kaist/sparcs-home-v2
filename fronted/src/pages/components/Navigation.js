import React, { Component } from "react"
import logo from "./../../static/logo-1@3x.png"

class Navigation extends Component {

  constructor (props) {
    super(props)

    this.handleSparcsLogoClick = this.handleSparcsLogoClick.bind(this)
    this.handleRightMenuClick = this.handleRightMenuClick.bind(this)
  }

  // TODO : supplement click event of Logo - sidebar

  handleSparcsLogoClick(e) {
    if (window.location.pathname === "/aboutus") {
      e.preventDefault()
      document.getElementById('main-contents').style.marginTop = '0px'
      document.getElementById('menu_header').style.backgroundColor = 'rgba(0,0,0,0)'
      document.querySelectorAll('.right.menu .item').forEach((item) => {
        item.classList.remove('active')
      })
  
      const width = window.innerWidth
      console.log(width)
    }
  }

  // TODO : right menu click event?

  handleRightMenuClick(e) {
  }

  // TODO : sidebar hamburger onclick

  // TODO : Login / Logout - change word depends on authentication, redirect to login/logout


  render() {
    return (
       <div className="ui fixed inverted large secondary pointing menu" id="menu_header">
        <div id="rightResponsibleMenu" className="ui right sidebar inverted vertical menu">
          <a href="/aboutus" className="item" id="aboutus" >ABOUT US</a>
          <a href="/projects" className="item" id="projects"  onClick={this.handleRightMenuClick}>PROJECTS</a>
          <a href="/seminars" className="item" id="seminars" onClick={this.handleRightMenuClick}>SEMINARS</a>
          <a href="/album" className="item" id="album" onClick={this.handleRightMenuClick}>ALBUM</a>
          <a href="/members" className="item" id="members" onClick={this.handleRightMenuClick}>MEMBERS</a>
          <div className="item">LOGIN</div>
        </div>

        <div className="ui container">
          <div className="menu">
            <a onClick={this.handleSparcsLogoClick} href="/aboutus" className="active" id="sparcs_logo" >
              <img className="logo" src={logo} alt="logo"/></a>
          </div>
  
          <div className="right menu">
            <a href="/aboutus" className="item" id="aboutus" >ABOUT US</a>
            <a href="/projects" className="item" id="projects" onClick={this.handleRightMenuClick}>PROJECTS</a>
            <a href="/seminars" className="item" id="seminars" onClick={this.handleRightMenuClick}>SEMINARS</a>
            <a href="/album" className="item" id="album" onClick={this.handleRightMenuClick}>ALBUM</a>
            <a href="/members" className="item" id="members" onClick={this.handleRightMenuClick}>MEMBERS</a>
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
