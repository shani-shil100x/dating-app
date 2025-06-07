import React from "react";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center flex-col justify-center pt-20 pb-10 gap-10">
      <div className="flex items-center gap-6 px-4">
        {/* right */}
        <div className="flex flex-col items-center w-[50vw] gap-5">
          <h1 className="text-7xl text-center">Discover Your Perfect Match</h1>
          <p className="text-[14px] w-[85%] text-start">
            Find meaningful connections with like-minded individuals who share
            your values and aspirations. Our exclusive platform offers a curated
            experience for discerning singles seeking lasting relationships.
          </p>
          <div className="flex items-center gap-5">
            <button className="text-black px-4 py-1 bg-amber-300 rounded-full">
              Find your match
            </button>
            <button className="rounded-full border border-white px-4 py-1">
              Explore Profiles
            </button>
          </div>
        </div>
        {/* left side */}
        <div className=" w-[50%]">
          <div className="w-[25rem] relative top-3">
            <img
              src="/dating.jpg"
              alt="dating"
              className="w-fit h-fit rounded-3xl object-cover bg-no-repeat"
            />
            <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(to_top_left,#210F37,transparent)] "></div>
            <button className="absolute px-4 py-1 left-[18rem] bottom-6 rounded-full border border-white cursor-pointer">
              Profiles
            </button>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className="flex items-center gap-4 max-h-1/2 max-w-6xl p-6 ">
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
    </div>
  );
};

export default HeroSection;
