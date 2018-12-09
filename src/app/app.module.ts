import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { DragonsListComponent } from './dragons/dragons.list.component';
import {DragonsFormComponent} from './dragons/dragons.form.component';
import {DeleteConfirmationModalComponent} from './dragons/components/delete.confirmation.modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DragonsListComponent,
    DragonsFormComponent,
    DeleteConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  entryComponents: [DeleteConfirmationModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
