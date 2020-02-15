import React from 'react';
import logo from '../img/logo.svg'
import google from '../img/google-play-badge.svg';
import apple from '../img/apple-store-badge.svg';
import {Row, Col, Container, Image} from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import '../css/CornerRibbon.css'
import '../css/RoadTrivia.css';


function RoadTrivia() {
  return (
    <Container>
    <div className="App">
      <div class="corner-ribbon top-right sticky green shadow">Pre Alpha v0.2</div>
        <img src={logo} className="App-logo" alt="logo" />
        <header className="App-header">
        <p>
          Download from the App Store and Google Play Store
        </p>
         </header>
        <Row className="align-items-center">
          <Col>

          <Image  src={google} onClick={() => {
            window.open("https://play.google.com/apps/testing/com.masesk.roadtrivia", "_blank")
          }} alt="Download from Google Play Store" className="download-app" />
           <Image data-tip="App is in pre-alpha and currently only available for Android Devices" 
            src={apple} alt="Download from Apple App Store" className="download-app disabled" />
          </Col>
        </Row>
        <footer className="bottom-nav">
        © Mases Krikorian. 2020.
        </footer>
    </div>
    <ReactTooltip />
    </Container>
  );
}

export default RoadTrivia;
