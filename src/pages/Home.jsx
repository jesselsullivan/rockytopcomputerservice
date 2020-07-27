import React, { Component } from 'react'
import { Image, Container, Row, Col } from 'react-bootstrap'
import { MDBBtn } from "mdbreact";
import backdropImage from '../images/logo.png'
import ico1 from '../images/fetimg2.png'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
        <div id="content">
            <div className="backdrop_wrapper mask d-flex">
                <Image id="backdrop" src={backdropImage}/>
            </div>
            <Container fluid id="content-wrapper">
                <Row>
                    <Col md={8} id="left-content">
                        <div id="title-box">
                            <Row>
                                <Col><h2 id="title-text">Knoxville's Best Solution for Computer Repair</h2></Col>
                            </Row>
                            <Row>
                                <Col><hr /></Col>
                            </Row>
                            <Row>
                                <Col></Col>
                                <Col xs={6}><p id="title-info">Give us a call and let us know how we can help you or your business with any IT needs</p></Col>
                                <Col></Col>
                            </Row>
                        </div>
                        <br />
                        <Container id="services-box">
                            <Row className="service">
                              <Col sm={4}><Image className="service-image" src={ico1}/></Col>
                              <Col sm={8} className="service-text">
                                <Row className="service-title"><h4>On Site Support</h4></Row>
                                <Row className="service-info"><p>Our technicians can come to your business and get things back up and running fast! We also offer a 
                                full range of IT solutions for both your home and business 
                                needs in and around Knoxville, TN.</p></Row>
                              </Col>
                            </Row>
                            <Row className="service">
                              <Col sm={4}><Image className="service-image" src={ico1}/></Col>
                              <Col sm={8} className="service-text">
                                <Row className="service-title"><h4>Network Consulting</h4></Row>
                                <Row className="service-info"><p>Our professionals will work closely with you to bring
                                 your network to life. Whether you are setting up a brand new network or fixing misconfiguration, 
                                 we can help</p></Row>
                              </Col>
                            </Row>
                            <Row className="service">
                              <Col sm={4}><Image className="service-image" src={ico1}/></Col>
                              <Col sm={8} className="service-text">
                                <Row className="service-title"><h4>Remote Support</h4></Row>
                                <Row className="service-info"><p>Our remote repair service makes it easy for everyone with computer problems,
                                 no matter how far you're out of town.</p></Row>
                              </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col md={4} id="right-content">
                        <Container id="contact-us-box">
                            <div id="contact-title"><h2>What Can We Do For You?</h2></div>
                            <br />
                            <div id="contact-info">
                                <div id="button-wrapper">
                                <MDBBtn outline className="contact-button"><a href="tel:+18653157774"><strong>Call Us</strong></a></MDBBtn>
                                <br />
                                <MDBBtn outline className="contact-button"><a href="mailto:jesse@rockytopcomputerservice.com"><strong>Email Us</strong></a></MDBBtn>
                                <br />
                                </div>
                                <hr />
                                <strong>Hours</strong>
                                <p>
					                Monday-Friday: 8:00am - 6:00pm<br />
					                Saturday: 9:00am - 2:00pm
				                </p>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}

