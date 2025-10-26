import FormInput from "../formInput/formInput";
import { formErr } from "../../App";
import { useContext } from "react";

const primaryData = [
  { label: "name", type: "text", name:"firstName", placeholder: "full name" },
  {
    label: "Email",
    name: "email",
    placeholder: "eas@gmail.com",
    type: "email",
  },
  {
    label: "phone number",
    name: "phoneNumber",
    type: "tel",
    placeholder: "093 345 234 1098",
  },
];
export default function PrimaryData() {
  const { isErr } = useContext(formErr);

  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <div className="flex flex-col gap-2 ">
        <h4 className="md:text-3xl font-semibold text-2xl ">Personal info</h4>
        <p className="text-sm font-thin text-gray-500">
          Please provide your name, email, phone number.
        </p>
      </div>
      <form className="flex flex-col gap-1.5 w-full">
        {primaryData.map((itme)=>(
          <FormInput
          key={itme.name}
          label={itme.label}
          type={itme.type}
          name={itme.name}
          placeholder={itme.placeholder}
          err={isErr}
        />
        ))}
       
      </form>
    </div>
  );
}
