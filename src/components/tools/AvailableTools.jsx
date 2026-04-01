import React from "react";
import ToolCard from "../ui/ToolCard";

const AvailableTools = ({ tools, addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default AvailableTools;
