import { Module } from '../admin-modules/modules-overzicht/modules-item/modules-item.model';

export interface Klas {
    id: string;
    name: string;
    module: Module;
    major: string;
  }
  