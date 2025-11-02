import { ArrowDown, Settings, Wallet } from "lucide-react";

export default function Swapper({ setSelectToken }) {
  return (
    <div className="bg-[#120f29] h-[500px] w-[400px] rounded-2xl shadow-md ">
      <div className="flex justify-between items-center mt-[20px] w-[350px] ml-[25px] ">
        <h2 className="font-bold text-[24px]">Exchange</h2>
        <Settings className="bg-[#16214b] rounded-full p-2 text-white h-10 w-10" />
      </div>

      <div className="flex justify-center relative items-center flex-col ">
        <div
          onClick={() => setSelectToken("from")}
          className="bg-[#24203d] h-[100px] w-[350px] mt-[20px] rounded-2xl cursor-pointer"
        >
          <p className="pl-[10px] pt-[12px] font-bold text-[15px]">From</p>

          <div className="flex gap-[15px] items-center mt-[10px] w-[320px] ml-[15px]">
            <div className="bg-[#302b52] rounded-full p-2 h-10 w-10 relative">
              <div className="bg-[#302b52] absolute top-[33px] rounded-full p-2 h-3 w-3 ml-[18px] mt-[-8px] ring-2 ring-[#24203d]"></div>
            </div>
            <p className="text-[20px]">Select chain and token</p>
          </div>
        </div>

        <div className="absolute top-[112px] flex justify-center cursor-pointer">
          <ArrowDown className="bg-[#24203d] rounded-full p-2 text-white h-8 w-8 ring-4 ring-black" />
        </div>

        <div
          onClick={() => setSelectToken("to")}
          className="bg-[#24203d] h-[100px] w-[350px] mt-[20px] rounded-2xl cursor-pointer"
        >
          <p className="pl-[10px] pt-[12px] font-bold text-[15px]">To</p>

          <div className="flex gap-[15px] items-center mt-[10px] w-[320px] ml-[15px]">
            <div className="bg-[#302b52] rounded-full p-2 h-10 w-10 relative">
              <div className="bg-[#302b52] absolute top-[33px] rounded-full p-2 h-3 w-3 ml-[18px] mt-[-8px] ring-2 ring-[#24203d]"></div>
            </div>
            <p className="text-[20px]">Select chain and token</p>
          </div>
        </div>

        <div className="bg-[#24203d] h-[100px] w-[350px] mt-[20px] rounded-2xl">
          <p className="pl-[10px] pt-[12px] font-bold text-[15px]">Send</p>

          <div className="flex gap-[15px] items-center mt-[10px] w-[320px] ml-[15px]">
            <div className="bg-[#302b52] rounded-full p-2 h-10 w-10 relative">
              <div className="bg-[#302b52] absolute top-[33px] rounded-full p-2 h-3 w-3 ml-[18px] mt-[-8px] ring-2 ring-[#24203d]"></div>
            </div>
            <div className="flex flex-col leading-tight">
              <input className="text-[20px] font-bold bg-transparent outline-none border-none" type="number" placeholder="0"/>
              <p className="text-sm text-gray-400">$0.00</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between  items-center w-[350px] mt-[20px]">
          <p className="rounded-4xl bg-[#653ba3] px-23 py-3 font-bold text-[15px] hover:bg-[#3e2366] cursor-pointer">
            Connect Wallet
          </p>
          <Wallet className="bg-[#34225c] rounded-full p-3 text-white h-12 w-12" />
        </div>
      </div>
    </div>
  );
}
