export type Section = 'hot' | 'top' | 'user';
export type Sort = 'viral' | 'top' | 'time' | 'rising';
export type Window = 'day' | 'week' | 'month' | 'year' | 'all';

export type Settings = {
  section: Section;
  sort: Sort;
  window: Window;
  page: number;
  viral: boolean;
};

export type SettingsContextValue = {
  settings: Settings;
  saveSettings: (updatedSettings: Settings) => void;
};
