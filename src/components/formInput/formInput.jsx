import { formData } from "../../App";
import { useContext } from "react";

export default function FormInput({
  type = "text",
  label = "name",
  name, 
  placeholder='enter sth',
  err,
})

{
const {data,setData}=useContext(formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="felx flex-col gap-1 w-full ">
      <div className="flex items-center justify-between">
        <label htmlFor="" className="text-sm capitalize font-medium"> {label}</label>
        <span className="text-red-400 text-xs">{err && !data[name]?.trim() && 'this feild is required' }</span>
      </div>
      <input
       value={data[name] || ""}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        className={`focus:outline-none w-full placeholder:font-thin placeholder:text-gray-400 p-2 rounded-sm border border-gray-300 focus-within:border-gray-400 ${err && !data[name]?.trim() && 'border-red-400'}`}
      />
    </div>
  );
}
