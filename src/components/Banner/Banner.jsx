import React from "react";
import BannerImg from "../../assets/bookbanner.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200 mt-12 p-10 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={BannerImg} className="max-w-lg rounded-lg drop-shadow-xl" />
        <div className=" mt-4">
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf!
          </h1>

          <div className="flex justify-center items-center lg:justify-start">
            <button className="btn bg-green-500 text-white mt-12">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
