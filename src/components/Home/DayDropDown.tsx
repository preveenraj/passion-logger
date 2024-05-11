import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import classNames from "classnames";
import { days } from "../../constants/logConstants";

interface DayDropDownProps {
    openDropDown: boolean;
    setOpenDropDown: (value: boolean) => void;
    activeDay: string;
    setActiveDay: (value: string) => void;
}

const DayDropDown: React.FC<DayDropDownProps> = ({
    openDropDown,
    setOpenDropDown,
    activeDay,
    setActiveDay,
}) => {

return (
    <div className={classNames("dropdown dropdown-bottom", { "dropdown-open": openDropDown })}>
        <div
            tabIndex={0}
            role="button"
            className="btn m-1"
            onMouseOver={() => {
                console.log("hovered");
                setOpenDropDown(true);
            }}
        >
            {activeDay}
        </div>
        <div className="">
            <ul
                tabIndex={0}
                className={classNames("dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52")}
            >
                {days.map(({ value }) => (
                    <li
                        key={value}
                        onClick={() => {
                            const elem = document.activeElement;
                            if(elem){
                              elem?.blur();
                            }
                            setOpenDropDown(false);
                            setActiveDay(value);
                        }}
                        className="active"
                    >
                        <p>{value}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);
};

export default DayDropDown;
