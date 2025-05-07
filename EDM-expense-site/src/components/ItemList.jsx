import { useState } from "react";
import { expenses } from "../data/expenses";
import { motion, AnimatePresence } from "framer-motion";

const ItemList = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Item List</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {expenses.map((item, i) => (
          <li
            key={i}
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
            className="relative group bg-white rounded-lg shadow p-4 hover:shadow-xl transition-all"
          >
            <div className="text-lg font-medium">{item.name}</div>
            <div className="text-gray-500">₹{item.price}</div>

            <AnimatePresence>
              {hoveredItem === item.name && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute top-0 left-0 w-full h-full bg-white shadow-xl rounded-lg flex flex-col justify-center items-center z-10"
                >
                  <img
                    src={`/src/assets/images/${i + 1}.jpg`}
                    alt={item.name}
                    className="w-24 h-24 object-cover mb-4"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                    Shop Now
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
