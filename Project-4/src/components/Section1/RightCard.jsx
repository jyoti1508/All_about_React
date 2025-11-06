import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full w-80 shrink-0 relative rounded-4xl overflow-hidden">
      <img className="h-full w-full object-cover" src={props.img} />
      <RightCardContent color={props.color} id={props.id} tag={props.tag} />
    </div>
  );
};

export default RightCard;
