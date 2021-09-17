import TopBanner from "./Components/TopBanner/TopBanner";
import Services from "./Components/Services/Services";
import TopNavigation from "./Components/TopNavigation/TopNavigation";
import Analysis from "./Components/Analysis/Analysis";
import Summary from "./Components/Summary/Summary";
import RecentProject from "./Components/RecentProject/RecentProject";
import Courses from "./Components/Courses/Courses";
import Video from "./Components/Video/Video";



function App() {
  return (
    <div >

        <TopBanner />
        <Services />
        <TopNavigation />
        <Analysis />
        <Summary />
        <RecentProject />
        <Courses />
        <Video />


    </div>
  );
}

export default App;
