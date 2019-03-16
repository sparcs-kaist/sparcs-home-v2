import React from "react"
import "./../styles/aboutus.css"
import what_image from "./../static/test.jpg"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

const AboutUs = () => {

  return (
    <div>
    <Navigation/>
    <div id="main-contents">
  	<div id="home">
      <div className="section">
        <div className="ui inverted vertical masthead center aligned basic segment main-window ">
          <div className="blind">
          </div>
          <div className="intro-text-box ui container">
            <h1 className="brand-name">SPARCS</h1>
            <h2 className="copy-text">
              <span className="one-line">We make <span className="text-highlight">service</span>,</span>
              <span className="one-line">you just <span className="text-highlight">use</span> it.</span>
            </h2>
          </div>
        </div>
        <div className="ui vertical masthead center aligned basic segment what-window">
          <div className="what-text-box ui container">
            <div className="ui two column stackable grid">
              <div className="five wide column">
                <div className="what-we-do-container">
                  <h2 className="what-we-do">WHAT</h2>
                  <h2 className="what-we-do">WE</h2>
                  <h2 className="what-we-do">DO</h2>
                </div>
                <div className="what-under"></div>
              </div>
              <div className="eleven wide column">
                <div className="what-container">
                  <img className="what-img" src={what_image} alt="img" />
                  <div className="what-box">
                    <h1 className="what-title">SEMINARS</h1>
                    <a href="/seminars"><div className="what-button">Go to page ></div></a>
                    <br/>
                    <span className="what-description">개발의 기본부터 최신 기술의 동향, 스타트업 경험을 비롯한 일상 생활 등 다양한 주제로 세미나를 열고 있습니다.</span>
                  </div>
                </div>
                <div className="what-container">
                  <img className="what-img" src={what_image} alt="img" />
                  <div className="what-box">
                    <h1 className="what-title">PROJECTS</h1>
                    <a href="/projects"><div className="what-button">Go to page ></div></a>
                    <br/>
                    <span className="what-description">국내외 컴퓨터 사용자들 및 KAIST 학우들을 위한 서비스를 디자인하고 제작하기 위해 많은 프로젝트를 진행하고 있습니다.</span>
                  </div>
                </div>
                <div className="what-container">
                  <img className="what-img" src={what_image} alt="img" />
                  <div className="what-box">
                    <h1 className="what-title">WORKSHOP</h1>
                    <br/>
                    <span className="what-description">개발과 프로젝트 이외에도 딸기파티, MT 및 홈커밍 이벤트를 포함하는 많은 친목 활동이 진행됩니다.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui inverted vertical masthead center aligned basic segment service-window ara-window">
          <div className="ara-text-box ui services">
            <span className="ara-brief">오랜 역사를 자랑하는</span>
            <span className="ara-brief">KAIST 학내 온라인 커뮤니티</span>
            <h1 className="brand-name service-name">ARA / 아라</h1>
            <br/>
            <a className="service-link" href="http://ara.kaist.ac.kr"><span className="ara-link"><u>GO TO ARA PAGE</u></span></a>
            <br/>
            <br/>
            <p className="service-description"> &nbsp;&nbsp;&nbsp;&nbsp;ARA는 KAIST 학내 온라인 커뮤니티 서비스로, 하루 평균 접속량 2천 명을 자랑합니다. 중고 장터 게시판, 구인 구직 게시판을 포함한 다양한 게시판에 많은 양의 게시물과 다양한 학사 공지가 올라옵니다. 다양한 KAIST 학우들이 자유롭게 소통할 수 있는 공간, ARA를 방문해 주세요. 2017년 8월, 리뉴얼된 ARA가 출시됩니다.</p>
          </div>
        </div>
      </div>
  
      <div className="ui inverted vertical masthead center aligned basic segment otl-window service-window section">
        <div className="ara-text-box ui services">
          <span className="ara-brief">시간표 작성을 도와주고</span>
          <span className="ara-brief">개설 과목을 한 눈에 보여주는 서비스</span>
          <h1 className="brand-name service-name">OTL PLUS</h1>
          <br/>
          <a className="service-link" href="http://otlplus.sparcs.org"><span className="ara-link"><u>GO TO OTL PLUS PAGE</u></span></a>
          <br/>
          <br/>
          <p className="service-description"> &nbsp;&nbsp;&nbsp;&nbsp;OTL PLUS는 매 학기 개설되는 KAIST의 대부분의 과목들에 대한 정보를 쉽게 검색할 수 있게 도와줍니다. 과목들을 개인 시간표에 추가할 수 있으며 여러 개의 시간표를 한 번에 관리할 수 있습니다. 뿐만 아니라, 해당 과목에 대한 실라버스 및 해당 과목을 수강한 여러 학우들의 수강 후기를 볼 수 있어 수강 신청에 있어 많은 편의를 제공합니다. 시험을 망칠 게 뻔하니 미리 와서 다음 학기를 준비하세요.</p>
        </div>
      </div>
      <div className="ui inverted vertical masthead center aligned basic segment mirror-window service-window section">
        <div className="ara-text-box ui services">
          <span className="ara-brief">국내 및 아시아 지역에</span>
          <span className="ara-brief">오픈소스 소프트웨어를 공급하는 미러링 서비스</span>
          <div className="mirror service-name"><h1 className="brand-name">거울</h1></div>
          <br/>
          <a className="service-link" href="http://ftp.kaist.ac.kr"><span className="ara-link"><u>GO TO MIRROR PAGE</u></span></a>
          <br/>
          <br/>
          <p className="service-description"> &nbsp;&nbsp;&nbsp;&nbsp;거울은 오픈소스 미러링 서비스로, 전세계에 퍼져 있는 최신버전의 오픈소스 소프트웨어들을 대한민국을 포함한 아시아 국가들에게 공급합니다. 기존의 먼 곳에 위치해 있는 외국 서버들로부터 직접 다운로드 받을 필요없이, 가까운 위치의 서버에서 다운로드 받을 수 있다는 큰 장점이 있습니다. 현재 거울은 엄청난 서비스 접속량을 자랑하며 아시아 지역의 주요 미러링 서비스 중 하나로 자리하고 있습니다.</p>
        </div>
      </div>
  	</div>
    </div>
    <Footer />
    </div>
  )
}

export default AboutUs
