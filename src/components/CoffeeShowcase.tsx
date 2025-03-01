import React from "react";
import { Coffee } from "../types/coffeData";
import { FaCartShopping } from "react-icons/fa6";
import IMG1 from "../assets/IMG7.jpg";
import IMG2 from "../assets/IMG10.jpg";
import IMG3 from "../assets/IMG6.jpg";

const CoffeeShowcase: React.FC = () => {
  const coffeeData: Coffee[] = [
    {
      id: 1,
      name: "Espresso",
      image: IMG1,
      description: "A rich and bold shot of pure coffee.",
      price: 3.5,
      temperature: "Hot",
    },
    {
      id: 2,
      name: "Iced Latte",
      image: IMG2,
      description: "Smooth espresso with chilled milk over ice.",
      price: 4.0,
      temperature: "Cold",
    },
    {
      id: 3,
      name: "Cappuccino",
      image: IMG3,
      description: "A creamy blend of espresso, steamed milk, and foam.",
      price: 4.5,
      temperature: "Both",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 text-white">
      {coffeeData.map((coffee: Coffee, index: number) => (
        <div key={index} className="rounded-lg bg-[#301911] p-5">
          <div>
            <img
              src={coffee.image}
              alt=""
              className="w-full h-[20rem] object-cover rounded"
            />
          </div>
          <div className="flex flex-col mt-3">
            <div className="flex justify-between">
              <h5 className="text-3xl">{coffee.name}</h5>
              <p className="">{coffee.price.toFixed(2)}k</p>
            </div>
            <p className="text-sm flex-grow w-2/3 mt-1">{coffee.description}</p>
            <div className="flex justify-between mt-3 ">
              <div className="flex gap-1 items-center">
                <p className="px-4 py-1 border border-[#E19517] rounded">
                  Cold
                </p>
                <p className="px-4 py-1 border border-[#E19517] rounded">Hot</p>
              </div>

              <button className="bg-[#452012] rounded-full p-3">
                <FaCartShopping size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoffeeShowcase;
