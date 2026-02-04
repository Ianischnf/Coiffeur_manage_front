
export type AppointmentStatus = 'PENDING' | 'ACCEPTED' | 'REFUSED';

export interface ClientSummary {
  id: number;
  firstName: string;
  lastName: string;
}

export interface HairdresserSummary {
  id: number;
  firstName?: string;
  lastName?: string;
}

export interface Appointment {
  appointmentId: number;
  startAt: string;
  hairdresserId: number;
  hairdresser: string;
  note: string;
  status: AppointmentStatus;
  client: ClientSummary;
}
