import React from "react";

const CartToolCard = ({ tool, removeFromCart }) => {
  return (
    <div className="bg-gray-100 p-7 rounded-2xl flex flex-col md:flex-row items-center justify-between">
      {/* Tool Details */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Icon */}
        <div className="border border-gray-100 bg-base-100 shadow-sm w-fit p-3 rounded-full">
          <img src={tool.icon} className="w-10" alt={`Icon of ${tool.name}`} />
        </div>

        {/* Title & Price */}
        <div>
          <h3 className="text-2xl font-bold dark-text text-center md:text-left">
            {tool.name}
          </h3>
          <p className="text-xl light-text text-center md:text-left">
            ${tool.price}
          </p>
        </div>
      </div>

      <div>
        <button
          onClick={() => removeFromCart(tool)}
          className="btn btn-ghost text-red-500 text-xl font-bold"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartToolCard;
