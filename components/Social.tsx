import Image from "next/image";
import Link from "next/link";

export default function Social() {
  return (
    <div className="flex flex-row w-1/2 justify-evenly mt-5">
      <Link
        href="https://www.linkedin.com/in/sovanda-mith-46751518b/"
        target="_blank"
      >
        <Image
          src="/linkedin.png"
          width={40}
          height={30}
          alt="linkedin icon"
        ></Image>
      </Link>
      <Link
        href="https://github.com/Sovanda-Mith?tab=repositories"
        target="_blank"
      >
        <Image
          src="/github.png"
          width={40}
          height={30}
          alt="github icon"
        ></Image>
      </Link>
      <Link
        href="https://www.upwork.com/freelancers/~01fd26723422f929c7"
        target="_blank"
      >
        <Image
          src="/upwork.png"
          width={40}
          height={30}
          alt="upwork icon"
        ></Image>
      </Link>
      <Link href="https://www.fiverr.com/mith_sovanda" target="_blank">
        <Image
          src="/fiverr.png"
          width={40}
          height={30}
          alt="fiverr icon"
        ></Image>
      </Link>
      <Link href="mailto:vanda.can.read@gmail.com">
        <Image src="/gmail.png" width={40} height={30} alt="gmail icon"></Image>
      </Link>
    </div>
  );
}
