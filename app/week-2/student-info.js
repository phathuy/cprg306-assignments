// code a react component called StudentInfo that renders Your Name, and a link to GitHub repository, use Link component from Next.js to link your Github repo
import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <h2>Name: Huy Phat Huynh</h2>
      <p>
        GitHub: <Link className="underline" href="https://github.com/phathuy/cprg306-assignments">phathuy/cprg306-assignments</Link>
      </p>
    </div>
  );
}