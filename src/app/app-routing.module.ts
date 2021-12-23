import { ProfilesComponent } from './profiles/profiles.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home' ,component: HomeComponent},
  { path: 'users',component: UsersComponent},
  { path: 'users/profile' , component: ProfilesComponent},
  { path: '', redirectTo: '/home' , pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
