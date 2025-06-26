import ProgramsCard from "../components/ProgramsCard";
import SideBar from "../components/SideBar";
import TopNavBar from "../components/TopNavbar";
import WelcomeBanner from "../components/WelcomeBanner";
import WidgetManager from "../widgets/WidgetManager";
import AnalysisCard from "../components/AnalyticsCard";
import ApplicationsCard from "../components/ApplicationsCard";
import GroupCalls from "../widgets/GroupCalls";
import MentorsCard from "../components/MentorsCard";
import ActivityCard from "../components/ActivityCards";


export default function DashboardLayout(
    {children}:
     Readonly<{children: React.ReactNode}>)
      {
    return (
     
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      
      <div className="w-full flex-none md:w-64 bg-violet-700">
        <SideBar />
      </div>
      <main className="flex-grow p-4 md:overflow-y-auto md:p-8">
        <TopNavBar/>
        <WidgetManager/>
        <WelcomeBanner/>
        <div className="flex">
          <div className="1">
          <ProgramsCard/>
          <AnalysisCard/>
          </div>
          <div className="2">

          <GroupCalls/>
          <div className="flex gap-2">
          <ApplicationsCard/>
          <div className="block">
          <MentorsCard/>
          <ActivityCard/>
          </div>
          </div>
          </div>
        
        </div>
       
       
        {children}
      </main>
    </div>
    );
  };
  