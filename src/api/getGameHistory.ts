import api from './axios';
import { GameHistory } from '../model/GameHistory';

export const fetchGameHistory = async (): Promise<GameHistory[] | null> => {
  try {
    const token = window.sessionStorage.getItem('token');

    const response = await api.get(`/rest/zodiac-game/history`, {
      headers: { 'Authorization': `Bearer ${token}` },
    });

    if (response.data.status === "OK" && Array.isArray(response.data.data.zodiacGameList)) {
      return response.data.data.zodiacGameList.map((item: any) => ({
        status: item.status,
        zodiacCardId: item.zodiacCardId,
        noGame: item.noGame,
      }));
    } else {
      console.error('Unexpected response structure:', response.data);
      return null;
    }
  } catch (error) {
    console.error('Error fetching game history:', error);
    return null;
  }
};
