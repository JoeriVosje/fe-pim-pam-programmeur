export interface Sessie {
    id: string;
    module: {
      moduleId: string;
      moduleName: string;
      creationDate: string;
    }
    studentsFinished: number;
    studentsTotal: number;
    timeStarted: string;
    timeFinished: string;
  }





