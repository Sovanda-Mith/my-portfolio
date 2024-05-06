import { IconType } from "react-icons";

export interface ISkill {
  name: string;
  level: string;
  Icon: IconType;
}

export interface ITool {
  name: string;
  level: string;
  Icon: IconType;
}

export interface ILanguage {
  name: string;
  level: string;
}

export interface IOs {
  name: string;
  level: string;
  Icon: IconType;
}

export interface IEdu {
  location: string;
  calendar: string;
  name: string;
  description: string;
  locationUrl: string;
}
