import React, { Component } from "react"
import logo from "./../../static/logo-1@3x.png"
import axios from "axios"
import { config } from "../../config/config"
import { Cookies } from "react-cookie"

class Navigation extends Component {

  constructor (props) {
    super(props)

    // Handle state
    let isLogin = false
    let isSparcs = false

    const cookies = new Cookies()
    const cookie = cookies.get(config.cookieName)
    if (cookie && cookie.hasOwnProperty("isSparcs") === true) {
      if (cookie.isSparcs === true) {
        isLogin = true
        isSparcs = true
      } else {
        isLogin = true
      }
    }
    this.state = {
      isLogin: isLogin,
      isSparcs: isSparcs
    }
    this.handleSparcsLogoClick = this.handleSparcsLogoClick.bind(this)
    this.handleRightMenuClick = this.handleRightMenuClick.bind(this)
  }


  /**
   * componentDidMount
   */

  componentDidMount() {
    console.log(this.state)
  }

  // TODO : supplement click event of Logo - sidebar
  // TODO : sidebar hamburger onclick

  handleSparcsLogoClick(e) {
    if (window.location.pathname === "/aboutus") {
      e.preventDefault()
      document.getElementById('main-contents').style.marginTop = '0px'
      document.getElementById('menu_header').style.backgroundColor = 'rgba(0,0,0,0)'
      document.querySelectorAll('.right.menu .item').forEach((item) => {
        item.classList.remove('active')
      })
      // const width = window.innerWidth
    }
  }

  // TODO : right menu click event?

  handleRightMenuClick(e) {

  }


  /**
   * handleLoginClick
   * @description GET server login API
   */ 

  handleLoginClick(e) {
    window.location.href = `${config.serverURL}auth/login`
  }


  /**
   * handleLogoutClick
   * @description Destroy cookies
   */

  handleLogoutClick(e) {
    (new Cookies()).remove(config.cookieName)
    window.location.href = "/aboutus"
  }

  render() {
    return (
       <div className="ui fixed inverted large secondary pointing menu" id="menu_header">
        <div id="rightResponsibleMenu" className="ui right sidebar inverted vertical menu">
          <a href="/aboutus" className="item" id="aboutus" >ABOUT US</a>
          <a href="/projects" className="item" id="projects"  onClick={this.handleRightMenuClick}>PROJECTS</a>
          <a href="/seminars" className="item" id="seminars" onClick={this.handleRightMenuClick}>SEMINARS</a>
          <a href="/album" className="item" id="album" onClick={this.handleRightMenuClick}>ALBUM</a>
          <a href="/members" className="item" id="members" onClick={this.handleRightMenuClick}>MEMBERS</a>
          {this.state.isLogin === false && <div className="item login" onClick={this.handleLoginClick}>LOGIN</div>}
          {this.state.isLogin === true && <div className="item login" onClick={this.handleLogoutClick}>LOGOUT</div>}
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
            {this.state.isLogin === false && <div className="item login" onClick={this.handleLoginClick}>LOGIN</div>}
            {this.state.isLogin === true && <div className="item login" onClick={this.handleLogoutClick}>LOGOUT</div>}
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
