export interface Question {
  id: string;
  title: string;
  theory?: string;
  question?: string;
  skippable: boolean;
  hint?: string;
  moduleId: string;
  answers: Answer[];
}

export interface Answer {
  id: string;
  description: string;
}
