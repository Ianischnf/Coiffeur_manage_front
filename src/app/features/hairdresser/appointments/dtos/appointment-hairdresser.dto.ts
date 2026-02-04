import { AppointmentStatus } from 'src/app/core/models/appointment.model';

export interface AppointmentResponseStatus {
  appointmentId: number;
  status: AppointmentStatus;
}
