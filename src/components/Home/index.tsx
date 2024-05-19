import React, { useEffect, useState } from "react";
import { GlobalHotKeys } from "react-hotkeys";
import copy from "copy-to-clipboard";
import dayjs from "dayjs";

import classNames from "classnames";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

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
          <LeftContent
            openDropDown={openDropDown}
            setOpenDropDown={setOpenDropDown}
            activeDay={activeDay}
            setActiveDay={setActiveDay}
            setLogText={setLogText}
          />
          <RightContent
            logText={logText}
            isCopying={isCopying}
            isHotkey={isHotkey}
            copyHandler={copyHandler}
          />
        </div>
      </div>
      <div
        className={classNames(
          "alert alert-success w-max fixed opacity-0 top-10 left-10 transition-all duration-300 ease-in-out",
          { "opacity-100": isCopying }
        )}
      >
        <span>Passion Absorbed Successfully.</span>
      </div>
    </GlobalHotKeys>
  );
};

export default Home;
