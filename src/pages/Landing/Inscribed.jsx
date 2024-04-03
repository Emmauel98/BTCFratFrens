import { motion } from "framer-motion";
import code from "../../assets/code.svg";
import code2 from "../../assets/code2.svg";
import "./landing.css";


const Inscribed = () => {
  const device_width = window.outerWidth;
  console.log(device_width);
  return (
    <>
    <h1 
          className="pl-[5vw] dotGothics 
          md:text-[2rem] py-[1rem] w-screen
          text-white text-[1.2rem] bg-black
          ">
          1st Underground <span className="bg-[#D9D9D9] text-black p-1 rounded-md">Bitmap</span> Project
        </h1>
      <div className="lg:flex gap-[2rem] bg-black lg:pt-[5rem]  backgroundImage"
      // style={{ backgroundImage: `url(${bg})`, }}
      >
        <div
          className=" order-2 pt-[9%] lg:px-0 px-[1.8rem] md:px-[3rem]
          lg:pb-0 pb-[2rem]
          "
        >
          <motion.h1
            className="literata lg:text-[2rem] md:text-[3rem] text-[2rem]
            text-white
            "
            whileInView={{
              x: 0,
              transition:{
                duration: .5,
                bounce: true,
              }
            }}
            initial={{
              x: 55,
            }}
          >
            Inscribed as json
          </motion.h1>{" "}
          <br />
          <motion.p className="inter tracking-widest leading-9 text-white"
          whileInView={{
            y: 0,
            x: 0,
            opacity: 1,
            transition:{
              duration: .8,
              bounce: true,
            }
          }}
          initial={{
            y: 15,
            opacity: 0,
          }}
          >
            The data for the art is encoded in json and inscribed on the <br />
            Blockchain. The art is uploaded on a full bitmap block, and <br />{" "}
            unlocks the NATs within.
          </motion.p>{" "}
          <br />
          <button
            className="bg-[#0A7CFF] rounded-3xl
           drop-shadow-[-1px_6px_8px_rgba(10,124,225,1)]
           hover:bg-blue-600 px-[2rem] py-[1rem] 
           md:text-[1.2rem] mb-[2rem] text-white
           "
          >
            Learn more
          </button>
        </div>
        {device_width <= 428 ? (
          <div className="flex justify-center items-center">
            <motion.img src={code2} alt="" 
            whileInView={{
              scale: 1,
              opacity: 1,
              transition:{
                duration: .5,
                bounce: true
              }
            }}
             initial={{scale: 0.5, opacity: 0}}
            />
          </div>
        ) : (
          <motion.img src={code} alt=""
           whileInView={{
            scale: 1,
            opacity: 1,
            transition:{
              duration: .5,
              bounce: true
            }
          }}
           initial={{scale: 0.5, opacity: 0}}
           />
        )}
        {/* <img src={code} alt="" /> */}
      </div>
    </>
  );
};

export default Inscribed;
