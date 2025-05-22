import Nav from "@/components/Nav";
import MyGoals from "./_components/MyGoals";
import CurrentGoals from "./_components/CurrentGoals";

export default function Goals() {
  return (
    <div className="bg-neutral-700 w-full h-screen">
      <Nav />
      <MyGoals />
      <CurrentGoals />
    </div>
  );
}
