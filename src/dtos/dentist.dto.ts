import { Dentist } from '@prisma/client';
import { LEVEL_DENTIST } from '../enums';

export class DentistDto implements Omit<Dentist, 'id'> {
  name: string;
  surname: string;
  level: (typeof LEVEL_DENTIST)[keyof typeof LEVEL_DENTIST];
}
