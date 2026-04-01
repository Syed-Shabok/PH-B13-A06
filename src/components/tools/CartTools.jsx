import React from "react";
import CartToolCard from "../ui/CartToolCard";
import { FaCartShopping } from "react-icons/fa6";

const CartTools = ({ cartTools, removeFromCart, clearCart }) => {
  const getTotalPrice = () => {
    let totalPrice = 0;
    cartTools.forEach((item) => (totalPrice += item.price));

    return totalPrice;
  };

  return (
    <>
      {cartTools.length === 0 ? (
        <div className="flex flex-col gap-4 items-center justify-center min-h-[40vh] border border-gray-300 rounded-2xl shadow-sm">
          <FaCartShopping size={80} className="text-gray-300" />
          <h1 className="text-3xl font-semibold text-center light-text">
            Cart is Empty
          </h1>
          <p className="light-text text-lg">
            You can add items to your cart from the Products tab
          </p>
        </div>
      ) : (
        <div className="border border-gray-300 shadow-sm p-10 rounded-3xl space-y-8">
          <h1 className="text-3xl font-bold">Your Cart</h1>
          {/* Cart Tools */}
          <div className="flex flex-col gap-5">
            {cartTools.map((tool) => (
              <CartToolCard
                key={tool.id}
                tool={tool}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>

          {/* Total Price */}
          <div className="flex items-center justify-between px-2">
            <h3 className="text-2xl light-text">Total:</h3>
            <h3 className="text-3xl font-extrabold">${getTotalPrice()}</h3>
          </div>

          {/* Button */}
          <button
            onClick={clearCart}
            className="btn custom-btn text-lg font-bold rounded-full px-7 py-8 w-full my-2"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </>
  );
};

export default CartTools;
