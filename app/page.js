import Link from "next/link";
import Page from "./week-2/page";

export default function Home() {
  return (
    <main>
      <h1> CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2">Go to Week 2 → </Link>
      <Link href="/week-3">Go to Week 3 → </Link>
      <Link href="/week-4">Go to Week 4 → </Link>
    </main>
  );
}
