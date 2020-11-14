export interface Screen {
  title: string;
  theory: string;
  question: string;
  questionA?: string;
  questionB?: string;
  questionC?: string;
  questionD?: string;
  correctAnswer?: string;
  feedback?: string;
  skippable?: string;
  id?: string;
}
