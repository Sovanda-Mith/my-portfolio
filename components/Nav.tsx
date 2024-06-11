import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex flex-row justify-between mb-10">
      <Link className="ml-4 text-2xl text-white mt-5 font-semibold hover:text-cyan-300" href='/'>Mith Sovanda</Link>
      <div className="flex flex-row justify-between w-1/4 mr-7 text-white mt-5">
        <Link href="/" className="hover:text-slate-500">
          Home
        </Link>
        <Link href="/blog" className="hover:text-slate-500">
          Blog
        </Link>
        <Link href="/goals" className="hover:text-slate-500">
          Life Goals
        </Link>
        <Link href="/cv" className="hover:text-slate-500">
          CV
        </Link>
      </div>
    </div>
  );
}
