

import React, {Component,Fragment} from 'react';
import  {Col,Container,Row,Card} from "react-bootstrap";

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
                                            <h2 className="hundred">100</h2>
                                            <h3>Total Client</h3>
                                            <hr className="bg-white w-25 pb-1 centerClass" />
                                        </Col>

                                        <Col >
                                            <h2>  100</h2>
                                            <h3>Total Client</h3>
                                            <hr className="bg-white w-25 pb-1 centerClass" />
                                        </Col>

                                    </Row>



                                </Col>
                                <Col lg={4} md={6} sm={12}>

                                    <div className="cardOfSummery">

                                        <h3 className="headerOfCard">How I work ?</h3>
                                        <h4 className="cardFont">  Requirement Gathering</h4>
                                        <h4 className="cardFont" >   System Analysis</h4>
                                        <h4 className="cardFont">   Coding Testing</h4>
                                        <h4 className="cardFont pb-5">   Implementation</h4>

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