import React, {Component, Fragment} from 'react';
import TopBanner from "../../Components/TopBanner/TopBanner";
import Services from "../../Components/Services/Services";
import TopNavigation from "../../Components/TopNavigation/TopNavigation";
import Analysis from "../../Components/Analysis/Analysis";
import Summary from "../../Components/Summary/Summary";
import RecentProject from "../../Components/RecentProject/RecentProject";
import Courses from "../../Components/Courses/Courses";
import Video from "../../Components/Video/Video";
import ClientReviews from "../../Components/ClientReviews/ClientReviews";
import Footer from "../../Components/Footer/Footer";

class HomePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>

                <TopBanner />
                <Services />
                <TopNavigation title="Home" />
                <Analysis />
                <Summary />
                <RecentProject />
                <Courses />
                <Video />
                <ClientReviews />
                <Footer />


            </Fragment>
        );
    }
}

export default HomePage;