"use client";
import { getAppSettings } from "../components/provider";
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
    <div className="px-4 pb-4">
      <p className="text-lg">Edit languageId page - Client component</p>

      <form className="my-4" onSubmit={handleSubmit}>
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
          value="Set & Go Home"
          className="px-1 ml-1 leading-normal border-black border  text-black  bg-white rounded-md cursor-pointer hover:text-black hover:bg-violet-400 active:scale-90 "
        />
        {/* <span className="ml-1"> Set goes back to home page.</span> */}
      </form>
    </div>
  );
}
export default Page;
