import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

class RecentProject extends Component {
    render() {
        return (
            <Fragment>

                <Container className="text-center">
                    <h1 className="headerTitle mb-5">RECENT PROJECTS</h1>
                    <Row>

                        <Col className="mb-5" sm={12} md={6} lg={4}>
                            <Card className="projectCard">
                                <img height="220px" className="p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxCuM3A7RPNcTtZ5LpelxLcmQ0atiuGH6lJg&usqp=CAU"/>
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Frontend Project</Card.Title>
                                    <Card.Text className="projectCardDes textLeft">
                                        There are a few web and versatile application improvement structures to browse and React Native is one of them. React JS is an explanatory, proficient, and adaptable open-source JavaScript library used to construct basic, quick, and versatile front-end and single-page improvement applications.

                                        Building intelligent client faces regardless of the advancement stage is without a doubt a dreary and precarious undertaking. It requires indefatigable exertion, complete devotion, and legitimate focus to fostering every segment of a site.

                                    </Card.Text>

                                    <Button variant="primary">Click Here</Button>


                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="mb-5" sm={12} md={6} lg={4}>
                            <Card className="projectCard">
                                <img height="220px" className="p-3" src="data:image/png;base64,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"/>
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Laravel Project</Card.Title>
                                    <Card.Text className="projectCardDes textLeft">
                                        There are a few web and versatile application improvement structures to browse and React Native is one of them. React JS is an explanatory, proficient, and adaptable open-source JavaScript library used to construct basic, quick, and versatile front-end and single-page improvement applications.

                                        Building intelligent client faces regardless of the advancement stage is without a doubt a dreary and precarious undertaking. It requires indefatigable exertion, complete devotion, and legitimate focus to fostering every segment of a site.

                                    </Card.Text>

                                    <Button variant="primary">Click Here</Button>


                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="mb-5" sm={12} md={6} lg={4}>
                            <Card className="projectCard">
                                <img height="220px" className="p-3" src="data:image/jpeg;base64,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"/>
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">NodeJs Project</Card.Title>
                                    <Card.Text className="projectCardDes textLeft">
                                        There are a few web and versatile application improvement structures to browse and React Native is one of them. React JS is an explanatory, proficient, and adaptable open-source JavaScript library used to construct basic, quick, and versatile front-end and single-page improvement applications.

                                        Building intelligent client faces regardless of the advancement stage is without a doubt a dreary and precarious undertaking. It requires indefatigable exertion, complete devotion, and legitimate focus to fostering every segment of a site.

                                    </Card.Text>

                                    <Button variant="primary">Click Here</Button>


                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default RecentProject;