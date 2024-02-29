import "./App.css";
import SpecialGuestRow from "./components/SpecialGuestRow";
import Seat from "./components/Seat";
import { useEffect, useState } from "react";

function App() {
  const [seats, setSeats] = useState([]);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch("http://yha.goldenyellowtravel.com/api/v1/rows");
      const data = await res.json();
      setSeats(data?.data);
      setIsError(false);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(
      () => {
        fetchData();
      },
      isError ? 500 : 2000
    );

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
      {isError ? (
        <>Loading, please wait...</>
      ) : (
        <>
          {" "}
          <button
            onClick={() => fetchData()}
            className="w-full py-5 bg-gray-500 flex items-center gap-3 justify-center mb-4"
          >
            <p className="font-semibold text-2xl text-white ">Stage</p>

            <div className="flex items-center pt-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  color="white"
                  fill="currentColor"
                  className="bi bi-arrow-clockwise"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
                  />
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                </svg>
              </div>
            </div>
          </button>
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
      )}
    </>
  );
}

export default App;
