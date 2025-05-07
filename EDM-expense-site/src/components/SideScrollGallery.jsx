import { useEffect, useRef } from "react";

const images = [
  "/src/assets/images/wooden frame 02.jpg",
  "/src/assets/images/setup Day3 03.jpg",
  "/src/assets/images/setup Day3 01.jpg",
  "/src/assets/images/setup Day3 02.jpg",
  "/src/assets/images/setup EDM 01.jpg",
  "/src/assets/images/Red LED.jpg",
  "/src/assets/images/Relays & voltage booster.jpg",
  "/src/assets/images/soldaring Al 01.jpg",
  "/src/assets/images/setup day 5.jpg",
  "/src/assets/images/electrical warning 01.jpg",
  "/src/assets/images/electrical warning 02.jpg",
  "/src/assets/images/capacitor bust 01.jpg",
  "/src/assets/images/Result.jpg",
  "/src/assets/images/450v 100mf.jpg",
];

const SideScrollGallery = () => {
  const scrollRef = useRef(null);

  return (
    <div
      className="w-full overflow-x-auto whitespace-nowrap py-8 snap-x scroll-smooth"
      ref={scrollRef}
    >
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
