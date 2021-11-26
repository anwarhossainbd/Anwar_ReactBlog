import React, {Component, Fragment} from 'react';
import TopNavigation from "../../Components/TopNavigation/TopNavigation";
import PageTop from "../../Components/PageTop/PageTop";
import Services from "../../Components/Services/Services";
import ContactSection from "../../Components/ContactSection/ContactSection";
import Footer from "../../Components/Footer/Footer";
import {Card, Col, Container, Row} from "react-bootstrap";

class ServicesPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>

                <TopNavigation title="Services"></TopNavigation>
                <PageTop pagetitle="My Services"></PageTop>


                <Container className="mt-5">


                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="cardOperation">
                                <Card.Img variant="top" className="cardImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwEXxlAVmcBidm-Kax-U57Jq4dY0IHaux9tg&usqp=CAU" />
                                <Card.Body>
                                    <h3 className="cardHeader">Web Design</h3>
                                    <div className="cardText">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.

                                    </div>
                                </Card.Body>

                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="cardOperation">
                                <Card.Img variant="top" className="cardImage" src="data:image/jpeg;base64,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" />
                                <Card.Body>
                                    <h3 className="cardHeader">Web Development</h3>
                                    <div className="cardText">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </div>
                                </Card.Body>

                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="cardOperation">
                                <Card.Img variant="top" className="cardImage" src="data:image/jpeg;base64,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" />
                                <Card.Body>
                                    <h3 className="cardHeader">IOS Development</h3>
                                    <div className="cardText">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </div>
                                </Card.Body>

                            </div>
                        </Col>
                    </Row>

                </Container>

                <ContactSection></ContactSection>
                <Footer></Footer>

            </Fragment>
        );
    }
}

export default ServicesPage;