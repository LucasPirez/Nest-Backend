import { Module } from '@nestjs/common';
import { AppointmentModule } from './appointments/appointment.module';
import { PatientModule } from './patients/patients.module';
import { DentistModule } from './dentists/dentist.module';

@Module({
  imports: [AppointmentModule, PatientModule, DentistModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
