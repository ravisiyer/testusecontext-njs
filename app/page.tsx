// "use client";
// import { getAppSettings } from "./getappsettings";
import LanguageId from "./LanguageId";

export default function Home() {
  // const AppSettings = getAppSettings();
  // const languageId = AppSettings.languageId;
  // const setLanguageId = AppSettings.setLanguageId;
  // setLanguageId(10);
  return (
    <main className="p-6">
      <p>Hi there!</p>
      <LanguageId />
      {/* <p>{`languageId = ${languageId}`}</p> */}
    </main>
  );
}
