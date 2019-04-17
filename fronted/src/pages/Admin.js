import React, { Component } from "react"
import axios from "axios"
import { Cookies } from "react-cookie"
import { Button, Modal } from "semantic-ui-react"

import "./../styles/admin.scss"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import VerticalBar from "./components/VerticalBar"
import ProjectModal from "./components/ProjectModal"
import { config } from "../config/config"


/**
 * Style
 */

const colorBlackStyle = {
  color: "black"
}


/**
 * Admin
 */

class Admin extends Component {

  constructor(props) {
    super(props)

    // Cookie
    const cookies = new Cookies()
    const cookie = cookies.get(config.cookieName)
    if (typeof cookie !== "object") {
      window.location.href = "/"
    } else if (cookie.isSparcs === false) {
      // How to push
    }


    // Initiate this.state to avoid Warning
    this.state = {
      tempProjectId: "",
      tempProjectTitle: "",
      tempProjectPM: "",
      tempProjectExplanation: "",
      tempProjectHomepage: "",
      tempProjectGithub: "",
      createNewProject: true
    }

    this.handleCreateProject = this.handleCreateProject.bind(this)
    this.handleModifyProject = this.handleModifyProject.bind(this)
  }


  /**
   * componentDidMount
   */

  componentDidMount() {
    axios.get(config.serverURL + "project")
    .then((response) => {
      // TODO response fail check
      this.setState({
        projects: response.data.result
      })
    })
  }


  /**
   * handleModifyProject
   */ 

  handleModifyProject(event) {
    const modifyModalButton = document.getElementById("modify-project")
    const targetProject = this.state.projects[event.target.dataset.id - 1]
    this.setState({
      tempProjectId: targetProject.id,
      tempProjectTitle: targetProject.title,
      tempProjectPM: targetProject.pm,
      tempProjectExplanation: targetProject.explanation,
      tempProjectHomepage: targetProject.homepage_url,
      tempProjectGithub: targetProject.github_url,
      createNewProject: false
    }, () => {
      modifyModalButton.click()
    })
  }


  /**
   * handleCreateProject
   */

  handleCreateProject() {
    const modifyModalButton = document.getElementById("modify-project")
    this.setState({
      tempProjectId: "",
      tempProjectTitle: "",
      tempProjectPM: "",
      tempProjectExplanation: "",
      tempProjectHomepage: "",
      tempProjectGithub: "",
      createNewProject: true
    }, () => {
      modifyModalButton.click()
    })
  }


  render() {
    return (
      <div className="admin-wrapper">
        <Navigation />
        <div id="seminar-header" className="ui vertical masthead center aligned basic segment">
          <div className="ui text container">
            <h1 className="ui header">Admin</h1>
            <h2>관리자 페이지 입니다.</h2>
          </div>
        </div>
        <div className="admin-contents">
          <h2> 프로젝트 관리</h2>
          <VerticalBar />
          <div className="add-project-button" onClick={this.handleCreateProject}> 추가 + </div>

        <div className="ui container">
          <table className="ui celled table" id="seminar-list">
            <thead className="desktop-only">
            <tr>
              <th className="two wide">이름</th>
              <th className="two wide">PM</th>
              <th className="eight wide">설명</th>
              <th className="two wide">homepage</th>
              <th className="two wide">github</th>
            </tr>
            </thead>
  
            {this.state.projects && this.state.projects.map((project, index) => {
              return (
                <tbody key={index}>
                <tr>
                  <td data-id={project.id} style={{cursor: "pointer"}} onClick={this.handleModifyProject}>{project.title}</td>
                  <td>{project.pm}</td>
                  <td>
                    <span>
                      {project.explanation}
                    </span>
                  </td>
                  <td>
                    {project.homepage_url && <a href={project.homepage_url}><i className="big home icon link icon" style={colorBlackStyle}></i></a>}
                  </td>
                  <td>
                    {project.github_url && <a href={project.github_url}><i className="big github alternate icon link icon" style={colorBlackStyle}></i></a>}
                  </td>
  
                </tr>
                </tbody>
              )
            })}
  
  
          </table>
        </div>

        <Modal trigger={<Button id="modify-project" style={{display: "none"}}>Modify</Button>}>
          <Modal.Header>프로젝트 관리하기</Modal.Header>
          <Modal.Content>
            <ProjectModal
              tempProjectId={this.state.tempProjectId}
              tempProjectTitle={this.state.tempProjectTitle}
              tempProjectPM={this.state.tempProjectPM}
              tempProjectExplanation={this.state.tempProjectExplanation}
              tempProjectHomepage={this.state.tempProjectHomepage}
              tempProjectGithub={this.state.tempProjectGithub}
              isCreating={this.state.createNewProject}
            />


          </Modal.Content>
        </Modal>

        </div>
        <Footer />
      </div>
    )
  }
}


export default Admin
