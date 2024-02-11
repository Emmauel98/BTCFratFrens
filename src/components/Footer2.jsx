import twitter from "../assets/twitter.svg";

const Footer2 = () => {
  return (
    <div className=" bg-black pb-[1rem] md:pb-[2rem]">
        <div className="pt-[5rem] flex gap-[1rem] justify-center items-cente">
          <img src={twitter} alt="" className="relative top-[-1.5rem]" />
          <h3><a href="" className="Inter">Follow us on Twitter</a></h3>
        </div>
        <hr className="mt-[2rem] border-[.1rem] border-[#383737]" />
        <p className="text-center pt-[1rem] eaglelake">© 2023 Your Company Name. All rights reserved.</p>
     </div>
  );
}; 

export default Footer2;