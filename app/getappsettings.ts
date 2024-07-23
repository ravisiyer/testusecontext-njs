"use client";
import { useContext } from "react";
import { AppSettingsContext, AppSettingsType } from "./providertest";

export function getAppSettings() {
  const AppSettings: AppSettingsType = useContext(AppSettingsContext);
  return AppSettings;
}
