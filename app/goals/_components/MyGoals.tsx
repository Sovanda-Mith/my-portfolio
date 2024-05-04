import { Checkbox } from "@/components/ui/checkbox";

export default function MyGoals() {
  return (
    <div className="ml-4">
      <div className="text-4xl font-semibold text-red-500 mb-4">
        Goals that drive me everyday
      </div>
      <div className="text-2xl text-white">
        <div>
          <Checkbox id="goal1" className="mr-3" disabled />
          <label htmlFor="goal1">Earn enough income to support my family</label>
        </div>
        <div>
          <Checkbox id="goal2" className="mr-3" disabled />
          <label htmlFor="goal2">
            Travelling around the world w/ my love ones
          </label>
        </div>
        <div>
          <Checkbox id="goal3" className="mr-3" disabled />
          <label htmlFor="goal3">Not having to worry about living costs</label>
        </div>
      </div>
    </div>
  );
}
