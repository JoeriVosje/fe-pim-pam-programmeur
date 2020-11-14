export interface Screen {
  title: string;
  theory: string;
  question: string;
  answers?: Array<Answer>;
  hint?: string;
  skippable?: boolean;
  id?: string;
  moduleId: string;
}

export interface Answer {

  description: string;
  isCorrectAnswer: boolean;
}
