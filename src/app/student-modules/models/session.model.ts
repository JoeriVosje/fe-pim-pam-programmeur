import { Screen } from './screen.model';

export interface Session {
  sessionId: string;
  module: Module;
  studentsFinished: number;
  totalStudents: number;
  startTime: string;
  endTime: string;
}

export interface Module {
  id: string;
  name: string;
  creationDate: string;
}
export interface SessionStatus {
  sessionId: string;
  lastAnsweredComponent: Screen;
  finished: boolean;
}
