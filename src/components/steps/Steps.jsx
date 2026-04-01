import React from "react";
import user from "../../assets/user.png";
import box from "../../assets/package.png";
import rocket from "../../assets/rocket.png";

const Steps = () => {
  return (
    <div className="my-20 container mx-auto px-5 lg:px-10 py-40 space-y-20">
      <div className="space-y-3">
        <h1 className="text-5xl font-bold text-center">
          Get Started in 3 Steps
        </h1>
        <p className="text-lg text-center">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="border border-gray-300 shadows-sm rounded-2xl flex flex-col items-center justify-center p-6 space-y-5 text-center bg-[#FFFFFF]">
          <div className="badge bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full w-10 h-10 text-[#FFFFFF] font-medium ml-auto">
            01
          </div>

          <div className="bg-violet-200 w-fit p-8 rounded-full">
            <img src={user} alt="User Icon" />
          </div>

          <h1 className="text-2xl font-bold">Create User</h1>
          <p className="mb-10 text-lg">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-300 shadows-sm  rounded-2xl flex flex-col items-center justify-center p-6 space-y-5 text-center bg-[#FFFFFF]">
          <div className="badge bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full w-10 h-10 text-[#FFFFFF] font-medium ml-auto">
            02
          </div>

          <div className="bg-violet-200 w-fit p-8 rounded-full">
            <img src={box} alt="User Icon" />
          </div>

          <h1 className="text-2xl font-bold">Choose Products</h1>
          <p className="mb-10 text-lg">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-300 shadows-sm  rounded-2xl flex flex-col items-center justify-center p-6 space-y-5 text-center bg-[#FFFFFF]">
          <div className="badge bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full w-10 h-10 text-[#FFFFFF] font-medium ml-auto">
            03
          </div>

          <div className="bg-violet-200 w-fit p-8 rounded-full">
            <img src={rocket} alt="User Icon" />
          </div>

          <h1 className="text-2xl font-bold">Start Creating</h1>
          <p className="mb-10 text-lg">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
