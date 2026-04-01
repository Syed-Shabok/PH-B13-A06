import { Suspense } from "react";
import "./App.css";
import Tools from "./components/tools/Tools";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import InfoSrtip from "./components/infoStrip/InfoSrtip";
import Steps from "./components/steps/Steps";
import PricingSection from "./components/pricingSection/PricingSection";
import Footer from "./components/footer/Footer";

const fetchToolsData = async () => {
  const res = await fetch("/toolsData.json");

  return res.json();
};

function App() {
  const toolsPromise = fetchToolsData();

  return (
    <>
      <Navbar />

      <div className="container mx-auto px-5 lg:px-10">
        <Banner />
      </div>

      <InfoSrtip />

      <div className="container mx-auto  px-5 lg:px-10">
        <Suspense
          fallback={
            <div className="w-full flex justify-center min-h-[50vh]">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          }
        >
          <Tools toolsPromise={toolsPromise} />
        </Suspense>
      </div>

      <div className="bg-[#F9FAFC]">
        <Steps />
      </div>

      <div className="container mx-auto  px-5 lg:px-10">
        <PricingSection />
      </div>

      <Footer />
    </>
  );
}

export default App;
