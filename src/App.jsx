import { createContext, useState } from "react";
import "./App.css";
import Sidebar from "./components/sideBar/Sidebar";
import PrimaryData from "./components/primaryData/PrimaryData";
import SelectPlan from "./components/selectPlan/SelectPlan";
import PickAddOns from "./components/pickAddOns/PickAddOns";
import FormSummery from "./components/formSummery/FormSummery";
import iconConfirm from "../public/images/icon-thank-you.svg";

export const formData = createContext({});
export const formErr = createContext({});

export default function App() {
  const [formStep, setFormStep] = useState(1);
  const [isSubmited, setIsSubmited] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [data, setData] = useState({
    email: "",
    firstName: "",
    plan: "",
    planCost: "",
    phoneNumber: "",
    addOns: [],
  });

  const steps = [
    { title: "Your info", content: <PrimaryData /> },
    { title: "Select Plan", content: <SelectPlan /> },
    { title: "Add-ons", content: <PickAddOns /> },
    { title: "summery", content: <FormSummery /> },
  ];

  function nextStep(e) {
    e.preventDefault();
    if (
      !data.firstName?.trim() ||
      !data.email?.trim() ||
      !data.phoneNumber?.trim()
    ) {
      setIsErr(true);
      return;
    } else {
      setIsErr(false);
    }

    setFormStep((prev) => Math.min(prev + 1, steps.length));
  }

  function prevStep() {
    setFormStep((prev) => Math.max(prev - 1, 1));
  }

  function submit() {
    setIsSubmited(true);
  }

  const currentStep = steps[formStep - 1];

  return (
    <formData.Provider value={{ data, setData }}>
      <formErr.Provider value={{ isErr, setIsErr }}>
        <div className="flex items-center justify-center h-screen bg-blue-50 ">
          <div className="flex items-center justify-center h-10/12  bg-white rounded-2xl p-4 md:flex-row flex-col gap-6 w-3xl">
            {/* Sidebar */}
            <Sidebar steps={steps} formStep={formStep} />

            {/* Content */}
            <div className="md:w-2/3 w-full flex flex-col justify-between  h-96 gap-4 px-6 py-10">
              {isSubmited ? (
                <div className="flex flex-col items-center justify-center py-10 gap-4">
                  <img src={iconConfirm} alt="" className="size-14" />
                  <p className="md:text-3xl font-semibold text-2xl ">
                    thank you !
                  </p>
                </div>
              ) : (
                <div>{currentStep.content}</div>
              )}
              {!isSubmited && (
                <div className="flex justify-between items-center gap-4 pb-2">
                  {formStep !== 1 && (
                    <button
                      onClick={prevStep}
                      className="text-blue-950 px-4 py-2 rounded-md  hover:text-gray-500"
                    >
                      Back
                    </button>
                  )}
                  <span></span>

                  {
                    <button
                      onClick={formStep !== steps.length ? nextStep : submit}
                      className=" bg-blue-950 text-gray-50 px-4 py-2 rounded-md disabled:opacity-50 "
                    >
                      {formStep !== steps.length ? "Next" : "Confirm"}
                    </button>
                  }
                </div>
              )}
            </div>
          </div>
        </div>
      </formErr.Provider>
    </formData.Provider>
  );
}
