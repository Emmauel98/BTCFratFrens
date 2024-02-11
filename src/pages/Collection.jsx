import "./pages.css";
import glowing from "../assets/group.svg";
import searchIcon from "../assets/searchIcon.svg";
import searchIcon2 from "../assets/searchIcon2.svg";
import NFT from "./NFT";
import { useState } from "react";
import NFTS from "../NFTData/NFT";
import Connect_Wallet from "../components/Connect_Wallet";

const Collection = () => {

  const [NFTsData , setNFTsData] = useState(NFTS);

  const searchNFTs = (e) =>{
    // const searchValue = (e.target.value).toUpperCase();
    // const filteredNFTs = NFTsData.filter( nft => nft.Body.toUpperCase().includes(searchValue));
    // const legitFilteredNFTs = filteredNFTs.length > 0 ? filteredNFTs : NFTS ;
    // setNFTsData(legitFilteredNFTs);
    // console.log(filteredNFTs);
    alert("This page is under edvelopment")
  };


  return (
    <>
      <div 
       className="bg-[#080808] relative
       ">
        <Connect_Wallet />
        <div className=" blur-3xl opacity-50 absolute">
          <img src={glowing} alt="" className=" rounded-full" />
        </div>
        <div>
          <div
            className="flex justify-center items-center relative
            lg:left-[9vw] lg:pt-[23vh] md:left-[13vw] md:pt-[12vh]
            left-[23vw] pt-[15vh]
          "
          >
            <img src={searchIcon} alt="" className="w-[30%] md:w-[20%] lg:w-[15%]" />
          </div>
          <div className="text-center">
            <h1 
            className="
            roboto lg:text-[2rem] font-bold md:text-[2rem]
            pb-3 text-[1.1rem]
            ">
              Explore BTCfratfrens Collection
            </h1> 
            <p 
             className="
             robot font-medium text-gray-500 lg:text-[1.2rem]
             px-[3rem] md:px-0
             ">
              Discover the Limited Edition World of BTCfratfrens – A Unique
              Collection of 250 JSON Frens <br /> Showcased Through Recursiverse
              Bitmaps Gallery.
            </p>
          </div>
        </div>
        <div 
         className="flex justify-center items-center mt-[2rem] 
         pb-[2rem] relative
         ">
          <input type="text" name="" placeholder="Enter Unique ID..." 
          className=" 
          placeholder:text-[#757575] bg-[#101013] lg:py-[.6rem]
           lg:w-[30%] rounded-lg lg:px-[5rem] opacity-60 ring-gray-400
           ring-1 md:py-[1.1vh] md:w-[45%] md:placeholder:text-[1.3rem]
           lg:placeholder:text-[1rem] md:px-[4rem] py-[1.2vh] w-[70%]
           px-[3rem]
          "
          onChange={searchNFTs}
          />
          <img src={searchIcon2} alt="" 
          className=" lg:w-[1.5%] absolute lg:left-[37vw] md:left-[30vw]
          md:w-[3%] w-[6%] left-[18vw]
          "
          />
        </div>
         <NFT NFTS={NFTsData} />
      </div>
    </>
  );
};

export default Collection;
