/* eslint-disable react/prop-types */
import Seat from "./Seat";

const SpecialGuestRow = ({ leftSeats, rightSeats }) => {
  return (
    <div className={`min-w-[768px] flex justify-between mb-4`}>
      <div
        className={`flex border p-2 gap-2 ${
          leftSeats[0].name === "A" || leftSeats[0].name === "B"
            ? "bg-blue-800"
            : ""
        }`}
      >
        {leftSeats?.map((item) => (
          <Seat key={item?.id} seat={item} />
        ))}
      </div>

      <div
        className={`flex border p-2 gap-2 ${
          rightSeats[0].name === "A" || rightSeats[0].name === "B"
            ? "bg-blue-800"
            : ""
        }`}
      >
        {rightSeats?.map((item) => (
          <Seat key={item?.id} seat={item} />
        ))}
      </div>
    </div>
  );
};

export default SpecialGuestRow;
