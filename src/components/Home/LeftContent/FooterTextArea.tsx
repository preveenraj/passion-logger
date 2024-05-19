import React, { ChangeEvent } from "react";

import { defaultLogs } from "@/constants/logConstants";

interface FooterTextAreaProps {
  footerText: string;
  setFooterText: (value: string) => void;
  options: { [key: string]: string };
  toggleOption: (key: string) => void;
  onChangeOption: (key: string, value: string) => void;
}

const FooterTextArea: React.FC<FooterTextAreaProps> = ({
  footerText,
  setFooterText,
  options,
  toggleOption,
  onChangeOption,
}) => {
  return (
    <div className="">
      <textarea
        className="textarea textarea-bordered textarea-lg w-full h-16"
        placeholder="footer..."
        value={footerText}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          setFooterText(event.target.value);
        }}
      />
      <div className="flex flex-col gap-2 mt-4">
        {Object.entries(options).map(([key, value]) => {
          return (
            <div className="" key={key}>
              <div className="flex gap-2 items-center">
                <div className="flex w-12 justify-center">
                  <input
                    type="checkbox"
                    checked={!!value}
                    className="checkbox checkbox-primary checkbox-lg"
                    onChange={() => toggleOption(key)}
                  />
                </div>
                <textarea
                  className="textarea textarea-bordered textarea-lg w-full h-16 grey-500"
                  placeholder={key}
                  disabled={!value}
                  value={value}
                  onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                    onChangeOption(key, event.target.value);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterTextArea;
