import React, { Component } from "react"
import { Card, Image } from "semantic-ui-react"

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
        <div id="album_breadcrumb" className="album index">
          <button className="ui red attached button album" id="newAlbum">Upload</button>
          <div className="yellow rectangle" style={{width: "251px"}}>Album</div>
          <div className="yellow triangle"></div>
        </div>

        <div id="album-card-grid">
          <Card>
            <Image alt="Image" src={"https://dev.sparcs.org/static/img_1234.jpeg"}/>
            <Card.Header>2019년</Card.Header>
            <Card.Meta>
              <span className="data">3 Events, 17 Photos</span>
            </Card.Meta>
          </Card>

          <Card>
            <Image alt="Image" src={"https://dev.sparcs.org/static/img_1234.jpeg"}/>
            <Card.Header>2019년</Card.Header>
            <Card.Meta>
              <span className="data">3 Events, 17 Photos</span>
            </Card.Meta>
          </Card>
          <Card>
            <Image alt="Image" src={"https://dev.sparcs.org/static/img_1234.jpeg"}/>
            <Card.Header>2019년</Card.Header>
            <Card.Meta>
              <span className="data">3 Events, 17 Photos</span>
            </Card.Meta>
          </Card>
          <Card>
            <Image alt="Image" src={"https://dev.sparcs.org/static/img_1234.jpeg"}/>
            <Card.Header>2019년</Card.Header>
            <Card.Meta>
              <span className="data">3 Events, 17 Photos</span>
            </Card.Meta>
          </Card>

        </div>
      </div>

      </React.Fragment>
    )
  }
}


export default Album
