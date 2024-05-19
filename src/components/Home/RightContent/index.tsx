import React, { useContext, useEffect, useState } from "react";
import { signIn } from "@/firebase/auth";
import classNames from "classnames";
import ScratchPad from "./ScratchPad";

import { UserAuth } from "@/contexts/AuthContext";
import useAutosave from "@/hooks/autosave";

interface Props {
  copyHandler: () => void;
  isCopying: boolean;
  isHotkey: boolean;
  logText: string;
}

const RightContent: React.FC<Props> = ({
  copyHandler,
  isCopying,
  isHotkey,
  logText,
}) => {
  const [activeTab, setActiveTab] = useState("scratch_pad");
  const [scratchText, setScratchText] = useAutosave("");

  const { user, loading } = UserAuth();

  useEffect(() => {
    if (user) {
        setScratchText(user.scratchPad);
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card w-full md:w-1/2 xl:w-4/12 bg-base-100 shadow-xl">
      <div role="tablist" className="tabs tabs-boxed m-10">
        <button
          role="tab"
          className={classNames("tab", {
            "tab-active": activeTab === "scratch_pad",
          })}
          onClick={() => setActiveTab("scratch_pad")}
        >
          Scratch Pad
        </button>
        <button
          role="tab"
          className={classNames("tab", {
            "tab-active": activeTab === "preview",
          })}
          onClick={() => setActiveTab("preview")}
        >
          Preview
        </button>
      </div>
      {activeTab === "scratch_pad" ? (
        <div className="card-actions h-full m-5">
          <ScratchPad
            scratchText={scratchText}
            setScratchText={setScratchText}
          />
        </div>
      ) : (
        <div className="card-actions  m-5">
          <div className="items-end flex flex-col justify-center w-full">
            <button className="btn btn-primary w-24" onClick={() => signIn()}>
              {`Absorb${isCopying ? "ed" : ""}!!`}
            </button>
            <div
              className={classNames(
                "flex gap-2 items-center",
                { "text-gray-500": !isHotkey },
                { "text-green-500": isHotkey }
              )}
            >
              <kbd className="kbd-xs">CMD</kbd>+<kbd className="kbd-xs">G</kbd>
            </div>
          </div>
          <div className="card-body">
            <pre className="text-base whitespace-pre-wrap">{logText}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightContent;
