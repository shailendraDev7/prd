/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState } from "react";
import "simplebar-react/dist/simplebar.min.css";
import Sidemenu from "./Sidemenu";

interface SidebarProps {
  setExpand: (value: boolean) => void;
}

const Sidebar3: FC<SidebarProps> = ({ setExpand }) => {
  const [isExpand, setIsExpand] = useState(true);
  const [isExpandOnHover, setIsExpandOnHover] = useState(false);

  const handleHoverExpand = (value: boolean) => {
    if (!isExpand) {
      setIsExpandOnHover(value);
    }
  };

  return (
    <nav
      role="navigation"
      className={[
        "bg-gray-50 border-r border-gray-200 h-screen top-0",
        "transition-all duration-300 ease-in-out md:sticky",
        `${
          isExpand
            ? "bg-gray-50 w-72"
            : isExpandOnHover
            ? "bg-gray-50/70 w-72 backdrop-blur-md"
            : "bg-gray-50 w-20"
        }`
      ].join(" ")}
    >
      <button
        className="absolute z-50 top-16 -right-3 bg-white hover:bg-gray-100 text-gray-500 p-0.5 rounded-full border border-gray-200"
        onClick={() => {
          setIsExpand(!isExpand);
          setExpand(!isExpand);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            isExpand ? "rotate-0" : "rotate-180"
          } transform transition duration-500 h-4 w-4`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        onMouseEnter={() => handleHoverExpand(true)}
        onMouseLeave={() => handleHoverExpand(false)}
        className={`relative h-full overflow-hidden`}
      >
        <Sidemenu isExpand={isExpand} isExpandOnHover={isExpandOnHover} />
      </div>
    </nav>
  );
};

export default Sidebar3;
