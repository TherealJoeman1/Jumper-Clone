import { FuelIcon, ArrowLeftRightIcon } from "lucide-react";
import { useState } from "react";
import TokenSelector from "./TokenSelector";
import Swapper from "./Swapper";

export default function Section() {
  const [selectToken, setSelectToken] = useState(null);

  return (
    <div className="flex justify-center items-starts min-h-[93vh] mt-[100px]">
      <div className="bg-[#2d1f43] h-[110px] w-[60px] rounded-4xl shadow-md mr-[30px] p-1 flex flex-col items-center justify-center gap-1">
        <ArrowLeftRightIcon className="bg-[#594e6a] rounded-full p-4  text-white h-13 w-13" />
        <FuelIcon className=" rounded-full p-4 m text-white h-13 w-13" />
      </div>
      {!selectToken ? (
        <Swapper setSelectToken={setSelectToken} />
      ) : (
        <TokenSelector setSelectToken={setSelectToken} type={selectToken} />
      )}
    </div>
  );
}
