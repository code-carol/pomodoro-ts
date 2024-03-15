export const DEFAULT_OPTIONS = [
  { label: "pomodoro 🍅", time: "00:05" },
  { label: "short break ☕️", time: "00:02" },
  { label: "long break 😴", time: "00:03" },
];

export const POMODORO_FLOW = [
  DEFAULT_OPTIONS[0], // pomodoro
  DEFAULT_OPTIONS[1], // short break
  DEFAULT_OPTIONS[0], // pomodoro
  DEFAULT_OPTIONS[1], // short break
  DEFAULT_OPTIONS[0], // pomodoro
  DEFAULT_OPTIONS[2], // long break
];
