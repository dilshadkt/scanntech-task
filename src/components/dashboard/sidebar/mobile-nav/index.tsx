import React, { useEffect, useState } from "react";
import { sidebar } from "../../../../constants/sidebar";
import { Link, useLocation } from "react-router-dom";

const MObileNav = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const controlNavbar = () => {
      console.log("object");
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const router = useLocation();
  const currentPath = router.hash.split("#")[1];

  return (
    <div
      className={`absolute sm:hidden bg-gray-800 border-t border-gray-200 left-0 right-0 h-[75px] ${
        isVisible ? `bottom-0` : `-bottom-[100%]`
      } rounded-b-[52px] transition-all duration-300`}
    >
      <ul className="flex items-center justify-around h-full px-6">
        {sidebar.map((item) => (
          <Link key={item.id} to={item.path}>
            <li className="cursor-pointer" title={item.title}>
              <img
                src={item.icon}
                width={25}
                className={`${
                  (currentPath === item.title ||
                    (currentPath === undefined &&
                      item.title === "dashboard")) &&
                  `filter-active`
                }`}
              />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MObileNav;
