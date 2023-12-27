import { useEffect, useRef, useState } from "react";
import NFTPost from "../components/NFTPost";
import Pagination from "../components/Pagination";
import PropTypes from "prop-types";
import twitter from "../assets/twitter.svg";
import "./pages.css";
import SingleNFT from "../components/SingleNFT";
import NFTImages from "../NFTData/NFTImages";


const NFT = ({NFTS}) => {
    const [currentPage, setCurrentPage] =  useState(1);
    const NFTSPerPage = 6;
    const parentDivRef = useRef();
    const [ showNft, setShowNft] = useState(true);
    const [ NftImage , setnftImage] = useState();
    const [ NftRef , setNftRef] = useState();


    const getNftRef = (value , image) =>{
      const filter = NFTS.filter( nft => nft.ref === value );
      const data = filter[0];
      setNftRef(data);
      setnftImage(image)
      console.log(image, "Image");
      console.log(data);
    };
   

    // useEffect(() => {
    //   // This will run after the component has rendered and the state has been updated
    //   // alert(NftRef);
    // }, [NftRef]); 

    // get current NFTS
    const indexOfLastNFTS =  currentPage * NFTSPerPage;
    const indexOfFirstNFTS = indexOfLastNFTS - NFTSPerPage;
    const currentNFTSPage = NFTS.slice(indexOfFirstNFTS, indexOfLastNFTS);

    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber);
        window.scrollTo({
          top: 1132/2,
          behavior: 'smooth' // You can use 'auto' instead of 'smooth' for an instant scroll
        });
    };
   
    const showSingleNft = (value) =>{
      setShowNft(value);
    }

  return (
    <>
     <div 
      className="bg-[#121213] relative py-[1rem] 
      rounded-t-3xl mx-[.3rem]">
         {
          showNft ? <SingleNFT NftImage={NftImage} NftRef={NftRef} showSingleNft={showSingleNft} /> : null
        }
        <div className="grid lg:grid-cols-3 md:grid-cols-2" ref={parentDivRef}>
           {
             currentNFTSPage.map((NFT, index) => {
              const {ref,desc} = NFT;
              const nftref = ref ? ref : "bff";
              return (
                <NFTPost key={index} nftref={nftref} desc={desc} getNftRef={getNftRef} showSingleNft={showSingleNft}  />
              )
             })
           }
        </div>
        <Pagination NFTSPerPage={NFTSPerPage} totalNFTS={NFTS.length} paginate={paginate} /> 
        <div className="mt-[5rem] flex gap-[1rem] justify-center items-center">
          <img src={twitter} alt="" />
          <h3><a href="" className="Inter">Follow us on Twitter</a></h3>
        </div>
        <hr className="mt-[2rem] border-[.1rem] border-[#383737]" />
        <p className="text-center pt-[1rem] eaglelake">© 2023 Your Company Name. All rights reserved.</p>
     </div>
    </>
  )
};

NFT.propTypes = {
  NFTS: PropTypes.array.isRequired,
}

export default NFT;