import { Checkbox } from "@/components/ui/checkbox";

export default function CurrentGoals() {
  return (
    <div className="ml-4 my-4">
      <div className="text-4xl my-4 font-semibold text-green-600">
        Current Goals I want to achieve
      </div>
      <div className="text-2xl text-white">
        <div>
          <Checkbox id="current1" className="mr-3" disabled />
          <label htmlFor="current1">Get fit</label>
        </div>
        <div>
          <Checkbox id="current2" className="mr-3" disabled />
          <label htmlFor="current2">Get Internship or Work</label>
        </div>
        <div>
          <Checkbox id="current3" className="mr-3" disabled />
          <label htmlFor="current3">Moving out from home</label>
        </div>
        <div>
          <Checkbox id="current4" className="mr-3" disabled />
          <label htmlFor="current4">Have more discipline</label>
        </div>
        <div>
          <Checkbox id="current5" className="mr-3" disabled />
          <label htmlFor="current5">Improving my content creation skills</label>
        </div>
        <div>
          <Checkbox id="current6" className="mr-3" disabled />
          <label htmlFor="current6">Improving my web development skills</label>
        </div>
        <div>
          <Checkbox id="current7" className="mr-3" disabled />
          <label htmlFor="current7">Improving my editing skills</label>
        </div>
        <div>
          <Checkbox id="current8" className="mr-3" disabled />
          <label htmlFor="current8">Getting better at Cybersecurity</label>
        </div>
        <div>
          <Checkbox id="current9" className="mr-3" disabled />
          <label htmlFor="current9">Getting better at DevOps</label>
        </div>
      </div>
    </div>
  );
}
