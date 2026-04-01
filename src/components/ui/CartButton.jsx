import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const CartButton = () => {
  return (
    <>
      <button className="relative btn btn-ghost rounded-full">
        {/* <span className="absolute right-1 -top-1 bg-red-500 w-5 h-5 rounded-full text-[#FFFFFF] font-bold flex items-center justify-center text-xs">
          {cartQuantity}
        </span> */}
        <FiShoppingCart className="mr-1" size={22} />
      </button>
    </>
  );
};

export default CartButton;
