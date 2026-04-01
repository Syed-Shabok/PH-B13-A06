import React from "react";

const CartToolCard = ({ tool }) => {
  return (
    <div className="bg-gray-100 p-7 rounded-2xl flex items-center justify-between">
      {/* Tool Details */}
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="border border-gray-100 bg-base-100 shadow-sm w-fit p-3 rounded-full">
          <img src={tool.icon} className="w-10" alt={`Icon of ${tool.name}`} />
        </div>

        {/* Title & Price */}
        <div>
          <h3 className="text-2xl font-bold dark-text">{tool.name}</h3>
          <p className="text-xl light-text">${tool.price}</p>
        </div>
      </div>

      <div>
        <button className="btn btn-ghost text-red-500 text-xl font-bold">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartToolCard;
