import Image from "next/image";

export default function Experience() {
  return (
    <div>
      <div className="flex">
        <Image
          className="ml-2"
          src="/suitcase.png"
          width={20}
          height={20}
          alt="scholar logo"
        />
        <div className="ml-2 mt-3 text-xl font-bold">Work Experience</div>
      </div>
      <hr className="mx-3 border-white" />
    </div>
  );
}
