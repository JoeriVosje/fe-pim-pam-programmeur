export interface Student {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  classroom: Classroom;
  role: number;
  creationDate: string;
}

export interface Classroom {
  id: string;
  module: Module;
  name: string;
  major: string;
}

export interface Module {
  id: string;
  name: string;
  creationDate: string;
}
