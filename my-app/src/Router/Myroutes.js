import React, {Component, Fragment} from 'react';
import {  Route, Switch } from 'react-router-dom';
import HomePage from "../Pages/HomePage/HomePage";
import ServicesPage from "../Pages/ServicesPage/ServicesPage";
import CoursesPage from "../Pages/CoursesPage/CoursesPage";
import PortfolioPage from "../Pages/PortfolioPage/PortfolioPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import AboutPage from "../Pages/AboutPage/AboutPage";


class Myroutes extends Component {
    render() {
        return (
            <Fragment>

                <Switch>
                    <Route exact={true} path="/" component={HomePage}/>
                    <Route exact={true} path="/servicepage" component={ServicesPage}/>
                    <Route exact={true} path="/CoursesPage" component={CoursesPage}/>
                    <Route exact={true} path="/PortfolioPage" component={PortfolioPage}/>
                    <Route exact={true} path="/ContactPage" component={ContactPage}/>
                    <Route exact={true} path="/AboutPage" component={AboutPage}/>
                </Switch>

            </Fragment>
        );
    }
}

export default Myroutes;