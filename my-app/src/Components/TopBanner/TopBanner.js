import React, {Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";


const TopBanner = () => {
    return (
        <Fragment>

            <Container fluid={true} className="topFixedBanner p-0">
                <div className="topBannerOverlay">
                    <Container className="topContent">
                        <Row>
                            <Col className="text-center">
                                <h1 className="topTitle">Md.Anwar Hossain</h1>
                                <h3 className="topSubTitle" >Software Engineer</h3>
                                <Button variant="primary">More Info</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>

        </Fragment>
    );
};

export default TopBanner;