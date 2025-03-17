import axios from 'axios';
import { Client, ApiResponse, ColorResponse } from '../types/client';

const API_URL = '/api/clients';

export const registerClient = async (client: Client): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>(API_URL, client);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      return error.response.data as ApiResponse;
    }
    return {
      success: false,
      message: error.message || 'Erro ao cadastrar cliente'
    };
  }
};

export const getAvailableColors = async (): Promise<string[]> => {
  try {
    const response = await axios.get<ColorResponse>(`${API_URL}/colors`);
    return response.data.colors;
  } catch (error) {
    console.error('Erro ao buscar cores:', error);
    return ['vermelho', 'laranja', 'amarelo', 'verde', 'azul', 'anil', 'violeta'];
  }
};