import { createContext } from 'react';
import { initialSettings } from './constants';

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

export type Image = {
  id: string;
  title: string;
  description: string;
  link: string;
};

export type ImageData = {
  id: string;
  title: string;
  description: string;
  link: string;
  ups: number;
  downs: number;
  score: number;
  images_count: number;
  images: Image[];
};

export const SettingsContext = createContext<SettingsContextValue>({
  saveSettings: () => null,
  settings: initialSettings,
});

export type SettingsContextValue = {
  settings: Settings;
  saveSettings: (updatedSettings: Settings) => void;
};
