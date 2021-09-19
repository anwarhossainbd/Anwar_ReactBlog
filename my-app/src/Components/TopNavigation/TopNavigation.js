import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import "../../Assets/Css/Custom.css";
import "../../Assets/Css/responsive.css"
import Navlogo from "../../Assets/Images/navlogo.svg";
import NavlogoScroll from "../../Assets/Images/navlogoScroll.svg";

import {NavLink} from 'react-router-dom';

class TopNavigation extends Component {

    constructor() {
        super();
        this.state={

            NavTitle:"navTitle",
            navBackground:"navBackground",
            navImage:[Navlogo],
            navBarLetter :"navLetter",
            variant:"dark" ,
        }
    }


    onScroll=()=>{
        if (window.scrollY>100){
            this.setState({variant:"light", NavTitle:"navTitleScroll",navBackground:"navBackgroundScroll",navBarLetter:"navLetterScroll",navImage:NavlogoScroll})
        }
        else if (window.scrollY<100){
            this.setState({variant:"dark", NavTitle:"navTitle",navBackground:"navBackground",navBarLetter:"navLetter",navImage:Navlogo })
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
                <title>{this.props.title}</title>
                <Navbar collapseOnSelect className={this.state.navBackground} fixed="top" expand="lg"  variant={this.state.dark}>
                    <Container>
                        <Navbar.Brand href="#home" className={this.state.NavTitle}><img  src={this.state.navImage} /> Md.Anwar Hossain</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}} className={this.state.navBarLetter} to="/">HOME</NavLink> </Nav.Link>
                                <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}} className={this.state.navBarLetter}  to="/servicepage">SERVICES</NavLink> </Nav.Link>
                                <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}} className={this.state.navBarLetter}  to="/CoursesPage">COURSES</NavLink>  </Nav.Link>
                                <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}}  className={this.state.navBarLetter} to="/PortfolioPage">PORTFOLIO</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}} className={this.state.navBarLetter}  to="/ContactPage">CONTACT</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}} className={this.state.navBarLetter}  to="/AboutPage">ABOUT</NavLink></Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </Fragment>
        );
    }
}

export default TopNavigation;