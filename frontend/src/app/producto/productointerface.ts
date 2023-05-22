import { Producto } from '../models/producto';
export interface ProductoResponse {
    success: boolean;
    message: string;
    properties: Producto[];
  }
  