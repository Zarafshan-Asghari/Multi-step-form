import { useContext, useEffect, useState } from "react";
import { formData } from "../../App";

export default function FormSummery() {
  const [total, setTotal] = useState(0);
  const { data } = useContext(formData);

  useEffect(() => {
    const planCost = Number(data.value);
    const serviceTotal = data.addOns.reduce(
      (sum, item) => sum + Number(item.servicePrice),
      0
    );
    setTotal(planCost + serviceTotal);
  }, [data]);

  return (
    <div className="flex flex-col  gap-4 ">
      <div className="flex flex-col gap-2 ">
        <h4 className="md:text-3xl font-semibold text-2xl ">Pick Add Ons</h4>
        <p className="text-sm font-thin text-gray-500">
          Add Ons help you enhance gaming experience.
        </p>
      </div>
      <div className=" gap-2 w-full">
        <div className="bg-gray-100 p-4 rounded-md text-sm">
          <p>
            <strong>Name:</strong> {data.firstName || ""}
          </p>
          <p>
            <strong>Email:</strong> {data.email || ""}
          </p>
          <p>
            <strong>Phone:</strong> {data.phoneNumber || ""}
          </p>
          <p>
            <strong>Plan:</strong> {data.plan || ""}
          </p>
          <p>
            <strong>Plan cost:</strong> {data.value || "$"}
          </p>
          <p>
            <strong>Package:</strong> {data.package || ""}
          </p>
          <div className="mt-3  ">
            <strong>Add-ons:</strong>
            {data.addOns.length > 0 ? (
              data.addOns.map((item, index) => (
                <div
                  key={index}
                  className="pl-2 flex items-center justify-between w-full gap-6 bg-gray-200"
                >
                  <p>{item.service}</p>
                  <p>${item.servicePrice}/mo</p>
                </div>
              ))
            ) : (
              <p className="pl-2 text-gray-500">No add-ons selected</p>
            )}
          </div>
          {/* total */}
          <span className=" font-bold text-red-400">
            Total: ${total} /{data.package}
          </span>
        </div>
      </div>
    </div>
  );
}
