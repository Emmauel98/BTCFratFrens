import PropTypes from "prop-types";
import icon_cance from "../assets/icon_cance.svg";

const SingleNFT = ({ NftImage, NftRef, showSingleNft }) => {
  return (
    <>
      <div 
       className=" fixed top-0 z-50 bg-[#121213] 
       w-full h-screen pt-[2rem] 
       "
       onClick={()=> showSingleNft(false)}
       >
        <div className=" absolute left-[10vw] cursor-pointer">
            <img src={icon_cance} alt="" className=" lg:w-[40%]" />
        </div>
        <div className="flex justify-center items-center w-full">
          <pre className="text-left text-[.8rem]">
            <code>{JSON.stringify(NftRef, null, 4)}</code>
          </pre>
        </div>
        <div className="flex justify-center items-center w-full mt-[2rem]">
            <img src={NftImage} alt="" className="rounded-lg" />
        </div>
      </div>
    </>
  );
};

SingleNFT.propTypes = {
  NftImage: PropTypes.string.isRequired,
  NftRef: PropTypes.object.isRequired,
  showSingleNft: PropTypes.func.isRequired,
};

export default SingleNFT;
