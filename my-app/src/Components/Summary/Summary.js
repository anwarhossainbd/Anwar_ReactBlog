

import React, {Component,Fragment} from 'react';
import  {Col,Container,Row,Card} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup';

import VisibilitySensor from "react-visibility-sensor";



class Summary extends Component {



    render() {

        return (
            <Fragment>

                <Container fluid={true} className="topFixedSummery mt-5 p-0">
                    <div className="topSummeryOverlay">
                        <Container >
                            <Row>
                                <Col lg={8} md={6} sm={12}>

                                    <Row className="summeryText" >
                                        <Col>
                                            <h2 className="hundred">
                                                <CountUp start={0} end={100}  duration={1.20} >
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} >
                                                            <span ref={countUpRef} />

                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h2>
                                            <h3>Total Client</h3>
                                            <hr className="bg-white w-25 pb-1 centerClass" />
                                        </Col>

                                        <Col >
                                            <h2>
                                                <CountUp start={0} end={100}  duration={1.20} >
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} >
                                                            <span ref={countUpRef} />

                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h2>
                                            <h3>Total Client</h3>
                                            <hr className="bg-white w-25 pb-1 centerClass" />
                                        </Col>

                                    </Row>



                                </Col>
                                <Col lg={4} md={6} sm={12}>

                                    <div className="cardOfSummery">

                                        <h3 className="headerOfCard">How I work ?</h3>
                                        <h4 className="cardFont" > <span style={{color:"green"}}> <FontAwesomeIcon icon={faCheckCircle} /></span>  Requirement Gathering</h4>
                                        <h4 className="cardFont" > <span style={{color:"green"}}> <FontAwesomeIcon icon={faCheckCircle} /></span>   System Analysis</h4>
                                        <h4 className="cardFont"> <span style={{color:"green"}}> <FontAwesomeIcon icon={faCheckCircle} /></span>   Coding Testing</h4>
                                        <h4 className="cardFont pb-5"> <span style={{color:"green"}}> <FontAwesomeIcon icon={faCheckCircle} /></span>    Implementation</h4>

                                    </div>


                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>

            </Fragment>
        );
    }
}

export default Summary;