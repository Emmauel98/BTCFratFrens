import web3_girl from "../../assets/web3_girl.svg";
import Connect_Wallet from "../../components/Connect_Wallet";
import "./Landing.css";
import flare from "../../assets/flare.svg";
// import { useEffect, useRef } from "react";

const Hero_section = () => {
  // const starRef = useRef(null);

  // const createStar = () =>{

  //   const star = document.createElement('div');
  //   star.className = 'star';
  //   star.style.width = `${Math.random() * 3}px`;
  //   star.style.height = star.style.width;
  //   star.style.left = `${Math.random() * 100}vw`;
  //   star.style.top = `${Math.random() * 100}vh`;
  //   return star;
  // };

  // const generateStars = (star)=>{
  //   for (let i = 0; i < star; i++) {
  //     const star = createStar();
  //     // document.body.appendChild(star);
  //     starRef.current.appendChild(star);
  //   }
  // };

  // useEffect(()=>{
  //   generateStars(100);
  // })

  return (
    <>
      <div className="bg-black overflow-x-hidden overflow-y-hidden h-[100vh] relative">
        {/* ref={starRef} */}
        <div className="relative">
          <div
            className="absolute w-[120vw] lg:h-[137vh] bg-gray-400 lg:rounded-b-full 
           bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[10%] 
           border-b border-gray-100 lg:top-[-20rem] md:left-[-7.5rem] md:rounded-b-full
           md:top-[-7rem] rounded-b-full left-[-3rem] top-[-8vh] h-[102vh]
           "
          >
            <div className="flex justify-center items-center pt-[20vh] opacity-40">
              <img src={flare} alt="" />
            </div>
          </div>
          <div className="relative">
            <Connect_Wallet />
          </div>
          <div
            className="md:flex justify-center items-center
            pt-[15vh] gap-[1rem] relative md:mb-5 mb-2"
          >
            <div
              className=" flex justify-center items-center
             relative order-2 pt-[5vh]
             "
            >
              <img src={web3_girl} alt="" />
            </div>
            <h1
              className=" text-center lg:text-[4rem] lg:pl-[15vw] 
              dotGothics md:text-[3rem] md:pl-[30%] text-[2.8rem]
              relative md:left-0 text-white pt-5
              "
            >
              BTCFratFrens
            </h1>
            {/* <div 
             className=" flex justify-center items-center
             relative 
             ">
              <img src={web3_girl} alt="" />
            </div> */}
          </div>
          <p className="dosis text-center md:text-[2rem] relative font-black
           text-white text-[1.1rem] leading-10 pt-2 pb-14 md:leading-[4rem]">
            A limited edition of 888 json Frens displayed via <br />{" "}
            Recursiverse bitmaps gallery.
          </p>
          <div
            className="dosis flex justify-center relative
            items-center gap-[1rem] m-[1rem] pb-[10vh]
            dotGothics
            "
          >
            <button
              className="ring-[#6C6767] md:px-10 ring-1 px-7 py-2 lg:text-[1.2rem]
               rounded-3xl md:text-[1.5rem] hover:ring-[#DA7A22] bg-transparent"
            >
              Mint BFFs
            </button>
            <button
              className="ring-[#6C6767] md:px-10 ring-1 px-7 py-2 lg:text-[1.2rem]
               rounded-3xl md:text-[1.5rem] hover:ring-[#DA7A22] bg-transparent"
            >
              View BFFs
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_section;
