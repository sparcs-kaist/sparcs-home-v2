import React, { Component } from "react"
import PropTypes from "prop-types"
import { config } from "../../config/config" 

class SeminarRows extends Component {
  static propTypes = {
    seminars: PropTypes.array.isRequired
  }

  render() {
    const seminarRows = this.props.seminars.map((seminar, index) => {
      return (
        <tbody key={index}>
        <tr>
          <td>{seminar.created_date.substring(0, 10)}</td>
          <td>{seminar.title}</td>
          <td>
            <span>
              <a href={config.serverURL + "static/" + seminar.file_name}>
                {seminar.file_name.substr(seminar.file_name.length-3 ,3) === "pdf"
                  ? <i className="file pdf outline black icon"></i>
                  : <i className="file powerpoint outline black icon"></i>}
              </a>
            </span>
          </td>
          <td>
            <span className="desktop-only">{seminar.speaker}</span>
            <span className="mobile-only">Seminar by <b>{seminar.speaker}</b></span>
          </td>
        </tr>
        </tbody>
      )
    })

    return (
      <React.Fragment>
        {seminarRows}
      </React.Fragment>
    )
  }

}

export default SeminarRows
