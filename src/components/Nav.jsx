import { Ellipsis } from "lucide-react";
import React from "react";
// import { ReactComponent as More } from "../assets/352548_three_dots_icon.svg";

export default function Nav() {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4 mt-0 ml-0
                 bg-[rgba(18,15,41,0.4)] backdrop-blur-md
                 text-white z-50">
      <div className="flex items-center gap-8">
        <img
          src="src\assets\Jumper Brand Assets\PNG\logo_jumper_dark_horizontal.png"
          alt="Logo"
          className="w-35 h-8"
        />
        <p className="font-bold text-[18px] px-4 py-2 rounded-4xl hover:bg-[rgb(47,29,77,0.4)] cursor-pointer">Exchange</p>
        <p className="font-bold text-[18px] px-4 py-2 rounded-4xl hover:bg-[rgb(47,29,77,0.4)] cursor-pointer">Missions</p>
      </div>

      <div className="flex items-center gap-4 mr-10">
        <p className="rounded-4xl bg-[#653ba3] px-4 py-2 font-bold text-[18px] hover:bg-[#3e2366] cursor-pointer">Connect</p>
        <Ellipsis />
      </div>
    </div>
  );
}
