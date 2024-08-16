import LeftSection from "../left-section";
import Navbar from "../navbar";
import RightSection from "../rigt-section";

const DashboardSection = () => {
  return (
    <div className="flex flex-col h-full ">
      <Navbar />
      <div className="h-full mt-3 overflow-y-scroll ">
        <div className="flex flex-col lg:flex-row h-full ">
          {/* Left Section  */}
          <LeftSection />
          {/* Rigt section  */}
          <RightSection />
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
