import { EtherSymbol } from "ethers";
import { ArrowLeft, Bitcoin, BitcoinIcon, SearchIcon } from "lucide-react";
import React from "react";
import { useEffect, useRef } from "react";
import tokensData from "../../tokens.json";

export default function TokenSelector({ setSelectToken, type }) {
  const inputRef = useRef(null);

  useEffect(() => {
    // Automatically focus input on component mount
    inputRef.current?.focus();
  }, []);

  // 
  const tokens = tokensData.tokens["1"];


  

  return (
    <div className="flex items-center gap-3">
      <div className="bg-[#120f29] h-[900px] w-[400px] rounded-2xl shadow-md ">
        <div className="flex items-center mt-[18px] w-[380px] ml-[8px] gap-[70px]">
          <ArrowLeft
            onClick={() => setSelectToken(null)}
            className="hover:bg-[#7063822c] rounded-full p-2 text-white h-10 w-10  cursor-pointer"
          />

          <h2 className="font-bold text-[18px]">Exchange {type}</h2>
        </div>
        <div className=" mt-[10px] ml-[10px] mr-[10px] h-[50px] items-center justify-center  flex gap-3">
          <div className=" flex items-center bg-[#24203d] rounded-2xl h-[40px] w-[98%]">
            <SearchIcon className="ml-3 text-white h-5 w-5" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search name or paste address"
              className="w-[80%] h-full  outline-none pl-4 pt-2 text-white placeholder-gray-400 bg-transparent mb-2"
            />
          </div>
        </div>

        <div className=" h-screen mt-[5px] overflow-y-scroll p-[10px]">

          {tokens.map((token, index) => (

          <div key={index} className="hover:bg-[#24203d] cursor-pointer p-2 rounded-lg flex items-center gap-[18px]">
            <div className="h-[40px] w-[40px] rounded-full bg-[#f7931a] flex items-center justify-center">
              {<BitcoinIcon />}
            </div>
            <div>
              <h2 className="font-bold">{token.name}</h2>
              <h3 className="text-[10px] font-bold">{token.symbol}</h3>
            </div>
            
          </div>
          ))}

          




          
        </div>
      </div>

      <div className="bg-[#120f29] h-[900px] w-[250px] rounded-2xl shadow-md ">
        <div className=" mt-[10px] ml-[10px] mr-[10px] h-[50px] items-center justify-center  flex gap-3">
          <div className=" flex items-center bg-[#24203d] rounded-2xl h-[40px] w-[98%]">
            <SearchIcon className="ml-3 text-white h-4 w-4" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search network"
              className="w-[80%] h-full  outline-none pl-2 pt-2 text-white placeholder-gray-400 bg-transparent mb-2"
            />
          </div>

          
        </div>
          <div className="h-screen mt-[5px] overflow-y-scroll p-[3px]">

            <div className="hover:bg-[#24203d] cursor-pointer p-1.5 rounded-lg flex items-center gap-[14px]" >
            <div className="h-[33px] w-[33px] rounded-full bg-[#f7931a] flex items-center justify-center">
              <BitcoinIcon />
            </div>
            <div>
              <h2 className="font-bold">Ethereum</h2>
              
            </div>
            
          </div>
          </div>
      </div>
    </div>
  );
}
