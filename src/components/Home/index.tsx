import React, { useEffect, useState } from "react";
import { GlobalHotKeys } from "react-hotkeys";
import copy from "copy-to-clipboard";
import dayjs from "dayjs";

import { days } from "@/constants/logConstants";

import DayDropDown from "@/components/Home/DayDropDown";
import LogEditor from "@/components/Home/LogEditor";
import classNames from "classnames";

const Home: React.FC = () => {
  const currentDay = dayjs().subtract(1, "day").format("dddd");

  const [openDropDown, setOpenDropDown] = useState(false);
  const [activeDay, setActiveDay] = useState(currentDay);
  const [isCopying, setIsCopying] = useState(false);
  const [isHotkey, setIsHotkey] = useState(false);

  useEffect(() => {
    if (openDropDown) {
      setTimeout(() => {
        setOpenDropDown(false);
      }, 5000);
    }
  }, [openDropDown]);

  const [logText, setLogText] = React.useState<string>("");

  const keyMap = {
    COPY: ["command+g", "ctrl+g"],
  };

  const handlers = {
    COPY: (e: any) => {
      e.preventDefault();
      setIsHotkey(true);
      copyHandler();
    },
  };

  const copyHandler = () => {
    setIsCopying(true);
    copy(logText);
    setTimeout(() => {
      setIsCopying(false);
      setIsHotkey(false);
    }, 2000);
  };

  return (
    <GlobalHotKeys keyMap={keyMap} handlers={handlers} allowChanges>
      <div className="flex flex-col w-full justify-center items-center gap-10">
        <h1 className="text-8xl">
          <span className="line-through text-gray-700">WORK</span> PASSION
          LOGGER
        </h1>
        <div className="flex gap-10 w-full flex-col md:flex-row">
          <div className="card w-full md:w-1/2 xl:w-8/12 bg-base-100 shadow-xl">
            <div className="card-body gap-10">
              <DayDropDown
                openDropDown={openDropDown}
                setOpenDropDown={setOpenDropDown}
                activeDay={activeDay}
                setActiveDay={setActiveDay}
              />
              <LogEditor
                dayConfig={
                  days.find((day) => day.value === activeDay) || days[0]
                }
                setLogText={setLogText}
              />
            </div>
          </div>
          <div className="card w-full md:w-1/2 xl:w-4/12 bg-base-100 shadow-xl">
            <div className="card-actions items-end flex flex-col justify-center m-5 ">
              <button
                className="btn btn-primary w-24"
                onClick={() => copyHandler()}
              >
                {`Absorb${isCopying ? "ed" : ""}!!`}
              </button>
              <div className={classNames("flex gap-2 items-center",
                { "text-gray-500": !isHotkey },
                { "text-green-500": isHotkey }
              )}>
                <kbd className="kbd-xs">CMD</kbd>+<kbd className="kbd-xs">G</kbd>
              </div>
            </div>
            <div className="card-body">
              <h1 className="text-2xl">Preview</h1>
              <pre className="text-base whitespace-pre-wrap">{logText}</pre>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "alert alert-success w-max absolute opacity-0 top-10 left-10 transition-all duration-300 ease-in-out",
          { "opacity-100": isCopying }
        )}
      >
        <span>Passion Absorbed Successfully.</span>
      </div>
    </GlobalHotKeys>
  );
};

export default Home;
