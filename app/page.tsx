import Description from "@/components/Description";
import ProjectsPage from "@/components/ProjectsPage";
import Social from "@/components/Social";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="h-dvh">
        <div className="flex flex-row justify-between mt-3 mb-10">
          <div className="ml-4 text-2xl">Mith Sovanda</div>
          <div className="flex flex-row justify-between w-1/4 mr-7">
            <div>Home</div>
            <div>Blog</div>
            <div>Life Goals</div>
            <div>CV</div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-40">
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
          <Social></Social>
        </div>
      </div>
      <div className="bg-white text-black p-10">
        <Description></Description>
      </div>
      <div className="flex justify-center item-center h-full text-4xl pt-10 pb-10">
        Portfolio
      </div>
      <ProjectsPage></ProjectsPage>
    </div>
  );
}
