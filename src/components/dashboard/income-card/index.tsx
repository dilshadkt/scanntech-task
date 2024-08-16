import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const IncomeCard = ({
  income,
  percentage,
  icon,
  pathColor,
}: {
  income: string;
  percentage: number;
  icon: any;
  pathColor: string;
}) => {
  return (
    <div className="h-[180px] rounded-3xl shadow-sm bg-white flex flex-col justify-between p-5">
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <img src={icon} alt="income chart" width={35} />
          <h4 className="font-medium mt-2 text-base md:text-lg">Income</h4>
        </div>
        <div className="flex items-center justify-center">
          <div className=" w-[80px] lg:w-[100px]  aspect-square">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              strokeWidth={16}
              styles={buildStyles({
                textSize: "22px",
                pathColor: `${pathColor}`,
                textColor: "#B6B6B6",
                trailColor: "#F3F4F7",
              })}
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold">
          ${income.toLocaleString()}
        </h3>
      </div>
    </div>
  );
};

export default IncomeCard;
