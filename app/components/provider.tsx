"use client";
import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

export interface AppSettingsType {
  languageId: number;
  setLanguageId: (languageId: number) => void | null;
}
export const AppSettingsContext = createContext<AppSettingsType>({
  languageId: 1,
  setLanguageId: (languageId) => {},
});

function Provider({ children }: { children: ReactNode }) {
  const [languageId, setLanguageId] = useState(1);
  let AppSettings: AppSettingsType = {
    languageId: languageId,
    setLanguageId: setLanguageId,
  };
  return (
    <AppSettingsContext.Provider value={AppSettings}>
      {children}
    </AppSettingsContext.Provider>
  );
}

export function getAppSettings() {
  const AppSettings: AppSettingsType = useContext(AppSettingsContext);
  return AppSettings;
}

export default Provider;
