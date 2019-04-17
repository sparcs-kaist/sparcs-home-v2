import React, { Component } from "react"
import PropTypes from "prop-types"
import project_icon from "./../../static/project-icon.png"

const cardDivStyle = {
  width: "80%",
  margin: "10%"
}

const displayInlineStyle = {
  display: "inline"
}

const colorBlackStyle = {
  color: "black"
}

class ProjectCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    pm: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    homepage_url: PropTypes.string,
    github_url: PropTypes.string
  }

  render() {
    return (
      <div className="column">
        <div style={cardDivStyle}>
          <img className="ui small centered image" src={project_icon} alt="project_icon"/>
          <h2 className="ui header">
            {this.props.title}
            <div className="sub header">PM : {this.props.pm}</div>
          </h2>
          <br/>
          {this.props.explanation}
          <br/><br/>
          {this.props.homepage_url && <a href={this.props.homepage_url}><div style={displayInlineStyle}><i className="big home icon link icon" style={colorBlackStyle}></i></div></a>}
          {this.props.github_url && <a href={this.props.github_url}><div style={displayInlineStyle}><i className="big github alternate icon link icon" style={colorBlackStyle}></i></div></a>}        
        </div>
      </div>
    )
  }

}

export default ProjectCard
