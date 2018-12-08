import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DragonsComponent } from './dragons/dragons.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: DragonsComponent },
  { path: 'dragons', component: DragonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
