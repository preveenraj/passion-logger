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
      {Object.entries(options).map(([key, value]) => {
        return (
          <div className="" key={key}>
            <div className="form-control w-max">
              <label className="label cursor-pointer flex gap-2">
                <span className="label-text">Disc. with Rob?</span>
                <input
                  type="checkbox"
                  checked={!!value}
                  className="checkbox checkbox-primary"
                  onChange={() => toggleOption(key)}
                />
              </label>
            </div>
            {value && (
              <textarea
                className="textarea textarea-bordered textarea-lg w-full h-16"
                placeholder="footer..."
                value={value}
                onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                  onChangeOption(key, event.target.value);
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FooterTextArea;
