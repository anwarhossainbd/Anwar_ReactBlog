import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { faFacebook,faYoutube } from '@fortawesome/free-brands-svg-icons'
import  {faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Footer extends Component {
    render() {
        return (
            <Fragment>

                <Container>
                    <hr className="footerMarginTop"/>
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                            <h1 className="footerTitle">Follow Me</h1>
                            <a href="" className="socialLink" target="_blank"><FontAwesomeIcon  icon={faFacebook} /> Facebook</a><br/>
                            <a href="" className="socialLink" target="_blank"><FontAwesomeIcon  icon={faYoutube} /> Youtube</a>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                            <h1 className="footerTitle">Address</h1>
                            <p className="carouselDes">Katiadi,Kishoreganj</p>
                            <p className="carouselDes"><FontAwesomeIcon  className="" icon={faEnvelope} /> mdanwarhossain1996bd@gmail.com</p>
                            <p className="carouselDes"><FontAwesomeIcon  className="" icon={faPhone} />  0178473583</p>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                            <h1 className="footerTitle">Information</h1>
                            <a className="footerLink">About Me</a><br/>
                            <a className="footerLink">Contact Me</a><br/>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                            <h1 className="footerTitle">Legal</h1>
                            <a  className="footerLink">Refund Policy</a><br/>
                            <a  className="footerLink">Terms And Condition</a><br/>
                            <a  className="footerLink">Privacy Policy</a>
                        </Col>

                    </Row>
                </Container>




            </Fragment>
        );
    }
}

export default Footer;