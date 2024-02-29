import "./App.css";
import SpecialGuestRow from "./components/SpecialGuestRow";
import Seat from "./components/Seat";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch("http://yha.goldenyellowtravel.com/api/v1/rows");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  const vipTables = [1, 2, 3, 4, 5, 6, 7, 8];
  const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const splitTables = (tables) => {
    const mid = Math.ceil(tables.length / 2);
    const leftTables = tables.slice(0, mid);
    const rightTables = tables.slice(mid);
    return { leftTables, rightTables };
  };

  const { leftTables, rightTables } = splitTables(tables);

  return (
    <>
      <div className="w-full py-5 bg-gray-500 flex items-center justify-center mb-4">
        <p className="font-semibold text-2xl text-white ">Stage</p>
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-[768px] mb-4 md:w-full flex justify-center gap-2">
          {vipTables.map((item) => (
            <Seat key={item} item={item} />
          ))}
        </div>
        <SpecialGuestRow
          leftTables={leftTables}
          rightTables={rightTables}
          rowColor={"bg-blue-800"}
        />
        <SpecialGuestRow
          leftTables={leftTables}
          rightTables={rightTables}
          rowColor={"bg-blue-800"}
        />
        <SpecialGuestRow
          leftTables={leftTables}
          rightTables={rightTables}
          rowColor={"bg-blue-300"}
        />
        <SpecialGuestRow
          leftTables={leftTables}
          rightTables={rightTables}
          rowColor={"bg-blue-300"}
        />
        <SpecialGuestRow
          leftTables={leftTables}
          rightTables={rightTables}
          rowColor={"bg-blue-300"}
        />
        <SpecialGuestRow
          leftTables={leftTables}
          rightTables={rightTables}
          rowColor={"bg-blue-300"}
        />
        <SpecialGuestRow
          leftTables={leftTables}
          rightTables={rightTables}
          rowColor={"bg-blue-300"}
        />
        <SpecialGuestRow
          leftTables={leftTables}
          rightTables={rightTables}
          rowColor={"bg-blue-300"}
        />
        <SpecialGuestRow
          leftTables={leftTables}
          rightTables={rightTables}
          rowColor={"bg-blue-300"}
        />
      </div>
    </>
  );
}

export default App;
