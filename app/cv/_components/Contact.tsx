import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <div className="ml-3 mt-3 text-xl font-bold">Contact</div>
      <hr className="mx-3 border-white" />
      <div className="flex text-xs mt-2">
        <Link href="mailto:vanda.can.read@gmail.com" target="_blank">
          <Image
            className="ml-3"
            src="/gmail.png"
            width={20}
            height={20}
            alt="gmail logo"
          />
        </Link>
        <Link
          href="mailto:vanda.can.read@gmail.com"
          target="_blank"
          className="ml-2 mt-1"
        >
          vanda.can.read@gmail.com
        </Link>
      </div>
      <div className="flex text-xs mt-1">
        <Link
          href="https://www.google.com/maps/place/%E1%9E%98%E1%9E%B6%E1%9E%93%E1%9E%87%E1%9F%90%E1%9E%99/@11.8323575,105.0556157,14z/data=!4m6!3m5!1s0x310c02c5b70a9973:0x879b5b39271340e2!8m2!3d11.8318868!4d105.0645091!16s%2Fg%2F11bymwn70b?entry=ttu"
          target="_blank"
        >
          <Image
            className="ml-3"
            src="/location.png"
            width={15}
            height={15}
            alt="locatioon icon"
          />
        </Link>
        <Link
          href="https://www.google.com/maps/place/%E1%9E%98%E1%9E%B6%E1%9E%93%E1%9E%87%E1%9F%90%E1%9E%99/@11.8323575,105.0556157,14z/data=!4m6!3m5!1s0x310c02c5b70a9973:0x879b5b39271340e2!8m2!3d11.8318868!4d105.0645091!16s%2Fg%2F11bymwn70b?entry=ttu"
          target="_blank"
          className="ml-3"
        >
          Mean Chey, Phnom Penh, Cambodia
        </Link>
      </div>
      <div className="flex text-xs mt-1">
        <Link href="" target="_blank">
          <Image
            className="ml-3"
            src="/home.png"
            width={15}
            height={15}
            alt="home icon"
          />
        </Link>
        <Link href="" target="_blank" className="ml-3">
          placeholder
        </Link>
      </div>
      <div className="flex text-xs mt-1">
        <Link href="https://github.com/Sovanda-Mith" target="_blank">
          <Image
            className="ml-3"
            src="/github.png"
            width={15}
            height={15}
            alt="github logo"
          />
        </Link>
        <Link
          href="https://github.com/Sovanda-Mith"
          target="_blank"
          className="ml-3"
        >
          Sovanda-Mith
        </Link>
      </div>
      <div className="flex text-xs mt-1">
        <Link
          href="https://www.linkedin.com/in/sovanda-mith-46751518b/"
          target="_blank"
        >
          <Image
            className="ml-3"
            src="/linkedin.png"
            width={15}
            height={15}
            alt="linkedin logo"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/sovanda-mith-46751518b/"
          target="_blank"
          className="ml-3"
        >
          Sovanda Mith
        </Link>
      </div>
    </div>
  );
}
