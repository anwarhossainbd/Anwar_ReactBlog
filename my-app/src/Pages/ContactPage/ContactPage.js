import React, {Component, Fragment} from 'react';
import TopNavigation from "../../Components/TopNavigation/TopNavigation";
import PageTop from "../../Components/PageTop/PageTop";
import ContactSection from "../../Components/ContactSection/ContactSection";
import Footer from "../../Components/Footer/Footer";

class ContactPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>

                <TopNavigation title="Contact"></TopNavigation>
                <PageTop pagetitle="Contact"></PageTop>
                <ContactSection></ContactSection>
                <Footer></Footer>


            </Fragment>
        );
    }
}

export default ContactPage;