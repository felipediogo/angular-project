// import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import {MaterialModule} from '../material.module';
// import { DragonsListComponent } from './dragons.list.component';
// import { HttpClientModule } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import {DragonService} from '../services/dragon.service';

// describe('DragonsListComponent', () => {
//   let component: DragonsListComponent;
//   let fixture: ComponentFixture<DragonsListComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       schemas: [ CUSTOM_ELEMENTS_SCHEMA ],      
//       declarations: [ DragonsListComponent ],
//       imports: [FormsModule, MaterialModule, HttpClientModule]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(DragonsListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it(`should create`, async(inject([HttpTestingController, DragonService],
//     (httpClient: HttpTestingController, apiService: DragonService) => {
//       expect(apiService).toBeTruthy();
//   })));
// });
