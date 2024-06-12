import MediumArticles from "@/components/MediumArticles";
import Nav from "@/components/Nav";
import VideoBackground from "@/components/VideoBackground";

export default function Blog() {
  return (
    <div className="relative w-full h-screen text-white">
      <VideoBackground />
      <div className="absolute top-0 w-full h-full">
        <Nav />
        <MediumArticles />
      </div>
    </div>
  );
}
