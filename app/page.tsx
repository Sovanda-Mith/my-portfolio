import Description from "@/components/Description";
import Nav from "@/components/Nav";
import ProjectsPage from "@/components/ProjectsPage";
import Social from "@/components/Social";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="h-dvh bg-neutral-900">
        <Nav />
        <div className="flex flex-col justify-center items-center mt-40 text-white">
          <Image
            className="border-2 border-black rounded-lg"
            src="/my-pf.png"
            width={200}
            height={200}
            alt="Picture of the author"
          ></Image>
          <div className="mt-7 text-4xl">
            Student, Developer & Game Enthusiast
          </div>
          <Social />
        </div>
      </div>
      <div className="bg-white text-black p-10">
        <Description></Description>
      </div>
      <div className="flex justify-center text-4xl text-white pt-10 pb-10 bg-neutral-800">
        Portfolio
      </div>
      <ProjectsPage />
    </div>
  );
}
