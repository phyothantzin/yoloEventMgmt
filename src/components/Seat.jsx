/* eslint-disable react/prop-types */
import { useState } from "react";

const Seat = ({ item }) => {
  const [occupied, setOccupied] = useState(false);

  return (
    <div
      className={`flex w-10 h-10 lg:w-16 lg:h-16 ${
        occupied ? "bg-red-600" : "bg-green-400"
      }  border border-spacing-2 align-middle items-center justify-center`}
      key={item}
      onClick={() => {
        setOccupied(!occupied);
      }}
    >
      <span className="text-white">{item}</span>
    </div>
  );
};

export default Seat;
