import * as CryptoJS from 'crypto-js';

export class LoginService {
  passphrase: string
  encryptAES

  constructor() {
    this.passphrase = "Secret Passphrase";
    localStorage.setItem('users', 'U2FsdGVkX186NaDVuiR0DtUEnPFzopM/2Xp3BALpXI10h7G+G1j2xvUoJm1KhjfQ');
   }

  login(username: string, password: string): {
    error: string,
    user
  } {
    let users = this.getUsers();
    let user = users.find(u => this.matchUser(u, username));
    if (user) {
      if (this.getPassword(user) == password) {
        return {
          user: username,
          error: undefined
        }
      }
      return {
        error: 'Wrong password',
        user: username
      }
    }
    return {
      error: 'User not found',
      user: undefined
    };
  }

  private matchUser(userCriteria: string, username: string): boolean {
    let user = userCriteria.split('|')[0];
    return user == username;
  }

  private getPassword(user: string) {
    return user.split('|')[1];
  }

  createNewUser(username: string, password: string) {

  }

  private getUsers(): string[] {
    var storageItem = localStorage.getItem('users');
    if (storageItem == null) {
      return [];
    }
    try {
      var encodedUsers = CryptoJS.AES.decrypt(storageItem, this.passphrase);
      var users = encodedUsers.toString(CryptoJS.enc.Utf8);
      if (users.trim() == '') {
        return [];
      } else {
        return users.split('#');
      }
    } catch (e) {
      return [];
    }
  }
}
