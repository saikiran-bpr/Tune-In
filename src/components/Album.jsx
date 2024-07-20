import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MyContext from "../context/context";
const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
};

export default function Album({ obj }) {
  const navigate = useNavigate();
  
  let s = "";
  for (let i = 0; i < obj.artist.length; i++) {
    s += obj.artist[i].name + ", ";
  }
  s = s.slice(0, s.length - 2);
  const handleClick = () => {
    navigate(`/song/${obj._id}`);
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="cursor-pointer mr-3"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onClick={handleClick}
    >
      <div className="relative">
        <img
          className="w-full h-auto sm:w-80 sm:h-64 rounded-lg"
          src={obj.thumbnail}
          alt={obj.title}
        />
        {isHovered && (
            <motion.div
                className="relative" // Ensure proper positioning context
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                transition={{ duration: 0.3 }} // Adjust duration as needed
            >
                <img
                    className="w-10 h-10 sm:w-12 sm:h-12 absolute bottom-2 right-2 sm:bottom-3 sm:right-3"
                    src="/PlayIcon.png"
                    alt="Play Icon"
                />
            </motion.div>
        )}
      </div>
      <h1 className="text-[rgba(186,195,193,1)] text-lg sm:text-xl font-normal ml-1 mt-2 w-full sm:w-44 h-8 whitespace-nowrap overflow-hidden text-ellipsis">
        {obj.title}
      </h1>
      <p className="text-[rgba(114,113,117,1)] text-xs sm:text-sm font-normal ml-1 whitespace-nowrap overflow-hidden text-ellipsis">
        {s.length > 25 ? s.slice(0, 25) + "..." : s}
      </p>
    </div>
  );
}
