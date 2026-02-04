//DTO pour les méthodes accepter/refuse rdv (service coiffeur)

import { AppointmentStatus } from 'src/app/core/models/appointment.model';

export interface AppointmentResponseStatus {
  appointmentId: number;
  status: AppointmentStatus;
}
