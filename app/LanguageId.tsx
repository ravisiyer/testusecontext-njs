"use client";
import { getAppSettings } from "./getappsettings";

function LanguageId() {
  const appSettings = getAppSettings();

  return <p>LanguageId: {appSettings.languageId}</p>;
}
export default LanguageId;
