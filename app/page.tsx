import Link from "next/link";
import LanguageId from "./components/languageid";

export default function Home() {
  return (
    <main className="px-4 pb-4">
      <p className="text-lg">Home page - Server component</p>
      <p className="my-4">
        This tiny Next.js 14 app is a small trial and example of using React
        createContext method and useContext hook to share application settings
        data across some components of the app which have to be client
        components, with some other server component(s) using/including these
        client components.
      </p>
      <p>
        <a
          href="https://github.com/ravisiyer/testusecontext-njs"
          className="underline"
        >
          GitHub Repo
        </a>
      </p>
      <p className="my-2">
        AppSettings is an object with app settings. It has languageId and
        setLanguageId as properties. AppSettings is used by AppSettingsContext
        which is created using createContext method and retrieved with
        useContext hook.
      </p>
      <p className="my-2">
        The components that access or set languageId of application settings
        need to be client components. The Home page is an example of a server
        component that includes a client component which outputs the value of
        languageId and links to another client component page which edits
        languageId.
      </p>
      <hr className="border-black border my-4" />
      <p className="my-4">
        Below output is from a client component included in Home page which
        accesses languageId in AppSettings in AppSettingsContext and simply
        displays its value.
      </p>
      {/* <hr className="border-black border my-4" /> */}
      <LanguageId />
      <hr className="border-black border my-4" />
      <p className="my-4">
        Below link goes to another page which is a client component which edits
        languageId in AppSettings in AppSettingsContext.
      </p>
      <Link href="/editlanguageid" className="underline my-4">
        Edit languageId
      </Link>
    </main>
  );
}
