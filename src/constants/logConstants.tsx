
const defaultLogs: { [key: string]: string } = {
  hadDiscussionsWithRob: "Discussions with Rob on current tasks.",
  hadDiscussionsWithVP: "Discussions with VP on current tasks.",
  brightSync: "Sync with Bright Dev Team.",
  eidosSync: "Sync with Eidos Team.",
};

type Day = {
  value: string;
  header?: string;
  footer?: string;
  footerOptions: {
    hadDiscussionsWithRob: string;
    hadDiscussionsWithVP?: string;
    brightSync?: string;
    eidosSync?: string;
  };
};

const days: Day[] = [
  {
    value: "Monday",
    header: "",
    footer: "",
    footerOptions: {
      hadDiscussionsWithRob: defaultLogs.hadDiscussionsWithRob,
      hadDiscussionsWithVP: defaultLogs.hadDiscussionsWithVP,
    },
  },
  {
    value: "Tuesday",
    header: ``,
    footerOptions: {
      hadDiscussionsWithRob: defaultLogs.hadDiscussionsWithRob,
      eidosSync: defaultLogs.eidosSync,
      brightSync: defaultLogs.brightSync,
    },
  },
  {
    value: "Wednesday",
    footerOptions: {
      hadDiscussionsWithRob: defaultLogs.hadDiscussionsWithRob,
    },
  },
  {
    value: "Thursday",
    footerOptions: {
      hadDiscussionsWithRob: defaultLogs.hadDiscussionsWithRob,
      hadDiscussionsWithVP: defaultLogs.hadDiscussionsWithVP,
    },
  },
  {
    value: "Friday",
    footerOptions: {
      hadDiscussionsWithRob: defaultLogs.hadDiscussionsWithRob,
    },
  },
];

export type { Day };
export { days, defaultLogs };
