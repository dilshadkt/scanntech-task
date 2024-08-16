import { IconButtonProps } from "../../../types";

const IconButton = ({ title, icon, className }: IconButtonProps) => {
  return (
    <button
      className={` flexCenter ${className} hover:scale-95 transition-all duration-300`}
    >
      <h5 className="font-semibold">{title}</h5>
      <img src={icon} alt={title} width={20} className="ml-3" />
    </button>
  );
};

export default IconButton;
