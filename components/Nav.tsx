import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex flex-row justify-between mb-10">
      <div className="ml-4 text-2xl text-white mt-5">Mith Sovanda</div>
      <div className="flex flex-row justify-between w-1/4 mr-7 text-white mt-5">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/goals">Life Goals</Link>
        <Link href="/cv">CV</Link>
      </div>
    </div>
  );
}
