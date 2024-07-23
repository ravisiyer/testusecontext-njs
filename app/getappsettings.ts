"use client";
import { useContext } from "react";
import { AppSettingsContext, AppSettingsType } from "./ProviderTest";

export function getAppSettings() {
  const AppSettings: AppSettingsType = useContext(AppSettingsContext);
  return AppSettings;
}
