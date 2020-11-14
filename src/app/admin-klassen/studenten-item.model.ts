import { Klas } from './klassen-item.model';

export interface Student {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  classroom: Klas;
  role: number;
  creationDate: Date;
}
