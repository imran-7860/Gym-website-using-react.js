import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import Button from "../layouts/Button";
const PlansCard = (props) => {
  return (
    <div className="flex flex-col bg-[#222] w-full md:w-1/3 rounded-lg p-5">
      <h1 className="font-semibold text-center ">{props.title}</h1>
      <div className="flex flex-row items-center justify-center">
        <span className="inline-block">
          <MdOutlineAttachMoney size={22} />
        </span>
        <h3 className="font-semibold text-xl inline-block ">{props.price}</h3>
      </div>

      <div className="flex flex-col items-center mt-5">
        <div className="flex flex-row items-center">
          <span className="inline-block mr-5">
            <AiFillCheckCircle size={22} />
            <p>
              Gyms provide access to a wide range of exercise equipment,
              including cardio machines, weightlifting equipment, and
              specialized machines.
            </p>
          </span>
        </div>
        <div className="flex flex-row items-center">
          <span className="inline-block mr-5">
            <AiFillCheckCircle size={22} />
            <p>
              Gyms provide access to a wide range of exercise equipment,
              including cardio machines, weightlifting equipment, and
              specialized machines.
            </p>
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-4">
        <Button title='Your Plan' />
      </div>
    </div>
  );
};

export default PlansCard;
