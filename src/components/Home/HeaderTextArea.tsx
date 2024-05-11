import React, { ChangeEvent } from "react";

interface HeaderTextAreaProps {
  headerText: string;
  setHeaderText: (value: string) => void;
}

const HeaderTextArea: React.FC<HeaderTextAreaProps> = ({
  headerText,
  setHeaderText,
}) => {
  return (
    <div className="">
      <textarea
        value={headerText}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          setHeaderText(event.target.value);
        }}
        className="textarea textarea-bordered textarea-lg w-full h-16"
        placeholder="header..."
      ></textarea>
    </div>
  );
};

export default HeaderTextArea;
