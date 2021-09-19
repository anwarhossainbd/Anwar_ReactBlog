import React, {Component, Fragment} from 'react';
import TopNavigation from "../../Components/TopNavigation/TopNavigation";
import PageTop from "../../Components/PageTop/PageTop";
import Footer from "../../Components/Footer/Footer";
import Courses from "../../Components/Courses/Courses";
import RecentProject from "../../Components/RecentProject/RecentProject";
import AllProjects from "../../Components/AllProjects/AllProjects";

class PortfolioPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>

                <TopNavigation title="Portfolio"></TopNavigation>
                <PageTop pagetitle="Portfolio"></PageTop>
                <AllProjects></AllProjects>
                <Footer></Footer>

            </Fragment>
        );
    }
}

export default PortfolioPage;