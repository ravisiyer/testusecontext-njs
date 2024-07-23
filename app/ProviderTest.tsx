"use client";
import { createContext, useState } from "react";
import { ReactNode } from "react";

export interface AppSettingsType {
  languageId: number;
  setLanguageId: (languageId: number) => void | null;
}
export const AppSettingsContext = createContext<AppSettingsType>({
  languageId: 1,
  setLanguageId: (languageId) => {},
});

function ProvidersTest({ children }: { children: ReactNode }) {
  const [languageId, setLanguageId] = useState(4);
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

export default ProvidersTest;
