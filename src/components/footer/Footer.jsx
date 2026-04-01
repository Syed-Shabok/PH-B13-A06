import React from "react";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-white py-10">
      {/* Top Section */}
      <div className="container mx-auto px-5 lg:px-10 grid grid-cols-2 md:grid-cols-5 items-center justify-between gap-6">
        {/* Logo */}
        <div className="space-y-3 col-span-2 md:col-span-1">
          <h1 className="font-extrabold text-4xl">DigiTools</h1>
          <p className="">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div className="md:ml-auto">
          <ul className="space-y-3">
            <li className="font-bold text-lg mb-2">Product</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div className="md:ml-auto">
          <ul className="space-y-3">
            <li className="font-bold text-lg mb-2">Company</li>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div className="md:ml-auto">
          <ul className="space-y-3 ">
            <li className="font-bold text-lg">Resources</li>
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="md:ml-auto">
          <p className="font-semibold mb-2">Social Links</p>
          <div className="flex gap-4">
            <img
              className="w-6 cursor-pointer hover:scale-110 transition"
              src={linkedin}
              alt="LinkedIn Icon"
            />

            <img
              className="w-6 cursor-pointer hover:scale-110 transition"
              src={facebook}
              alt="Twitter Icon"
            />

            <img
              className="w-6 cursor-pointer hover:scale-110 transition"
              src={twitter}
              alt="Facebook Icon"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 lg:px-10">
        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="text-[8px] md:text-sm text-gray-400 flex justify-between">
          <p>© 2026 Digitools. All rights reserved.</p>

          <div className="flex gap-5">
            <a>Privacy Policy </a>
            <a>Terms of Service </a>
            <a>Cookies </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
