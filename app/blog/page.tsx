import MediumArticles from "@/components/MediumArticles";
import Nav from "@/components/Nav"

export default function Blog() {
  return (
    <div className="bg-neutral-700 w-full h-screen text-white">
      <Nav />
      <MediumArticles />
      {/* <div className="w-full h-full flex justify-center items-center">
        I don&apos;t currently have a blog but it&apos;s something I want to do
        one day.
      </div> */}
    </div>
  );
}
