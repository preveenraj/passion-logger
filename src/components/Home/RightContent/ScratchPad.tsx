import React, { ChangeEvent, useEffect, useRef } from "react";

interface ScratchPadProps {
  scratchText: string;
  setScratchText: (value: string) => void;
}

const ScratchPad: React.FC<ScratchPadProps> = ({
  scratchText,
  setScratchText,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  }, [textareaRef.current]);

  return (
    <div className="w-full h-full">
      <textarea
        ref={textareaRef}
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
