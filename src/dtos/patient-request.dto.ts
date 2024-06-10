import { Patient } from '@prisma/client';

export class PatientRequestDto implements Omit<Patient, 'id'> {
  name: string;
  surname: string;
  gender: string;
  dni: number;
}
