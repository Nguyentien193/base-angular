import { TOKEN_KEY } from '../shared/constants/common';
import { getCookie, delCookie, saveCookie } from './helpers';

export const getAccessToken = () => {
  return getCookie(TOKEN_KEY) || null;
};

export const saveToken = (accessToken: string, exdays = 1) => {
  saveCookie({ name: TOKEN_KEY , value: accessToken, exdays });
};
export const destroyLogged = () => {
  TOKEN_KEY && delCookie(TOKEN_KEY);
  localStorage.clear();
};
