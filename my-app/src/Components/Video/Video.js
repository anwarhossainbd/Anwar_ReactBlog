import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row,Card} from "react-bootstrap";

import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { Player, BigPlayButton,LoadingSpinner  } from 'video-react';
import 'video-react/dist/video-react.css';
import * as PropTypes from "prop-types"; // import css

function VolumeMenuButton(props) {
    return null;
}

VolumeMenuButton.propTypes = {vertical: PropTypes.bool};

class Video extends Component {

    constructor() {
        super();
        this.state={
            show:false ,
        }
    }

    handleClose=()=>{
        this.setState({show:false})
    }

    handleShow=()=>{
        this.setState({show:true})
    }


    render() {
        return (
            <Fragment>


                <Container className="pb-5">
                    <Row>
                        <Col lg={12} md={12} sm={12} className="videoCard text-center">
                            <div>
                                <p className="videoCardTitle">How I Do</p>
                                <p className="videoCardDes">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project</p>
                                <p><FontAwesomeIcon onClick={this.handleShow} className="videoPlayBtn" icon={faPlayCircle} /></p>
                            </div>
                        </Col>
                    </Row>
                </Container>



                <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Video Section</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Player src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4">
                            <LoadingSpinner />
                            <BigPlayButton position="center" />
                            <VolumeMenuButton vertical />
                        </Player>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>


            </Fragment>
        );
    }
}

export default Video;