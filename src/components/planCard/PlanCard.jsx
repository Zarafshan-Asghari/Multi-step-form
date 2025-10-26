

export default function PlanCard({ icon, planName, price, children ,handlePlan ,selectedCard}) {
 

  return (

    <div

    onClick={() => handlePlan(planName, price)}
      className={`w-full flex flex-col p-4 gap-6 rounded-xl border  ${selectedCard ? 'bg-gray-50 border-purple-600': "border-gray-200"} `}
    >
      <img src={icon} alt="" className="size-8" />

      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold capitalize ">{planName}</p>
        <p className="text-xs fonat-thin text-gray-500">${price}/mo</p>
      </div>
      {children}
    </div>
  );
}
