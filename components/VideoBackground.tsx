export default function VideoBackground() {
  return (
    <video
      src="/video_background.mp4"
      autoPlay
      loop
      muted
      className="w-full h-full object-cover"
    ></video>
  );
}
