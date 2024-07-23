import Link from "next/link";
import LanguageId from "./languageid";

export default function Home() {
  return (
    <main className="p-6">
      <p>Hi there!</p>
      <LanguageId />
      <Link href="/editlanguageid" className="underline">
        Edit languageId
      </Link>
    </main>
  );
}
