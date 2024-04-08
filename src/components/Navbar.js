import React from "react";
const Navbar = () => {
  return (
    <div className="bg-black/90">
      <div className="h-[5rem] flex items-center justify-between px-4 md:max-w-[90vw] mx-auto">
        {/* Left */}
        <div className="flex items-center">
          <div className="text-white font-bold">
            <p className="text-[21px] pl-2">Virtual Connect</p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center">
          <ul className="text-white font-bold flex items-center gap-4 cursor-pointer">
            <li><a href="https://github.com/adithya-vedhamani/Virtual-Connect">GitHub</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
  