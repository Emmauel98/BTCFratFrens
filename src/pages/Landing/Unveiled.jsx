import { motion } from "framer-motion";
import unveiled from "../../assets/unveiled.svg";
import unveiled2 from "../../assets/unveiled2.svg";
import "./landing.css";



const Unveiled = () => {
  const device_width = window.outerWidth;


  return (
    <>
      <div
        className={`lg:flex gap-[2rem] bg-black lg:pt-[5rem] pb-20
        backgroundImage
      `}
      >
        <div
          className="pt-[9%] lg:px-0 px-[1.8rem] md:px-[3rem]
            lg:pb-0 pb-[2rem] lg:pl-[5%]
            "
        >
          <motion.h1
            className="literata lg:text-[2rem] md:text-[3rem] text-[2rem]
            text-white
              "
            whileInView={{
              x: 0,
              transition: {
                duration: 0.5,
                bounce: true,
              },
            }}
            initial={{
              x: -55,
            }}
          >
            Unveiled on Bitmap
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
            Data elegance in a single inscription – captured and encoded
            seamlessly in JSON format. Each Art is elegantly inscribed and
            seamlessly encoded in the widely recognized JSON format.
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
            <motion.img src={unveiled2} alt="" 
             whileInView={{
                scale: 1,
                originX: 0.5,
                opacity: 1,
                transition:{
                  duration: .5,
                  bounce: true
                }
              }}
               initial={{scale: 0.5, originX: 0, opacity: 0}}
            />
          </div>
        ) : (
          <motion.img src={unveiled} alt="" className="lg:pr-[5rem] md:pl-[25%]"
          whileInView={{
            scale: 1,
            originX: 0.5,
            opacity: 1,
            transition:{
              duration: .5,
              bounce: true
            }
          }}
           initial={{scale: 0.5, originX: 0, opacity: 0}}
           />
        )}
        {/* <img src={code} alt="" /> */}
      </div>
    </>
  );
};

export default Unveiled;
