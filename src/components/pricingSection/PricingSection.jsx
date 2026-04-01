import React from "react";

import { IoMdCheckmark } from "react-icons/io";

const PricingSection = () => {
  return (
    <div className="my-20 container mx-auto px-5 lg:px-10 py-10 space-y-20">
      <div className="space-y-3">
        <h1 className="text-5xl font-bold text-center">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg text-center">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="card flex flex-col p-6 border border-gray-300 rounded-3xl shadow-sm gap-4 bg-[#F9FAFC]">
          <div>
            {/* Title */}
            <h1 className="text-3xl font-bold dark-text">Starter</h1>

            {/* Description */}
            <p className="text-lg light-text">Perfect for getting started</p>
          </div>

          {/* Price */}
          <h3 className="font-bold text-4xl">
            $0
            <span className="light-text font-normal text-lg">/Month</span>
          </h3>

          {/* Features */}
          <ul className="text-lg space-y-2">
            <li className="flex items-center gap-1">
              <IoMdCheckmark size={23} className="text-green-500" /> Access to
              10 free tools
            </li>
            <li className="flex items-center gap-1">
              <IoMdCheckmark size={23} className="text-green-500" /> Basic
              templates
            </li>
            <li className="flex items-center gap-1">
              <IoMdCheckmark size={23} className="text-green-500" /> Community
              support
            </li>
            <li className="flex items-center gap-1">
              <IoMdCheckmark size={23} className="text-green-500" /> 1 project
              per month
            </li>
          </ul>

          {/* Button */}
          <button className="btn custom-btn text-lg font-bold rounded-full px-7 py-8 w-full mt-auto">
            Get Started Free
          </button>
        </div>

        {/* Card 2 */}
        <div className="relative card flex flex-col p-6 border border-gray-300 rounded-3xl shadow-sm gap-4 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-[#FFFFFF]">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 badge badge-soft badge-warning xl:text-lg p-5 rounded-full font-semibold border-yellow-300">
            Most Popular
          </div>

          <div>
            {/* Title */}
            <h1 className="text-3xl font-bold">Pro</h1>

            {/* Description */}
            <p className="text-lg ">Best for professionals</p>
          </div>

          {/* Price */}
          <h3 className="font-bold text-4xl">
            $29
            <span className=" font-normal text-lg">/Month</span>
          </h3>

          {/* Features */}
          <ul className="text-lg space-y-2">
            <li className="flex items-center gap-1">
              <IoMdCheckmark size={23} /> Access to all premium tools
            </li>
            <li className="flex items-center gap-1">
              <IoMdCheckmark size={23} /> Unlimited templates
            </li>
            <li className="flex items-center gap-1">
              <IoMdCheckmark size={23} /> Priority support
            </li>
            <li className="flex items-center gap-1">
              <IoMdCheckmark size={23} /> Unlimited projects
            </li>
            <li className="flex items-center gap-1">
              <IoMdCheckmark size={23} /> Cloud sync
            </li>
            <li className="flex items-center gap-1">
              <IoMdCheckmark size={23} /> Advanced analytics
            </li>
          </ul>

          {/* Button */}
          <button className="btn text-lg font-bold rounded-full px-7 py-8 w-full mt-2 bg-white">
            <span className="gradient-text">Start Pro Trail</span>
          </button>
        </div>

        {/* Card 3 */}
        <div className="card flex flex-col p-6 border border-gray-300 rounded-3xl shadow-sm gap-4 bg-[#F9FAFC]">
          <div>
            {/* Title */}
            <h1 className="text-3xl font-bold dark-text">Enterprise</h1>

            {/* Description */}
            <p className="text-lg light-text">For teams and businesses</p>
          </div>

          {/* Price */}
          <h3 className="font-bold text-4xl mt-auto">
            $99
            <span className="light-text font-normal text-lg">/Month</span>
          </h3>

          {/* Features */}
          <ul className="text-lg space-y-2">
            <li className="flex items-center gap-1">
              <IoMdCheckmark size={23} className="text-green-500" /> Everything
              in Pro
            </li>
            <li className="flex items-center gap-1">
              <IoMdCheckmark size={23} className="text-green-500" /> Team
              collaboration
            </li>
            <li className="flex items-center gap-1">
              <IoMdCheckmark size={23} className="text-green-500" /> Custom
              integrations
            </li>
            <li className="flex items-center gap-1">
              <IoMdCheckmark size={23} className="text-green-500" /> Dedicated
              support
            </li>
            <li className="flex items-center gap-1">
              <IoMdCheckmark size={23} className="text-green-500" /> SLA
              guarantee
            </li>
            <li className="flex items-center gap-1">
              <IoMdCheckmark size={23} className="text-green-500" />
              Custom branding
            </li>
          </ul>

          {/* Button */}
          <button className="btn custom-btn text-lg font-bold rounded-full px-7 py-8 w-full mt-2">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
