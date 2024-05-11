
const defaultLogs: { [key: string]: string } = {
  hadDiscussinsWithRob: "Discussions with Rob on current tasks",
  brightSync: "Sync with Bright Dev Team",
  eidosSync: "Sync with Eidos Team",
};

type Day = {
  value: string;
  header?: string;
  footer?: string;
  footerOptions: {
    hadDiscussinsWithRob: string;
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
      hadDiscussinsWithRob: defaultLogs.hadDiscussinsWithRob,
    },
  },
  {
    value: "Tuesday",
    header: ``,
    footerOptions: {
      hadDiscussinsWithRob: defaultLogs.hadDiscussinsWithRob,
      brightSync: defaultLogs.brightSync,
      eidosSync: defaultLogs.eidosSync,
    },
  },
  {
    value: "Wednesday",
    footerOptions: {
      hadDiscussinsWithRob: defaultLogs.hadDiscussinsWithRob,
    },
  },
  {
    value: "Thursday",
    footerOptions: {
      hadDiscussinsWithRob: defaultLogs.hadDiscussinsWithRob,
    },
  },
  {
    value: "Friday",
    footerOptions: {
      hadDiscussinsWithRob: defaultLogs.hadDiscussinsWithRob,
    },
  },
];

export type { Day };
export { days, defaultLogs };
