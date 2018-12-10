import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';

describe('AppComponent', () => {
  let fixture;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [LoginService]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-project'`, () => {
    expect(app.title).toEqual('angular-project');
  });

  it('should render three buttons', () => {
    fixture.detectChanges();
    const buttons = fixture.debugElement.queryAll(By.css("button"));

    expect(buttons.length).toBe(2);
    expect(buttons[0].nativeElement.innerText).toBe('Home');
    expect(buttons[1].nativeElement.innerText).toBe('Logout');
  });

  it('Should create the user if the user is right', () => {
    const loginService = fixture.debugElement.injector.get(LoginService);
    const spy = spyOn(loginService, 'logout');
    const buttons = fixture.debugElement.queryAll(By.css("button"));
    buttons[1].triggerEventHandler("click", null);
    expect(spy).toHaveBeenCalled();
  });
});
