import Hero from "./_components/Hero";
import Contact from "./_components/Contact";
import Skill from "./_components/Skill";

export default function page() {
  return (
    <div className="dark">
      <div className="dark:bg-neutral-700 flex justify-center h-screen">
        <div className="dark:text-white border-2 w-5/6 overflow-hidden my-10 shadow-md shadow-slate-50 dark:shadow-neutral-800 sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-2/5">
          <Hero />
          <div className="flex w-full h-full">
            <div className="bg-emerald-800 w-1/3 h-5/6">
              <Contact />
              <Skill />
            </div>
            <div className="dark:bg-neutral-700 w-2/3 h-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
