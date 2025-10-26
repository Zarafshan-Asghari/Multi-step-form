import { useContext, useEffect, useState } from "react";
import { formData } from "../../App";

export default function AddOnsService({title, description, price}) {
const [selected, setSelected] = useState(false);
const {data,setData}=useContext(formData)

const handleChange=(serviceTitle, price)=>{
setData(prev => ({ ...prev, addOns: [...prev.addOns,{ service:serviceTitle,servicePrice: price}] }));
  setSelected(!selected);
}
useEffect(() => {
  console.log(" data step 3:", data);
}, [data]);
  return (
    <div
      onClick={()=>handleChange(title,price)}
      className={`flex items-center justify-between w-full border rounded-xl p-2 cursor-pointer transition-all duration-300
        ${selected>0 ? "border-purple-600 bg-purple-50" : "border-gray-300 hover:border-purple-400"}`}
    >
    
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={selected}
          className="accent-purple-600 size-4"
        />
        <div className="flex flex-col ">
          <span className="font-semibold text-gray-900 text-sm">{title}</span>
          <span className=" text-gray-500 text-xs">{description}</span>
        </div>
      </div>

      {/* Right section */}
      <span className="text-sm text-purple-600 font-semibold">+${price}/mo</span>
    </div>
  );
}
