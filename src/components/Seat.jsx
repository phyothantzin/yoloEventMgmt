/* eslint-disable react/prop-types */
const Seat = ({ seat }) => {
  const handleToggle = async (id) => {
    try {
      await fetch("http://yha.goldenyellowtravel.com/api/v1/toggle/" + id, {
        method: "PUT",
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className={`flex w-10 h-10 lg:w-16 lg:h-16 ${
        seat?.status ? "bg-red-600" : "bg-green-400"
      }  border border-spacing-2 align-middle items-center justify-center`}
      onClick={() => handleToggle(seat?.id)}
    >
      <span className="text-white select-none">{seat?.seat}</span>
    </div>
  );
};

export default Seat;
