import { NotfoundComponent } from './notfound/notfound.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '' ,component: HomeComponent},
  { path: 'users',component: UsersComponent},
  { path: 'users/:id' , component: ProfilesComponent},
  { path: '**', component: NotfoundComponent},
  { path: 'users/**', redirectTo: '/NotfoundComponent'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
