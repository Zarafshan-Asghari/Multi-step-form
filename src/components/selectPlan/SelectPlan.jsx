import arcadeIcon from "../../../public/images/icon-arcade.svg";
import advancedIcon from "../../../public/images/icon-advanced.svg";
import proIcon from "../../../public/images/icon-pro.svg";
import PlanCard from "../planCard/PlanCard";
import { useState,useContext,useEffect } from "react";
import { formData } from "../../App";


const plans = [
  { icon: arcadeIcon, planName: "Arcade", price: 9 },
  { icon: advancedIcon, planName: "Advanced", price: 19 },
  { icon: proIcon, planName: "Pro", price: 29 },
];

export default function SelectPlan() {
  const [isToggled, setIsToggled] = useState(false);
  const { data, setData } = useContext(formData);

  const handleToggle = () => {
    setIsToggled((prev)=>!prev);
    // console.log(isToggled ? "monthly" : "yearly");
  };

  const handlePlan = (planName,price) => {
    setData((prev) => ({...prev, plan:planName, value: price , package:(isToggled ?   "yearly" : "monthly") }));
    console.log(data);
  };

useEffect(() => {
  console.log("step 2 data:", data);
}, [data]);

  return (
    <div className="flex flex-col items-start gap-4 ">
      <div className="flex flex-col gap-2 ">
        <h4 className="md:text-3xl font-semibold text-2xl ">
          Select your plan
        </h4>
        <p className="text-sm font-thin text-gray-500">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div
        className="flex items-start justify-center gap-4 w-full"
        key={plans.planName}
      >
        {plans.map((item) => (
          <PlanCard
            key={item.planName}
            icon={item.icon}
            planName={item.planName}
            price={item.price}
            handlePlan={handlePlan}
            selectedCard={data.plan === item.planName}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 bg-gray-100 p-2 w-full rounded-lg">
        <span
          className={`capitalize text-sm font-thin  ${
            !isToggled ? "text-black" : "text-gray-500"
          }`}
        >
          montly
        </span>
        <div
          className={`w-12 h-6 flex items-center rounded-full cursor-pointer transition-colors duration-300 bg-blue-500 }`}
          onClick={handleToggle}
        >
          <div
            className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
              isToggled ? "translate-x-6" : "translate-x-1"
            }`}
          ></div>
        </div>
        <span
          className={`capitalize text-sm font-thin ${
            isToggled ? "text-black" : "text-gray-500"
          }`}
        >
          yearly
        </span>
      </div>
    </div>
  );
}
