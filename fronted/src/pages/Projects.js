import React, { Component } from "react"
import axios from "axios"

import "./../styles/projects.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import ProjectCard from "./components/ProjectCard"
import { config } from "../config/config"

class Projects extends Component {

  constructor(props) {
    super(props)

    this.state = {
    
    }
  }


  /**
   * ComponentDidMount
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
   * Rendering
   */

  render() {
    return (
    	<div>
        <Navigation />
    		<div id="projectHeader" className="ui vertical masthead center aligned basic segment">
    			<div className="ui text container">
    				<h1 className="ui header" style={{color : "#ffffff"}}>Service, That Will Move You</h1>
    				<h2>SPARCS에서 런칭되고 있는 서비스, 프로젝트들을 만나보세요!</h2>
    			</div>
    		</div>
    		<div className="ui container">
    			<div className="ui stackable center aligned three column grid">

            {this.state.projects && this.state.projects.map((project, index) => {
              return <ProjectCard
                        key={index}
                        title={project.title}
                        pm={project.pm}
                        explanation={project.explanation} 
                        homepage_url={project.homepage_url}
                        github_url={project.github_url}/>
            })}
  
    			</div>
    		</div>
        <Footer />
    	</div>
    )
  }
}

export default Projects
