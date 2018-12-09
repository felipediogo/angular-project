import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  const CURRENT_USER_KEY = 'currentUser';
  const ADMIN_USER = 'admin';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService]
    })
    localStorage.removeItem(CURRENT_USER_KEY);
  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));

  it('Should create the user if the user is right', inject([LoginService], (service: LoginService) => {
    service.login(ADMIN_USER, ADMIN_USER);
    const currentUser = localStorage.getItem(CURRENT_USER_KEY);
    expect(currentUser).toBeDefined();
    expect(service.isLogged()).toBeTruthy();
  }));

  it('Should not create the user', inject([LoginService], (service: LoginService) => {
    service.login('WRONG_USERNAME', 'WRONG_PASSWORD');
    const currentUser = localStorage.getItem(CURRENT_USER_KEY);
    expect(currentUser).toBeNull();
  }));

  it('Should logout the user', inject([LoginService], (service: LoginService) => {
    service.login(ADMIN_USER, ADMIN_USER);
    let currentUser = localStorage.getItem(CURRENT_USER_KEY);
    expect(currentUser).toBeDefined();
    service.logout();
    currentUser = localStorage.getItem(CURRENT_USER_KEY);
    expect(currentUser).toBeNull();
  }));

});
