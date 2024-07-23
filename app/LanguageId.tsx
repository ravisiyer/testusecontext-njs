"use client";
import { getAppSettings } from "./getappsettings";

function LanguageId() {
  const AppSettings = getAppSettings();
  const languageId = AppSettings.languageId;
  const setLanguageId = AppSettings.setLanguageId;
  // setLanguageId(10);
  return <p>{`languageId = ${languageId}`}</p>;
}
export default LanguageId;
