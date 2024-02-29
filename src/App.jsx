import "./App.css";
import SpecialGuestRow from "./components/SpecialGuestRow";
import Seat from "./components/Seat";
import { useEffect, useState } from "react";

function App() {
  const [seats, setSeats] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://yha.goldenyellowtravel.com/api/v1/rows");
      const data = await res.json();
      setSeats(data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const filteredSeatsArray = seats?.filter((seat) => seat?.name !== "VVIP");

  function groupSeatsByName(seats) {
    return seats.reduce((groupedSeats, seat) => {
      const name = seat.name || "Unknown"; // Use 'Unknown' if name is not provided
      groupedSeats[name] = [...(groupedSeats[name] || []), seat];
      return groupedSeats;
    }, {});
  }

  const groupedSeats = groupSeatsByName(filteredSeatsArray);

  const splitSeats = (filteredSeatsArray) => {
    const mid = Math.ceil(filteredSeatsArray?.length / 2);
    const leftSeats = filteredSeatsArray?.slice(0, mid);
    const rightSeats = filteredSeatsArray?.slice(mid);
    return { leftSeats, rightSeats };
  };

  return (
    <>
      <div className="w-full py-5 bg-gray-500 flex items-center justify-center mb-4">
        <p className="font-semibold text-2xl text-white ">Stage</p>
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-[768px] mb-4 md:w-full flex justify-center gap-2">
          {seats?.map((seat) => {
            if (seat?.name === "VVIP")
              return <Seat key={seat?.id} seat={seat} />;
          })}
        </div>
        {Object.keys(groupedSeats).map((index) => {
          const { leftSeats, rightSeats } = splitSeats(groupedSeats[index]);

          return (
            <SpecialGuestRow
              key={index}
              leftSeats={leftSeats}
              rightSeats={rightSeats}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
