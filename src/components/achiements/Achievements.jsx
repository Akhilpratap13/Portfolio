import React from "react";

const AchievementSection = () => {
  return (
    <div className=" mx-auto px-4 py-8 bg-[#fcfafa00] w-full">
      <h3 className="w-full mb-[1.5rem] text-xl sm:text-xl md:text-2xl xl:text-[3rem] font-semibold py-5 xl:py-10 text-white text-center">
        Achieve<span className="text-purple-500">ments</span>
      </h3>
      <div className="max-w-lg mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">
              Smart India Hackathon (Team Leader)
            </h3>
            <h3 class="text-purple-500">(Jan 2022 – March 2022)</h3>
            <div
              href="#"
              className="text-blue-500 hover:underline cursor-pointer"
            ></div>

            <p className="text-gray-700 mb-4">
              Developed an integrated platform to provide information on the
              courses offered by Indian universities.Provided an easy and
              hassle-free admission experience for aspirants of all streams.
              Mentored 10+ Students as a part of House of Geeks - BlockChain And
              CyberSecurity Wing
            </p>
          </div>
        </div>

        {/* Add more achievements as needed */}
      </div>
    </div>
  );
};

export default AchievementSection;
