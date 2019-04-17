import React, { Component } from "react"
import Navigation from "./components/Navigation"
import "./../styles/album.scss"

/**
 * Album
 */

class Album extends Component {

  render() {
    return (
      <React.Fragment>
      <Navigation />
      <div id="photo">

      앨범
      </div>

      </React.Fragment>
    )
  }
}


export default Album
