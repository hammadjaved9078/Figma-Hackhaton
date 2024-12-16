import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import { LuSprout } from "react-icons/lu";

const AboutSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-32 px-6">
      <h2 className="text-[32px] font-semibold text-center mb-12">
        What makes our Brand Different
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-[#F9F9F9] p-9">
          <div className="text-center flex flex-col justify-center p-2">
            <TbTruckDelivery className="h-[24px] w-[24px] text-[#007580] mt-4 mb-4" />
            <h3 className="text-[20px] font-normal text-start text-[#007580]">
              Next day as standard
            </h3>
            <p className="text-start text-[16px] font-normal text-[#007580] mt-3">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
        </div>

        <div className="bg-[#F9F9F9] p-9">
          <div className="text-center flex flex-col justify-center p-2">
            <IoIosCheckmarkCircleOutline className="h-[24px] w-[24px] text-[#007580] mt-4 mb-4" />
            <h3 className="text-[20px] font-normal text-start text-[#007580]">
              Made by true artisans
            </h3>
            <p className="text-start text-[16px] font-normal text-[#007580] mt-3">
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>
        </div>

        <div className="bg-[#F9F9F9] p-9">
        <div className="text-center flex flex-col justify-center p-2">
        <CiCreditCard1 className="h-[24px] w-[24px] text-[#007580] mt-4 mb-4" />
          <h3 className="text-[20px] font-normal text-start text-[#007580]">
            Unbeatable prices
          </h3>
          <p className="text-start text-[16px] font-normal text-[#007580] mt-3">
            For our materials and quality you won’t find better prices anywhere
          </p>
          </div>
        </div>

        <div className="bg-[#F9F9F9] p-9">
        <div className="text-center flex flex-col justify-center p-2">
        <LuSprout className="h-[24px] w-[24px] text-[#007580] mt-4 mb-4" />
          <h3 className="text-[20px] font-normal text-start text-[#007580]">
            
            Recycled packaging
          </h3>
          <p className="text-start text-[16px] font-normal text-[#007580] mt-3">
            We use 100% recycled to ensure our footprint is more
            manageable
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
