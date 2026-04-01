import React from "react";
import { CiPlay1 } from "react-icons/ci";
import playBtn from "../../assets/Play.png";
import dot from "../../assets/dot.png";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="grid lg:grid-cols-2 items-center justify-center my-8 md:my-20 gap-10 md:gap-20">
      {/* Text Section */}
      <div className="space-y-5">
        <div class="badge badge-soft badge-primary py-5 px-4 rounded-full md:text-lg font-medium">
          <img src={dot} alt="" /> New: AI-Powered Tools Available
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold dark-text">
          Supercharge Your Digital Workflow
        </h1>
        <p className="light-text text-lg md:text-2xl">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex flex-col md:flex-row items-start gap-3 mt-7">
          <button className="btn custom-btn text-lg font-semibold rounded-full px-6 py-7 ">
            Explore Products
          </button>
          {/* Custom Outline Button */}
          <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] flex items-center justify-center rounded-full p-0.5">
            <button className="btn text-lg font-semibold rounded-full px-6 py-7 hover:bg-violet-100">
              <span className="gradient-text flex items-center justify-center gap-2">
                <img src={playBtn} alt="" />
                Watch Demos
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className="flex justify-center lg:justify-end">
        <img
          src={bannerImg}
          alt="Some dude pressing a high-tech touch-screen with his finger."
        />
      </div>
    </div>
  );
};

export default Banner;
<h1>Banner</h1>;
