import React, { ChangeEvent } from "react";

interface ScratchPadProps {
  scratchText: string;
  setScratchText: (value: string) => void;
}

const ScratchPad: React.FC<ScratchPadProps> = ({
  scratchText,
  setScratchText,
}) => {
  return (
    <div className="w-full h-full">
      <textarea
        autoFocus
        value={scratchText}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setScratchText(e.target.value)
        }
        className="textarea textarea-info textarea-lg w-full h-full"
        placeholder="Start typing..."
      ></textarea>
    </div>
  );
};

export default ScratchPad;
