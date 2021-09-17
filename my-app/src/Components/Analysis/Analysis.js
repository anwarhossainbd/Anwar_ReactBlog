import React, {Component, Fragment} from 'react';
import * as PropTypes from "prop-types";
import {BarChart, Bar, ResponsiveContainer, XAxis,Tooltip} from "recharts";
import {Col, Container, Row} from "react-bootstrap";


class Analysis extends Component {

    constructor() {
        super();
        this.state={

            data : [
                {
                    name: 'Laravel',
                    Rating: 90,

                },
                {
                    name: 'Php',
                    Rating: 60,

                },
                {
                    name: 'React',
                    Rating: 80,

                },
                {
                    name: 'Redux',
                    Rating: 40,

                },
                {
                    name: 'C#',
                    Rating: 80,
                },
                {
                    name: 'Mongodb',
                    Rating: 70,

                },
                {
                    name: 'MySql',
                    Rating: 90,

                },
            ]

        }

    }
    render() {
        return (
            <Fragment>

                <Container >
                    <h1 className=" headerTitle mb-5 text-center">Technology Used</h1>

                    <Row>
                        <Col lg={6} md={12} sm={12}>

                            <ResponsiveContainer >
                                    <BarChart width={100} height={450} data={this.state.data}>
                                        <XAxis dataKey="name" />
                                        <Tooltip />
                                        <Bar dataKey="Rating" fill="green" />

                                    </BarChart>
                            </ResponsiveContainer>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="techonologyText  pr-4 pl-4">

                            <p className="text-justify ">
                                To build native android apps i use Java as well as kotlin mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB.
                            </p>
                            <p className="text-justify ">
                                Firebase database system is used where it is necessary to provide realtime data flow facilities. I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application.
                            </p>
                            <p className="text-justify ">
                                According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section. Application security is a big deal for commercial application.I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.
                            </p>

                        </Col>
                    </Row>
                </Container>
                
            </Fragment>
        );
    }
}

export default Analysis;