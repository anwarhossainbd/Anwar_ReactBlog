
import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";

class ClientReviews extends Component {
    render() {
        let settings = {
            autoplaySpeed: 3000,
            autoplay:true,
            dots: true,
            infinite: true,
            speed: 3000,
            vertical:true,
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>

                <Container className="text-center">

                    <h1 className=" headerTitle mb-5 ">CLIENT SAYS</h1>

                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="carouselImg" src="https://www.iknowhair.com/wp-content/uploads/Medium-Hairstyles-For-Men-004.jpg"/>
                                    <h2 className="carouselTitle">Web Development</h2>
                                    <p className="carouselDes">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="carouselImg" src="https://www.iknowhair.com/wp-content/uploads/Medium-Hairstyles-For-Men-004.jpg"/>
                                    <h2 className="carouselTitle">Web Development</h2>
                                    <p className="carouselDes">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="carouselImg" src="https://www.iknowhair.com/wp-content/uploads/Medium-Hairstyles-For-Men-004.jpg"/>
                                    <h2 className="carouselTitle">Web Development</h2>
                                    <p className="carouselDes">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="carouselImg" src="https://www.iknowhair.com/wp-content/uploads/Medium-Hairstyles-For-Men-004.jpg"/>
                                    <h2 className="carouselTitle">Web Development</h2>
                                    <p className="carouselDes">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="carouselImg" src="https://www.iknowhair.com/wp-content/uploads/Medium-Hairstyles-For-Men-004.jpg"/>
                                    <h2 className="carouselTitle">Web Development</h2>
                                    <p className="carouselDes">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="carouselImg" src="https://www.iknowhair.com/wp-content/uploads/Medium-Hairstyles-For-Men-004.jpg"/>
                                    <h2 className="carouselTitle">Web Development</h2>
                                    <p className="carouselDes">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>

            </Fragment>
        );
    }
}

export default ClientReviews;