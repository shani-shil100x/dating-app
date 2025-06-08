import React from "react";
import Trusted from "@/components/Trusted";
import { HiChevronDoubleRight } from "react-icons/hi";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center flex-col  py-10 gap-10">
      <div className="flex items-center gap-6 px-8">
        {/* right */}
        <div className="flex flex-col items-center w-[50vw] gap-5">
          <h1 className="text-7xl text-center">Discover Your Perfect Match</h1>
          <p className="text-[16px] w-[97%] kaushan text-start">
            Find meaningful connections with like-minded individuals who share
            your values and aspirations. Our exclusive platform offers a curated
            experience for discerning singles seeking lasting relationships.
          </p>
          <div className="flex items-center gap-5">
            <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lime-500/50 dark:shadow-lime-800/80 rounded-full px-4 py-1.5 cursor-pointer">
              Find your match
            </button>
            <button className="rounded-full cursor-pointer text-gray-900 hover:text-white border-2 border-gray-200 hover:bg-white focus:ring-2 focus:outline-none focus:ring-gray-300 px-4 py-1.5 dark:border-gray-600 dark:text-gray-400 dark:hover:text-black dark:hover:bg-gray-300 dark:focus:ring-gray-600">
              Explore Profiles
            </button>
          </div>
        </div>
        {/* left side */}
        <div className=" w-[50%]">
          <div className="relative top-3">
            <img
              src="/dating.jpg"
              alt="dating"
              className="w-fit h-fit rounded-3xl object-cover bg-no-repeat"
            />
            <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(to_top_left,#210F37,transparent)] "></div>
            <button className="group px-3 py-4 cursor-pointer absolute left-[16rem] bottom-6 border-0  flex  items-center  justify-center bg-transparent text-white h-auto  w-30  overflow-hidden  transition-all duration-100">
              <span className=" group-hover:w-full absolute left-0  h-full w-1 rounded-md border-l-3 border-r-0 border-3 border-white transition-all duration-500 "></span>
              <p className=" group-hover:opacity-0 kaushan group-hover:-translate-x-full absolute translate-x-0 transition-all duration-200 text-[18px] ">
                Find someone?
              </p>

              <span className=" group-hover:translate-x-0 kaushan group-hover:opacity-100 absolute translate-x-full opacity-0  transition-all duration-200 text-[18px]">
                Join Free!
              </span>

              <span
                className=" group-hover:w-full absolute right-0 h-full w-1 rounded-md border-l-0 border-r-4  border-3 border-fuchsia-800 transition-all  duration-500
                "
              ></span>
            </button>
          </div>
        </div>
      </div>
      {/* fro Premium Features cards */}
      <div className=" w-[85%] -mb-5">
        <h3 className="text-start font-bold ">Premium Features</h3>
      </div>
      <div className="flex items-center gap-8 max-h-1/2 max-w-6xl px-6 ">
        {/* for cards */}
        <div className="flex flex-col backdrop-blur-md  bg-white/10 border border-white/30 rounded-xl shadow-lg p-2 max-w-45 max-h-1/2 text-white ">
          <div className="mb-2 w-full">
            <img
              src="/match.jpg"
              alt=""
              className="object-cover bg-no-repeat rounded-2xl w-full "
            />
          </div>
          <h2 className="text-sm font-semibold mb-2">Matching Algorithm</h2>
          <p className="text-[14px]">
            Our advanced algorithm ensures compatibility by analyzing your
            preferences and values.
          </p>
        </div>

        {/* 1 */}
        <div className="flex flex-col backdrop-blur-md  bg-white/10 border border-white/30 rounded-xl shadow-lg p-2 max-w-45 max-h-1/2 text-white ">
          <div className="mb-2 w-full">
            <img
              src="/Verified.jpg"
              alt=""
              className="object-cover bg-no-repeat rounded-2xl w-full "
            />
          </div>
          <h2 className="text-sm font-semibold mb-2">Verified Profiles</h2>
          <p className="text-[14px]">
            Connect with genuine individuals through our rigorous verification
            process.
          </p>
        </div>
        {/* 2 */}
        <div className="flex flex-col backdrop-blur-md  bg-white/10 border border-white/30 rounded-xl shadow-lg p-2 max-w-45 max-h-1/2 text-white ">
          <div className="mb-2 w-full">
            <img
              src="/event.jpg"
              alt=""
              className="object-cover bg-no-repeat rounded-2xl w-full "
            />
          </div>
          <h2 className="text-sm font-semibold mb-2">Exclusive Events</h2>
          <p className="text-[14px]">
            Attend curated events designed for meaningful interactions in
            sophisticated settings.
          </p>
        </div>
        {/* 3 */}
        <div className="flex flex-col backdrop-blur-md  bg-white/10 border border-white/30 rounded-xl shadow-lg p-2 max-w-45 max-h-1/2 text-white ">
          <div className="mb-2 w-full">
            <img
              src="/Concierge.jpg"
              alt=""
              className="object-cover bg-no-repeat rounded-2xl w-full "
            />
          </div>
          <h2 className="text-sm font-semibold mb-2">Concierge Service</h2>
          <p className="text-[14px]">
            Enjoy personalized assistance from our dedicated team to enhance
            your dating journey.
          </p>
        </div>
      </div>

      {/* for success stories */}
      <div className=" w-[85%] -mb-5">
        <h3 className="text-start font-bold ">Success Stories</h3>
      </div>
      <div className="flex items-center gap-8 max-h-1/2 max-w-6xl px-6 ">
        {/* for Cards */}
        <div className="flex flex-col backdrop-blur-md  bg-white/10 border border-white/30 rounded-xl shadow-lg p-2 max-w-45 max-h-1/2 text-white ">
          <div className="mb-2 w-full">
            <img
              src="/c1.jpg"
              alt=""
              className="object-cover bg-no-repeat rounded-2xl w-full "
            />
          </div>
          <h2 className="text-sm font-semibold mb-2">Sarah & David</h2>
          <p className="text-[14px]">
            "I found my soulmate on Elite Hearts. The quality of connections is
            unmatched."
          </p>
        </div>
        <div className="flex flex-col backdrop-blur-md  bg-white/10 border border-white/30 rounded-xl shadow-lg p-2 max-w-45 max-h-1/2 text-white ">
          <div className="mb-2 w-full">
            <img
              src="/c6.jpg"
              alt=""
              className="object-cover bg-no-repeat rounded-2xl w-full "
            />
          </div>
          <h2 className="text-sm font-semibold mb-2">Emily & Mark</h2>
          <p className="text-[14px]">
            "The verified profiles gave me confidence, and I met someone truly
            special."
          </p>
        </div>
        <div className="flex flex-col backdrop-blur-md  bg-white/10 border border-white/30 rounded-xl shadow-lg p-2 max-w-45 max-h-1/2 text-white ">
          <div className="mb-2 w-full">
            <img
              src="/c3.jpg"
              alt=""
              className="object-cover bg-no-repeat rounded-2xl w-full "
            />
          </div>
          <h2 className="text-sm font-semibold mb-2">Jessica & Michael</h2>
          <p className="text-[14px]">
            "The exclusive events were a game-changer. I met my partner in a
            relaxed, elegant setting."
          </p>
        </div>
        <div className="flex flex-col backdrop-blur-md  bg-white/10 border border-white/30 rounded-xl shadow-lg p-2 max-w-45 max-h-1/2 text-white ">
          <div className="mb-2 w-full">
            <img
              src="/c2.jpg"
              alt=""
              className="object-cover bg-no-repeat rounded-2xl w-full "
            />
          </div>
          <h2 className="text-sm font-semibold mb-2">Sophia & Ethan</h2>
          <p className="text-[14px]">
            "I tried many apps, but only Heartify felt intentional and genuine.
            Now we’re inseparable."
          </p>
        </div>
      </div>
      {/* for trusted by tousand of peoples */}
      <div className=" w-[85%] -mb-5">
        <h3 className="text-start font-bold ">Trusted by Thousands</h3>
      </div>
      <Trusted />
      <div className="flex flex-col items-center gap-5">
        <h3 className="font-bold text-3xl">Ready to Find Your Match?</h3>
        <button className="rounded-full kaushan text-sm flex items-center justify-center gap-1 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80  px-4 py-1.5 ">
          Find Your Match
          <HiChevronDoubleRight />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
