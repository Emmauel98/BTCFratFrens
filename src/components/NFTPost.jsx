import NFTImages from "../NFTData/NFTImages";
import logo_framer from "../assets/logo-framer.svg";
import link_framer from "../assets/link_framer.png";
import PropTypes from "prop-types";

const NFTPost = ({ nftref, desc, getNftRef, showSingleNft }) => {
  const image = NFTImages[Math.floor(Math.random() * NFTImages.length)];

  const SingleNftFunc = (nftref, image) =>{
    getNftRef(nftref,image);
    showSingleNft(true);
  }

  return (
    <>
      <div
        className="bg-gradient-to-r from-black
       via-gray-800 to-gray-600 lg:w-[28vw] relative mx-[1rem]
       mt-[5rem] md:mx-[2rem] mb-[2rem] rounded-2xl cursor-pointer
      "
      >
        <div className="relative">
          <img
            src={image}
            alt=""
            className="rounded-2xl relative 
           w-full"
          />
        </div>
        <div className="px-[2rem] pb-[2rem] pt-[1rem]">
          <button
            className="
             flex gap-[.4rem]  bg-transparent ring-gray-400 ring-1
             rounded-3xl lg:p-[.5rem]
            "
          >
            <img src={logo_framer} alt="" />
            bff_32
          </button>
          <p className="py-[1rem]">
            {nftref} <br /> {`desc: ${desc}`}
          </p>
          <div className="flex gap-[.8rem] ml-[-1rem]">
            <button
              className="
                 flex gap-[.1rem] bg-transparent ring-gray-400 ring-1
                 rounded-3xl  lg:w-[13vw] lg:h-[8vh] w-[36vw] p-[.3rem]
                 justify-center items-center
                 "
            >
              <img src={link_framer} alt="" />
              Purchase Now
            </button>
            <button
              className="
                 flex gap-[.1rem] bg-transparent ring-gray-400 ring-1
                 rounded-3xl lg:w-[13vw] lg:h-[8vh] w-[36vw] p-[.3rem]
                 justify-center items-center
                 "
                 onClick={()=>SingleNftFunc(nftref, image)}
            >
              <img src={link_framer} alt="" />
              View Listing
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

NFTPost.propTypes = {
  nftref: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  getNftRef: PropTypes.func.isRequired,
  showSingleNft: PropTypes.func.isRequired,
};

export default NFTPost;
