export interface Appointment {
  id: number;
  patient_name: string;
  patient_surname: string;
  physiotherapist_id: number,
  patient_id: number,
  date: string;
  hour: number;
  minute: number;
  topic: string;
  ampm: string;
}
