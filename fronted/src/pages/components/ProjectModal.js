import React, { Component } from "react"
import PropTypes from "prop-types"
import axios from "axios"
import { Cookies } from "react-cookie"

import { config } from "../../config/config"


const cookies = new Cookies()

class ProjectModal extends Component {

  consturctor() {
    console.log(this.props.tempProjectId)
  }
  static propTypes = {
    tempProjectId: PropTypes.string.isRequired,
    tempProjectTitle: PropTypes.string.isRequired,
    tempProjectPM: PropTypes.string.isRequired,
    tempProjectExplanation: PropTypes.string.isRequired,
    tempProjectHomepage: PropTypes.string.isRequired,
    tempProjectGithub: PropTypes.string.isRequired,
    isCreating: PropTypes.bool.isRequired
  }


  /**
   * createProject
   */

  createProject() {
    // Create a Query
    const projectTitle = document.getElementById("project-title").value 
    const projectPM = document.getElementById("project-pm").value 
    const projectExplanation = document.getElementById("project-explanation").value 
    const projectHomepage = document.getElementById("project-homepage").value 
    const projectGithub = document.getElementById("project-github").value

    // Check input validation
    if (projectTitle === "" || projectPM === "" || projectExplanation === "") {
      alert("제목, PM, 또는 설명에 빈 칸이 있으면 수정할 수 없습니다")
      return
    }

    const query = `?title=${projectTitle}&pm=${projectPM}&explanation=${projectExplanation}&homepage=${projectHomepage}&github=${projectGithub}`
    axios.post(config.serverURL + "project" + query, null, { headers: {Authorization: JSON.stringify(cookies.get(config.cookieName))} })
    .then((response) => {
      if (response.data.error) {
        alert(JSON.stringify(response.data.error))
        window.location.href = "/admin"
      } else {
        alert("성공적으로 프로젝트가 생성되었습니다.")
        window.location.href = "/admin"
      }
    })
  }


  /**
   * updateProject
   * @description Update Project
   */

  updateProject() {
    // Create a Query
    const projectId = document.getElementById("project-id").value
    const projectTitle = document.getElementById("project-title").value 
    const projectPM = document.getElementById("project-pm").value 
    const projectExplanation = document.getElementById("project-explanation").value 
    const projectHomepage = document.getElementById("project-homepage").value 
    const projectGithub = document.getElementById("project-github").value

    // Check input validation
    if (projectTitle === "" || projectPM === "" || projectExplanation === "") {
      alert("제목, PM, 또는 설명에 빈 칸이 있으면 수정할 수 없습니다")
      return
    }

    const query = `?id=${projectId}&title=${projectTitle}&pm=${projectPM}&explanation=${projectExplanation}&homepage=${projectHomepage}&github=${projectGithub}`

    axios.put(config.serverURL + "project" + query, null, { headers: {Authorization: JSON.stringify(cookies.get(config.cookieName))} })
    .then((response) => {
      if (response.data.error) {
        alert(JSON.stringify(response.data.error))
        window.location.href = "/admin"
      } else {
        alert("업데이트 되었습니다")
        // TODO Fancy idea?
        window.location.href = "/admin"
      }
    })
  }


  /**
   * deleteProject
   */

  deleteProject() {
    const projectId = document.getElementById("project-id").value

    const query = `?id=${projectId}`
    axios.delete(config.serverURL + "project" + query, null, { headers: {Authorization: JSON.stringify(cookies.get(config.cookieName))} })
    .then((response) => {
      if (response.data.error) {
        alert(JSON.stringify(response.data.error))
        window.location.href = "/admin"
      } else {
        alert("삭제 되었습니다")
        window.location.href = "/admin"
      }
    })
  }


  /**
   * rendering
   */ 

  render() {
    return (
      <React.Fragment>
        <div className="content">
          <div className="ui form">
            <div className="fields">
                <input type="text" id="project-id" style={{display: "none"}} defaultValue={this.props.tempProjectId}/>
              <div className="four wide field">
                <label>프로젝트 이름</label>
                <input type="text" id="project-title" defaultValue={this.props.tempProjectTitle} />
              </div>
              <div className="four wide field">
                <label>PM</label>
                <input type="text" id="project-pm" defaultValue={this.props.tempProjectPM} />
              </div>
            </div>
            <div className="fields">
              <div className="sixteen wide field">
                <label>설명</label>
                <input type="text" id="project-explanation" defaultValue={this.props.tempProjectExplanation} />
              </div>
            </div>
            <div className="fields">
              <div className="nine wide field">
                <label>홈페이지 주소</label>
                <input type="text" id="project-homepage" defaultValue={this.props.tempProjectHomepage} />
              </div>
              <div className="nine wide field">
                <label>대표 Github 주소</label>
                <input type="text" id="project-github" defaultValue={this.props.tempProjectGithub} />
              </div>
            </div>
          </div>
        </div>

        {!this.props.isCreating && <div className="actions">
          <div className="ui positive right labeled icon button" onClick={this.updateProject}>
            수정
            <i className="cloud upload icon"></i>
          </div>
        </div>}

        {!this.props.isCreating && <div className="actions">
          <div className="ui negative right labeled icon button" onClick={this.deleteProject}>
            삭제
            <i className="x icon"></i>
          </div>
        </div>}

        {this.props.isCreating && <div className="actions">
          <div className="ui positive right labeled icon button" onClick={this.createProject}>
            생성
            <i className="cloud upload icon"></i>
          </div>
        </div>}
      </React.Fragment>
    ) 
  }

}


export default ProjectModal
