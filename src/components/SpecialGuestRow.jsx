/* eslint-disable react/prop-types */
import Seat from "./Seat";

const SpecialGuestRow = ({ leftSeats, rightSeats, rowColor }) => {
  return (
    <div className={`min-w-[768px] flex justify-between mb-4`}>
      <div className={`flex border p-2 gap-2 ${rowColor}`}>
        {leftSeats?.map((item) => (
          <Seat key={item?.id} seat={item} />
        ))}
      </div>

      <div className={`flex border p-2 gap-2 ${rowColor}`}>
        {rightSeats?.map((item) => (
          <Seat key={item?.id} seat={item} />
        ))}
      </div>
    </div>
  );
};

export default SpecialGuestRow;
