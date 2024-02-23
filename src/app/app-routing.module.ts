import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { RdvComponent } from './components/rdv/rdv.component';
import { ServicesalonComponent } from './components/servicesalon/servicesalon.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { HistoriqueComponent } from './components/historique/historique.component';
import {EmailVerifyComponent} from './components/emailverify/emailverify.component'
import { EmployerdvComponent } from './components/employerdv/employerdv.component';
import { EmployetachesComponent } from './components/employetaches/employetaches.component';
import {NotificationListComponent} from './components/notification/notification-list.component';
import {PreferrenceComponent} from './components/preferrence/preferrence.component'

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'accueil', component: ServicesalonComponent},
  {path: 'rdv', component: HistoriqueComponent},
  {path: 'rdv/:id', component: RdvComponent},
  {path: 'paiement', component: PaiementComponent},
  {path: ':id/verify/:token', component: EmailVerifyComponent},
  {path: 'employe', component: EmployerdvComponent},
  {path: 'employe/tasks', component: EmployetachesComponent},
  {path: 'notif', component: NotificationListComponent},
  {path: 'preferrence', component: PreferrenceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
