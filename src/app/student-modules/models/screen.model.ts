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

export interface Result {
  answerId: string;
  sessionId: string;
  userId: string;
  startTime: string;
}

export interface Feedback {
  success: boolean;
  correctAnswerId: string;
  hint: string;
}

export interface Skip {
  userId: string;
  componentId: string;
  sessionId: string;
  startTime: string;
}

export interface SkipFeedback {
  id: string;
  description: string;
}
