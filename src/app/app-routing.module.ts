import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DragonsListComponent } from './dragons/dragons.list.component';
import { DragonsFormComponent } from './dragons/dragons.form.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: DragonsListComponent },
  { path: 'dragons', component: DragonsFormComponent },
  { path: 'dragons/:id', component: DragonsFormComponent }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
