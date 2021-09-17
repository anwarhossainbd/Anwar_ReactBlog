import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Video extends Component {
    render() {
        return (
            <Fragment>


                <Container className="pb-5">
                    <Row >
                        <Col lg={12} md={12} sm={12} className="text-center ">

                            <Card className="videoBack pb-4">
                                <Card.Header className="text-justify headerOfCard">How I Do ?</Card.Header>


                                <Card.Text className="techonologyText mt-5">

                                    <p className="videoDes m-3 text-justify">{this.state.video_description}</p>


                                    <span className="videocom" style={{color: "blue"}}>   <FontAwesomeIcon
                                        onClick={this.handleShow} icon={faPlayCircle}/>  </span>
                                </Card.Text>


                            </Card>

                        </Col>
                    </Row>
                </Container>


            </Fragment>
        );
    }
}

export default Video;