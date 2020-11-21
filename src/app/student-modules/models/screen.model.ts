export interface Screen {
  id: string;
  title: string;
  theory?: string;
  question?: string;
  skippable: boolean;
  hint?: string;
  moduleId: string;
  answers: Answer[];
  lastScreen?: boolean;
}

export interface Answer {
  id: string;
  description: string;
}

export interface Feedback {
  success?: boolean;
  hint?: string;
}

