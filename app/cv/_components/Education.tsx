import { educations } from "@/data/educations";
import { IEdu } from "@/data/type";
import Image from "next/image";
import Link from "next/link";

export default function Education() {
  return (
    <div>
      <div className="flex">
        <Image
          className="ml-2"
          src="/scholar.png"
          width={20}
          height={20}
          alt="scholar logo"
        />
        <div className="ml-2 mt-3 text-xl">Education</div>
      </div>
      <hr className="mx-3 border-white" />
      {educations.map((education) => (
        <EducationLayout data={education} key={education.name} />
      ))}
    </div>
  );
}

function EducationLayout({
  data: { name, description, location, calendar, locationUrl },
}: {
  data: IEdu;
}) {
  return (
    <div className="mt-3 ml-3 text-sm">
      <div className="flex mb-1">
        <Image
          className="mr-2"
          src="/calendar.png"
          width={15}
          height={10}
          alt="calendar icon"
        />
        <div>{calendar}</div>
      </div>
      <div className="flex mb-1">
        <Link href={locationUrl}>
          <Image
            className="mr-2"
            src="/location.png"
            width={15}
            height={10}
            alt="calendar icon"
          />
        </Link>
        <Link href={locationUrl}>{location}</Link>
      </div>
      <div className="ml-1 text-lg">{name}</div>
      <div className="ml-1 text-sm">{description}</div>
    </div>
  );
}
