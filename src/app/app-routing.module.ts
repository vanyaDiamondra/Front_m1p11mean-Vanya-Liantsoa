import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { RdvComponent } from './components/rdv/rdv.component';
import { ServicesalonComponent } from './components/servicesalon/servicesalon.component';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'accueil', component: ServicesalonComponent},
  {path: 'rdv/:id', component: RdvComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
