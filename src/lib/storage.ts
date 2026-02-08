export const secureStorage = {
  setToken(token: string) {
    localStorage.setItem('auth_token', token);
  },
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  },
  setRefreshToken(token: string) {
    localStorage.setItem('refresh_token', token);
  },
  getRefreshToken(): string | null {
    return localStorage.getItem('refresh_token');
  },
  setUserData(data: unknown) {
    localStorage.setItem('user_data', JSON.stringify(data));
  },
  getUserData<T>(): T | null {
    const data = localStorage.getItem('user_data');
    return data ? JSON.parse(data) : null;
  },
  clear() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_data');
  },
};
