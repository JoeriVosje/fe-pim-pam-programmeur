import { Module } from 'src/app/admin-modules/modules-overzicht/modules-item/modules-item.model';

export interface Sessie {
    id: string;
    module: Module;
    studentsFinished: string;
    totalStudents: string;
    startTime: string;
    endTime: string;
  }





