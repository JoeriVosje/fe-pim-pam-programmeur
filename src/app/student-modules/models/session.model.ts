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
