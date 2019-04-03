import React, { Component } from "react"
import { Button, Modal } from "semantic-ui-react"
import axios from "axios"
import Pagination from "react-js-pagination";

import "./../styles/seminars.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import SeminarRows from "./components/SeminarRows"
import { config } from "../config/config"

const uploadButtonStyle = {
  backgroundColor: "#db2828",
  textShadow: "none",
  borderRadius: "0",
  color: "#fff"
}


/**
 * Seminars
 */

class Seminars extends Component {

  constructor(props) {
    super(props)

    this.state = {
      activePage: 1,
      index: 0
    }

    this.selectFile = this.selectFile.bind(this)
    this.changeFile = this.changeFile.bind(this)
    this.uploadSeminar = this.uploadSeminar.bind(this)
  }


  /**
   * ComponentDidMount
   */

  componentDidMount() {
    axios.get(config.serverURL + "seminar?order=desc")
    .then((response) => {
      this.setState({
        seminars: response.data.result,
        totalSeminar: response.data.result.length
      })
    })
    this.handleDescClick = this.handleDescClick.bind(this)
    this.handleAscClick = this.handleAscClick.bind(this)
  }


  /**
   * handleDescClick
   */

  handleDescClick(e) {
    e.preventDefault()
    const desc = document.getElementById("desc")
    const asc = document.getElementById("asc")
    if (desc.classList.contains("active")) {
      return
    } else {
      asc.classList.remove("active")
      desc.classList.add("active")
      axios.get(config.serverURL + "seminar?order=desc")
      .then((response) => {
        this.setState({
          seminars: response.data.result,
          totalSeminar: response.data.result.length
        })
      })
    }
  }


  /**
   * handleAscClick
   */

  handleAscClick(e) {
    e.preventDefault()
    const desc = document.getElementById("desc")
    const asc = document.getElementById("asc")
    if (asc.classList.contains("active")) {
      return
    } else {
      desc.classList.remove("active")
      asc.classList.add("active")
      axios.get(config.serverURL + "seminar?order=asc")
      .then((response) => {
        this.setState({
          seminars: response.data.result,
          totalSeminar: response.data.result.length
        })
      })
    }
  }


  /**
   * handlePageChange
   */

  handlePageChange = (pageNumber) => {
    this.setState({
      activePage: pageNumber,
      index: pageNumber-1
    })
  }


  /**
   * selectFile
   * @description When user selects file, occur click event
   */

  selectFile() {
    const fileUpload = document.getElementById("file-upload")
    fileUpload.accept = "application/pdf"
    fileUpload.click()
  }


  /**
   * changeFile
   * @description Get binary file data using FileReader()
   */

  changeFile = (event) => {
    const files = event.target.files
    if (files.length === 0) {
      return
    }
    
    const file = files[0]
    document.getElementById("file-name").value = file.name
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) => {
      this.setState({
        fileResult: e.target.result
      })
    }
  }


  /**
   * uploadSeminar
   * @description Upload seminar to server
   */ 

  uploadSeminar(event) {
    const title = document.getElementById("seminar-title").value
    const speaker = document.getElementById("seminar-speaker").value

    // When file is ready to upload, POST request
    if (this.state.fileResult) {
      const seminar = {
        title: title,
        speaker: speaker,
        content: this.state.fileResult,
      }

      // POST /seminar
      axios.post(config.serverURL + "seminar" , seminar)
      .then((response) => {
        if (response.data.success) {
          alert("Successfully upload a seminar file")
        } else {
          alert(`Failed to upload a seminar file. ${response.data.error}`)
        }
        window.location.href = "/seminars"
      })
      .catch((error) => {
        alert(`Failed to upload a seminar file. ${JSON.stringify(error)}`)
        window.location.href = "/seminars"
      })
    } else {
      // If file is not ready to upload, retry uploadSeminar
      setTimeout(() => {
        this.uploadSeminar(null)
      }, 100)
    }
  }


  // TODO upload nodal  컴포넌트로 따로 빼기


  /**
   * Render
   */ 

  render() {
    return (
      <div>
        <Navigation />
        <div id="seminar-header" className="ui vertical masthead center aligned basic segment">
          <div className="ui text container">
            <h1 className="ui header">Seminars</h1>
            <h2>Made in SPARCS, SPARCS의 세미나 자료를 공개합니다.</h2>
          </div>
        </div>
    
        <div className="ui inverted large attached menu" id="submenu">
          <div className="ui container">

            <a href="/seminars" id="desc" className="active yellow item" onClick={this.handleDescClick}>최신순</a>
            <a href="/seminars" id="asc" className="yellow item" onClick={this.handleAscClick}>오래된 순</a>

            <div className="ui small search right item">
              <div className="ui icon input">
                <input className="prompt" placeholder="Search slides..." />
                <i className="search icon"></i>
              </div>
            </div>

            <Modal trigger={<Button style={uploadButtonStyle}>Upload</Button>}>
              <Modal.Header>Upload a seminar</Modal.Header>
              <Modal.Content>

                <div className="content">
                  <div className="ui form">
                    <div className="fields">
                      <div className="twelve wide field">
                        <label>제목</label>
                        <input type="text" id="seminar-title" placeholder="2017 Wheel 세미나 1. LDAP" />
                      </div>
                      <div className="four wide field">
                        <label>발표자</label>
                        <input type="text" id="seminar-speaker" placeholder="lannstark" />
                      </div>
                    </div>
                    <div className="field">
                      <label>파일 첨부</label>
                      <div className="ui action input">
                        <input type="text" id="file-name" />
                        <input type="file" id="file-upload" style={{display: "none"}} onChange={this.changeFile}/>
                        <div className="ui button" onClick={this.selectFile} >파일 선택</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="actions">
                  <div className="ui positive right labeled icon button" onClick={this.uploadSeminar}>
                    업로드
                    <i className="cloud upload icon"></i>
                  </div>
                </div>

              </Modal.Content>
            </Modal>

          </div>
        </div>

        <div className="ui container">
          <table className="ui celled table" id="seminar-list">
            <thead className="desktop-only">
            <tr>
              <th className="two wide">Date</th>
              <th className="ten wide">Topic</th>
              <th className="two wide">File</th>
              <th className="two wide">Speaker</th>
            </tr>
            </thead>

            {this.state.seminars && <SeminarRows seminars={this.state.seminars.slice(this.state.index * 15, this.state.index * 15 + 15)} />}

          </table>
        </div>

        <div className="pagination-wrapper">
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={15}
            totalItemsCount={this.state.totalSeminar}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
          />
        </div>

        <Footer />
      </div>
    )
  }

}

export default Seminars
