import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";


class ContactSection extends Component {

    render() {
            return (
                <Fragment>
                    <Container className="mt-5">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <h1 className="serviceName">Quick Connect</h1>

                                <Form>
                                    <Form.Group>
                                        <Form.Label className="serviceDescription">Name</Form.Label>
                                        <Form.Control id="name" type="text"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="serviceDescription">Email Address</Form.Label>
                                        <Form.Control id="email" type="email"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="serviceDescription">Message</Form.Label>
                                        <Form.Control id="message" as="textarea" rows="3"/>
                                    </Form.Group>
                                    <br />


                                    <Button variant="primary" onClick={this.submitData}>
                                        Submit
                                    </Button>
                                </Form>

                            </Col>


                            <Col lg={6} md={6} sm={12}>
                                <h1 className="serviceName responsiveit">Discuss Now</h1>
                                <p className="serviceDescription"> Village: Bagrite</p>
                                <p className="serviceDescription"> Thana: Katiadi</p>
                                <p className="serviceDescription"> Zilla: Kishoreganj</p>
                                <p className="serviceDescription"><FontAwesomeIcon
                                    icon={faEnvelope}/> mdanwarhossain1996bd@gmail.com</p>
                                <p className="serviceDescription"><FontAwesomeIcon icon={faPhone}/> 01783473583
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }

}

export default ContactSection;