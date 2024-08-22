import { Link, useLocation } from "react-router-dom";
import { Logo, Logout } from "../../../constants/icons";
import { sidebar } from "../../../constants/sidebar";
const SideBar = () => {
  const router = useLocation();
  const currentPath = router.hash.split("#")[1];
  return (
    <section className="w-[80px] hidden sm:flexBetween bg-black h-full rounded-full  flex-col py-5 ">
      <div>
        <Link to={"/"}>
          <img src={Logo} width={30} alt=" logo" />
        </Link>
        <ul className="mt-12 flex flex-col gap-6">
          {sidebar.map((item) => (
            <Link key={item.id} to={item.path}>
              <li className="cursor-pointer " title={item.title}>
                <img
                  src={item.icon}
                  width={25}
                  alt={item.title}
                  className={`${
                    (currentPath === item.title ||
                      (currentPath === undefined &&
                        item.title === "dashboard")) &&
                    `filter-active`
                  } `}
                />
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="mb-2 cursor-pointer">
        <img src={Logout} alt="logout" width={25} className="" />
      </div>
    </section>
  );
};

export default SideBar;
