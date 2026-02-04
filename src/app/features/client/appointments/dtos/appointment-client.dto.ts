//dto pour la création d'un rdv (service client)

export interface AppointmentRequest {
  startAt: string;
  note: string;
  hairdresserId: number | null;
}
