import { OSystems, languages, programLanguages, tools } from "@/data/skills";
import { ISkill } from "@/data/type";

export default function Skill() {
  return (
    <div>
      <div className="ml-3 mt-3 text-xl">Skills</div>
      <hr className="mx-3 border-white" />
      <ProgrammingSkill />
      <ToolSkill />
      <OsSkill />
      <LanguageSkill />
    </div>
  );
}

function Bar({ data: { name, level, Icon } }: { data: ISkill }) {
  return (
    <div className="bg-gray-300 my-2 rounded-full">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-600 to-blue-700"
        style={{ width: level }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
}

function ProgrammingSkill() {
  return (
    <div>
      <header className="ml-3 text-slate-800 text-sm mt-3 font-semibold">
        Programming
      </header>
      <div className="ml-3 text-xs">
        {programLanguages.map((programLanguage) => (
          <Bar data={programLanguage} key={programLanguage.name} />
        ))}
      </div>
    </div>
  );
}

function ToolSkill() {
  return (
    <div>
      <header className="ml-3 text-slate-800 text-sm mt-3 font-semibold">
        Tool
      </header>
      <div className="ml-3 text-xs">
        {tools.map((tool) => (
          <Bar data={tool} key={tool.name} />
        ))}
      </div>
    </div>
  );
}

function LanguageSkill() {
  return (
    <div>
      <header className="ml-3 text-slate-800 text-sm mt-3 font-semibold">
        Language
      </header>
      <div className="ml-3 text-xs my-2">
        {languages.map((language) => (
          <div key={language.name} className="flex justify-between mr-2">
            <div>{language.name}</div>
            <div>{language.level}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OsSkill() {
  return (
    <div>
      <header className="ml-3 text-slate-800 text-sm mt-3 font-semibold">
        Operating Systems
      </header>
      <div className="ml-3 text-xs">
        {OSystems.map((OSystem) => (
          <Bar data={OSystem} key={OSystem.name} />
        ))}
      </div>
    </div>
  );
}
