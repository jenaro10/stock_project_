import { Auditory } from '../models/auditory';
export interface AuditoryResponse {
    success: boolean;
    message: string;
    auditory: Auditory[];
  }
  