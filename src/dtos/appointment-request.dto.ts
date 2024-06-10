import { Appointment } from '@prisma/client';

export class AppointmentRequestDto implements Omit<Appointment, 'id'> {
  dentistId: number;
  patientId: number;
  date: Date;
}
