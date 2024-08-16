import React from "react";
import { AvatarLabelProps } from "../../../types";

const AvatarLabel = ({ name, avatar }: AvatarLabelProps) => {
  return (
    <div className="h-full rounded-full bg-[#FFEBDD] flexStart p-[6px] flex-col">
      <div className="w-full aspect-square rounded-full flexCenter">
        <img
          src={avatar}
          alt="avatar one"
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-xs mt-1 text-center">{name}</span>
    </div>
  );
};

export default AvatarLabel;
