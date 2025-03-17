export interface Client {
    id?: number;
    name: string;
    cpf: string;
    email: string;
    favoriteColor: string;
    observations?: string;
  }
  
  export interface ApiResponse {
    success: boolean;
    message: string;
    client?: Client;
    errors?: Record<string, string>;
  }
  
  export interface ColorResponse {
    colors: string[];
  }