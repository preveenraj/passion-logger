import React from 'react';
import DayDropDown from './DayDropDown';
import LogEditor from './LogEditor';

import { days } from "@/constants/logConstants";

interface Props {
    openDropDown: boolean;
    setOpenDropDown: (value: boolean) => void;
    activeDay: string;
    setActiveDay: (value: string) => void;
    setLogText: (value: string) => void;
}

const LeftContent: React.FC<Props> = ({
    openDropDown,
    setOpenDropDown,
    activeDay,
    setActiveDay,
    setLogText,
}) => {
    // Implement your component logic here

    return (
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
    );
};

export default LeftContent;