import React from "react";
import CartToolCard from "../ui/CartToolCard";
import { FaCartShopping } from "react-icons/fa6";

const CartTools = ({ cartTools }) => {
  return (
    <>
      {cartTools.length === 0 ? (
        <div className="flex flex-col gap-4 items-center justify-center min-h-[40vh]">
          <FaCartShopping size={80} className="text-gray-300" />
          <h1 className="text-4xl font-semibold text-center">Cart is Empty</h1>
        </div>
      ) : (
        <div className="border border-gray-300 shadow-sm p-10 rounded-3xl space-y-8">
          <h1 className="text-3xl font-bold">Your Cart</h1>
          {/* Cart Tools */}
          <div className="flex flex-col gap-5">
            {cartTools.map((tool) => (
              <CartToolCard key={tool.id} tool={tool} />
            ))}
          </div>

          {/* Total Price */}
          <div className="flex items-center justify-between px-2">
            <h3 className="text-2xl light-text">Total:</h3>
            <h3 className="text-3xl font-extrabold">$100</h3>
          </div>

          {/* Button */}
          <button className="btn custom-btn text-lg font-bold rounded-full px-7 py-8 w-35 w-full my-2">
            Proceed to Checkout
          </button>
        </div>
      )}
    </>
  );
};

export default CartTools;
