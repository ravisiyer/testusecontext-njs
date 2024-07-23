"use client";
import { getAppSettings } from "../getappsettings";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Page() {
  const AppSettings = getAppSettings();
  const [formLanguageId, setFormLanguageId] = useState<number>(
    AppSettings.languageId
  );

  const { replace } = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    AppSettings.setLanguageId(formLanguageId);
    replace("/");
  }

  return (
    <form className="inline p-6" onSubmit={handleSubmit}>
      <label htmlFor="idLanguageId" className="mr-1">
        languageId
      </label>
      <input
        className="mr-1 text-black border border-neutral-500 w-16 md:w-11 py-px px-0.5"
        type="number"
        id="idLanguageId"
        size={2}
        value={formLanguageId}
        onChange={(e) => {
          setFormLanguageId(Number(e.target.value));
        }}
      />
      <input
        type="submit"
        value="Set"
        className="px-1 ml-1 leading-normal  text-black md:text-lg  bg-orange-400 rounded-md cursor-pointer hover:text-black hover:bg-violet-50 active:scale-90 "
      />
    </form>
  );
}
export default Page;
