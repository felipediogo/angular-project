import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DragonsListComponent } from './dragons/dragons.list.component';
import { DragonsFormComponent } from './dragons/dragons.form.component';
import {AuthGuard} from './authentication/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: DragonsListComponent, canActivate: [AuthGuard] },
  { path: 'dragons', component: DragonsFormComponent, canActivate: [AuthGuard] },
  { path: 'dragons/:id', component: DragonsFormComponent, canActivate: [AuthGuard] }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
