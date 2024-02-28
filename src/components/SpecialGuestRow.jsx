/* eslint-disable react/prop-types */
import Seat from "./Seat";

const SpecialGuestRow = ({ leftTables, rightTables, rowColor }) => {
  return (
    <div className={`flex justify-between mb-4`}>
      <div className={`flex border p-2 gap-2 ${rowColor}`}>
        {leftTables?.map((item) => (
          <Seat key={item} item={item} />
        ))}
      </div>

      <div className={`flex border p-2 gap-2 ${rowColor}`}>
        {rightTables?.map((item) => (
          <Seat key={item} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SpecialGuestRow;
