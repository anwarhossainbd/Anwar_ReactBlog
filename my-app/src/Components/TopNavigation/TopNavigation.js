import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import "../../Assets/Css/Custom.css"
import Navlogo from "../../Assets/Images/navlogo.svg";
import NavlogoScroll from "../../Assets/Images/navlogoScroll.svg";

class TopNavigation extends Component {

    constructor() {
        super();
        this.state={

            NavTitle:"navTitle",
            navBackground:"navBackground",
            navImage:[Navlogo],
            navBarLetter :"navLetter",
        }
    }


    onScroll=()=>{
        if (window.scrollY>100){
            this.setState({ NavTitle:"navTitleScroll",navBackground:"navBackgroundScroll",navBarLetter:"navLetterScroll",navImage:NavlogoScroll})
        }
        else if (window.scrollY<100){
            this.setState({ NavTitle:"navTitle",navBackground:"navBackground",navBarLetter:"navLetter",navImage:Navlogo })
        }
    }


    componentDidMount() {
        window.addEventListener(
            'scroll',this.onScroll
        )
    }


    render() {
        return (
            <Fragment>
                <Navbar collapseOnSelect className={this.state.navBackground} fixed="top" expand="lg"  variant="dark">
                    <Container>
                        <Navbar.Brand href="#home" className={this.state.NavTitle}><img  src={this.state.navImage} /> Md.Anwar Hossain</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link className={this.state.navBarLetter} href="#deets">HOME</Nav.Link>
                                <Nav.Link className={this.state.navBarLetter}  href="#memes">SERVICES</Nav.Link>
                                <Nav.Link className={this.state.navBarLetter}  href="#memes">COURSES</Nav.Link>
                                <Nav.Link  className={this.state.navBarLetter} href="#memes">PORTFOLIO</Nav.Link>
                                <Nav.Link className={this.state.navBarLetter}  href="#memes">CONTACT</Nav.Link>
                                <Nav.Link className={this.state.navBarLetter}  href="#memes">ABOUT</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </Fragment>
        );
    }
}

export default TopNavigation;