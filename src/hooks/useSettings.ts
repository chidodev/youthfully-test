import { useContext } from 'react';
import { SettingsContext, SettingsContextValue } from 'src/utils/types';

export const useSettings = (): SettingsContextValue =>
  useContext(SettingsContext);
