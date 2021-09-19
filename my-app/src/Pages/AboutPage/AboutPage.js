import React, {Component, Fragment} from 'react';
import TopNavigation from "../../Components/TopNavigation/TopNavigation";
import PageTop from "../../Components/PageTop/PageTop";
import AboutDescription from "../../Components/AboutDescription/AboutDescription";
import Footer from "../../Components/Footer/Footer";

class AboutPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>

                <TopNavigation title="About"></TopNavigation>
                <PageTop pagetitle="About Me"></PageTop>
                <AboutDescription></AboutDescription>
                <Footer></Footer>

            </Fragment>
        );
    }
}

export default AboutPage;