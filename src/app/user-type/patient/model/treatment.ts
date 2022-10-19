export interface Treatment {
  id:number;
  title: string;
  description: string;
  sessionsQuantity: number;
  physiotherapist_id: number;
  photo: string;
  videoSessions: string[]
}
