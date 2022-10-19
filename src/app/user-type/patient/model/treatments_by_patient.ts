export interface TreatmentPatient {
  id: number,
  patient_id: number,
  title: string,
  description: string,
  sessions_quantity: number,
  physiotherapist_id: number,
  photo: string,
  videoSessions: string[],
  registration_date: string,
  progress: number
}
