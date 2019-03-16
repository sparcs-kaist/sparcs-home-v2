import React from "react"

const Footer = () => {

  return (
      <div id="footer" className="ui inverted vertical footer segment">
      <div className="ui center aligned container">
        <div className="ui horizontal inverted small divided link list">
          <a href="/rules" className="item">회칙</a>
          <a href="/" className="item">만든 사람들</a>
          <a href="/admin" className="item">관리자</a>
        </div>
      </div>
    </div>
  )

}

export default Footer
