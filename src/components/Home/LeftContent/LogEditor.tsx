import React, { FC, useState, useEffect } from "react";
import HeaderTextArea from "./HeaderTextArea";
import MainTextArea from "./MainTextArea";
import FooterTextArea from "./FooterTextArea";

import { defaultLogs, Day } from "@/constants/logConstants";

interface LogEditorProps {
  setLogText: (value: string) => void;
  dayConfig: Day;
}

const LogEditor: FC<LogEditorProps> = ({ dayConfig, setLogText }) => {
  const [headerText, setHeaderText] = useState<string>("");
  const [mainText, setMainText] = useState<string>("");
  const [footerText, setFooterText] = useState<string>("");
  const [footerOptions, setFooterOptions] = useState<{ [key: string]: string }>(
    dayConfig?.footerOptions || {}
  );

  useEffect(() => {
    setHeaderText(dayConfig?.header || "");
    setMainText("");
    setFooterText(dayConfig?.footer || "");

    setFooterOptions(dayConfig?.footerOptions || {});
  }, [dayConfig]);

  const handleHeaderChange = (value: string) => {
    setHeaderText(value);
  };

  const toggleFooterOption = (key: string) => {
    setFooterOptions((prevOptions) => {
      return {
        ...prevOptions,
        [key]: prevOptions[key] ? "" : defaultLogs[key],
      };
    });
  };

  const toUpperCase = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  const onChangeFooterOption = (key: string, value: string) => {
    setFooterOptions({
      ...footerOptions,
      [key]: value,
    });
  };


  useEffect(() => {
    const generateText = () => {
        const textAray = [
        headerText,
        mainText
        .split("\n")
        .map((text) => `${(text && !text.startsWith('#') ? '-' : '')} ${toUpperCase(text)}${text && !text.startsWith('#') && !text.endsWith(".") ? '.' : ''}`)
        .join("\n"),
        footerText,
        " ",
        Object.entries(footerOptions)
            .filter(([_, text]) => text)
            .map(([_, text]) => `* ${text}`)
            .join("\n"),
        ];
        setLogText(textAray.filter((text) => text).map((text) => text.trim()).join("\n"));
    };
    generateText();
  }, [setLogText, headerText, mainText, footerText, footerOptions]);

  return (
    <div className="flex flex-col gap-5">
      <HeaderTextArea
        headerText={headerText}
        setHeaderText={handleHeaderChange}
      />
      <MainTextArea mainText={mainText} setMainText={setMainText} />
      <FooterTextArea
        footerText={footerText}
        setFooterText={setFooterText}
        options={footerOptions}
        toggleOption={toggleFooterOption}
        onChangeOption={onChangeFooterOption}
      />
    </div>
  );
};

export default LogEditor;
