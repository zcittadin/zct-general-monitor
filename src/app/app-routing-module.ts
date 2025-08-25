import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Garden } from './components/garden/garden';
import { Home } from './components/home/home';
import { Pool } from './components/pool/pool';

const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'garden', component: Garden },
  { path: 'pool', component: Pool },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
