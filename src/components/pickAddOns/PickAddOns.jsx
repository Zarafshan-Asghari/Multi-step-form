import AddOnsService from "../addOnsService/AddService";
const addons = [
  {
    id: 1,
    title: "Online service",
    desc: "Access to multiplayer games",
    price: 4,
  },
  {
    id: 2,
    title: "Larger storage",
    desc: "Extra 1TB of cloud save",
    price: 5,
  },
  {
    id: 3,
    title: "Customizable profile",
    desc: "Custom theme on your profile",
    price: 9,
  },
];


export default function PickAddOns() {
  return (
    <div className="flex flex-col items-start gap-4 ">
      <div className="flex flex-col gap-2 ">
        <h4 className="md:text-3xl font-semibold text-2xl ">
          Pick Add Ons
        </h4>
        <p className="text-sm font-thin text-gray-500">
        Add Ons help you enhance gaming experience.
        </p>
      </div>
      <div className="flex flex-col gap-2 w-full">
     {addons.map((item)=>(
           <AddOnsService key={item.id} title={item.title} description={item.desc} price={item.price}/>
     ))}
      </div>
    </div>
  );
}
