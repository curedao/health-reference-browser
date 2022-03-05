import { SpecialParameter } from "./biomarker.model";

export interface LabPanel {
  id: string;
  name: string;
  entries: SpecialParameter[];
  description?: string;
  references?: string[];
}

export interface LabPanelMap {
  [key: string]: LabPanel[];
}