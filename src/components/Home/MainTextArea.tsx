import React, { ChangeEvent } from "react";

interface MainTextAreaProps {
  mainText: string;
  setMainText: (value: string) => void;
}

const MainTextArea: React.FC<MainTextAreaProps> = ({
  mainText,
  setMainText,
}) => {
  return (
    <div className="">
      <textarea
        autoFocus
        value={mainText}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setMainText(e.target.value)
        }
        className="textarea textarea-info textarea-lg w-full h-48"
        placeholder="Start typing..."
      ></textarea>
    </div>
  );
};

export default MainTextArea;
