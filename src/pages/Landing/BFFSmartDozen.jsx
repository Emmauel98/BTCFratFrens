import "./landing.css";
import bulletin from "../../assets/bulletin.svg";

const list = [
  "Immutable On-Chain Json",
  "Bitmap 3D Gallery",
  "No Royalties, No Drama",
  "Value-Added Services.",
  "Low Supply for Scarcity and Collectability",
  "Focused on creatingu value.",
  "No royalties or fees on your BFF",
  `Full IP rights on your BFF's artwork.`,
];

const BFFSmartDozen = () => {
  return (
    <>
      <div className="text-center bg-black">
        <h1 className="dotGothics lg:text-[3rem] md:text-[3rem] text-white">BFF Smart Dozens</h1>
        <br /><br />
        <ul className="eagleLake md:text-[1.5rem] text-[.8rem] ml-1">
          {list.map((list, index) => {
            return (
              <div key={index} className="flex gap-2 lg:px-[8%] md:px-[6%] px-[3%] pb-5 text-white">
                <img src={bulletin} alt="" className="lg:w-[2%] md:w-[4%] w-[6%]" />
                <li className="text-white">{list}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default BFFSmartDozen;
