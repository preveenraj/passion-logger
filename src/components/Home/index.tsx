import React, { useEffect, useState } from "react";
import { GlobalHotKeys } from "react-hotkeys";
import copy from "copy-to-clipboard";
import dayjs from "dayjs";

import classNames from "classnames";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import { signOut } from "@/firebase/auth";

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
        <div className="flex justify-end m-5 fixed right-0 top-0">
          <button
            className="btn btn-square bg-transparent border-none"
            onClick={() => signOut()}
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.2713 2 18.1757 3.57078 20.0002 5.99923L17.2909 5.99931C15.8807 4.75499 14.0285 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.029 20 15.8816 19.2446 17.2919 17.9998L20.0009 17.9998C18.1765 20.4288 15.2717 22 12 22ZM19 16V13H11V11H19V8L24 12L19 16Z"></path></svg>
          </button>
        </div>
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
