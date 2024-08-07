import axios from 'axios';
import api from './axios';
import { log } from '../utils/log';



export const joinGameZodiac = async (): Promise<JoinGameResponse> => {
  let joinGameResponse: JoinGameResponse = {
    status : "FAILED",
    message : "Error No Token", 
  } 

  try {
    const token = window.sessionStorage.getItem('token');
    if (!token) {
      return joinGameResponse;
    } 

    const response = await api.post<JoinGameResponse>('/rest/zodiac-game/join-game', {}, {
      headers: { 'Authorization': `Bearer ${token}` },
    });

    const { status, data, message } = response.data;

    log(`User from join game: ${data?.user?.facebookUserId}`);

    if (status === "OK" && data && data.user && data.user.facebookUserId) {
      joinGameResponse = {
        message : message ?? "",
        status : status ?? "",
        data: { user: {...data.user} },
      }
      return joinGameResponse;
    } else {
      console.error('Unexpected response structure:', response.data);
      return joinGameResponse;
    }
  } catch (error) {
    handleAxiosError(error);
    return joinGameResponse;
  }
};

const handleAxiosError = (error: any) => {
  if (axios.isAxiosError(error)) {
    console.error('Axios error joining game:', error.response?.data || error.message);
  } else {
    console.error('Unexpected error joining game:', error);
  }
};
