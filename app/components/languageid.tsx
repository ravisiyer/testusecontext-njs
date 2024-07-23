"use client";
import { getAppSettings } from "./provider";

function LanguageId() {
  const appSettings = getAppSettings();

  return <p>languageId: {appSettings.languageId}</p>;
}
export default LanguageId;
