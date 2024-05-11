import React, { useEffect, useState } from "react";
import copy from "copy-to-clipboard";
import dayjs from "dayjs";

import { days } from "@/constants/logConstants";

import DayDropDown from "@/components/Home/DayDropDown";
import LogEditor from "@/components/Home/LogEditor";

const Home: React.FC = () => {
  const currentDay = dayjs().subtract(1, "day").format("dddd");

  const [openDropDown, setOpenDropDown] = useState(false);
  const [activeDay, setActiveDay] = useState(currentDay);

  useEffect(() => {
    if (openDropDown) {
      setTimeout(() => {
        setOpenDropDown(false);
      }, 5000);
    }
  }, [openDropDown]);

  const [logText, setLogText] = React.useState<string>("");
  console.log("🚀 ~ logText:", logText);

  return (
    <div className="flex flex-col w-full justify-center items-center gap-10">
      <h1 className="text-8xl"><span className="line-through text-gray-700">WORK</span> PASSION LOGGER</h1>
      <div className="flex gap-20 w-full">
        <div className="card w-1/2 xl:w-8/12 bg-base-100 shadow-xl">
          <div className="card-body gap-10">
            <DayDropDown
              openDropDown={openDropDown}
              setOpenDropDown={setOpenDropDown}
              activeDay={activeDay}
              setActiveDay={setActiveDay}
            />
            <LogEditor
              dayConfig={days.find((day) => day.value === activeDay) || days[0]}
              setLogText={setLogText}
            />
          </div>
        </div>
        <div className="card w-1/2 xl:w-4/12 bg-base-100 shadow-xl">
        <div className="card-actions justify-end">
              <button
                className="btn btn-primary m-5"
                onClick={() => {
                  copy(logText);
                }}
              >
                Absorb!!
              </button>
            </div>
          <div className="card-body">
            <h1 className="text-2xl">Preview</h1>
            <pre className="text-base whitespace-pre-wrap">{logText}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
