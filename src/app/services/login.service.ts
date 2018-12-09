
export class LoginService {
  CURRENT_USER_KEY = 'currentUser';
  login(username: string, password: string): boolean {
    if (username == 'admin' && password == 'admin') {
      localStorage.setItem(this.CURRENT_USER_KEY, username);
      return true;
    }
    return false;
  }

  isLogged(): boolean {
    return localStorage.getItem(this.CURRENT_USER_KEY) !== null;
  }

  logout(): void {
    localStorage.removeItem(this.CURRENT_USER_KEY);
  }
}
