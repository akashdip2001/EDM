# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

Web project with **React + TailwindCSS + Framer Motion**, complete with:

---

## ✅ Project Features Recap:

1. Autoplay muted video from YouTube on top
2. Sideways scrolling image gallery with animation
3. Interactive item list with hover-based image popup + shopping button
4. Fully responsive and modern style

---

## 🔧 Step-by-Step Setup Guide

### 1. **Project Setup**

#### 📁 File Structure:

```
react-expense-site/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── images/            # Product images go here
│   ├── components/
│   │   ├── HeaderVideo.jsx
│   │   ├── SideScrollGallery.jsx
│   │   ├── ItemList.jsx
│   ├── data/
│   │   └── expenses.js        # Expense list with prices
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── vite.config.js
```

---

### 2. **Create the Project**

```bash
npm create vite@latest react-expense-site --template react
cd react-expense-site
npm install
```

### 3. **Install Dependencies**

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion
```

---

### 4. **Configure Tailwind**

Update `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Update `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### 5. **Add Data: `src/data/expenses.js`**

```js
export const expenses = [
  { name: "3 pin wire", price: 80 },
  { name: "Bridge Rectifier (DB2510-E)", price: 170 },
  { name: "Filament Bulb (100W)", price: 65 },
  { name: "Holder", price: 40 },
  { name: "Brass rod (5mm x 30cm)", price: 291 },
  { name: "Aluminium sheet", price: 257 },
  { name: "Workspace (plate)", price: 120 },
  { name: "IGBT (H20R1203)", price: 45 },
  { name: "Heat Sink", price: 35 },
  { name: "Resistors (2x10k, 3x10k, 3x100Ω)", price: 30 },
  { name: "Arduino Nano", price: 395 },
  { name: "LCD (16x2)", price: 206 },
  { name: "Potentiometer (3x10k)", price: 75 },
  { name: "Capacitor (2)", price: 10 },
  { name: "Programming Cable", price: 88 },
  { name: "BJT (BC547-B)", price: 15 },
  { name: "5V Converter", price: 85 },
  { name: "Boost Converter", price: 170 },
  { name: "Nylon Cable Tie", price: 5 },
  { name: "Cable Clips", price: 80 },
  { name: "12V Red LED", price: 20 },
  { name: "Wire", price: 200 },
  { name: "Wood", price: 2200 },
  { name: "Buffer", price: 225 },
  { name: "Handle", price: 18 },
];
```

---

## 🧩 Components

### `HeaderVideo.jsx`

```jsx
const HeaderVideo = () => {
  return (
    <div className="w-full h-[60vh] overflow-hidden">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/HqGpgHKPkes?autoplay=1&mute=1&loop=1&playlist=HqGpgHKPkes"
        title="Header Video"
        allow="autoplay"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default HeaderVideo;
```

---

### `SideScrollGallery.jsx`

```jsx
import { useEffect, useRef } from "react";

const images = [
  "/src/assets/images/image1.jpg",
  "/src/assets/images/image2.jpg",
  "/src/assets/images/image3.jpg",
  // add more
];

const SideScrollGallery = () => {
  const scrollRef = useRef(null);

  return (
    <div className="w-full overflow-x-auto whitespace-nowrap py-8 snap-x scroll-smooth" ref={scrollRef}>
      <div className="flex gap-4 px-8">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-[80vw] h-[60vh] object-cover rounded-2xl transition-transform duration-500 hover:scale-95 snap-center"
          />
        ))}
      </div>
    </div>
  );
};

export default SideScrollGallery;
```

---

### `ItemList.jsx`

```jsx
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
```

---

### `App.jsx`

```jsx
import HeaderVideo from "./components/HeaderVideo";
import SideScrollGallery from "./components/SideScrollGallery";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeaderVideo />
      <SideScrollGallery />
      <ItemList />
    </div>
  );
}

export default App;
```

---

### `main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## 🖼️ Assets

Place your product images (named as `1.jpg`, `2.jpg`, ...) inside `src/assets/images/`.

---

### 🚀 Run the Project

```bash
npm run dev
```

This will start your React site on `http://localhost:5173`.

---