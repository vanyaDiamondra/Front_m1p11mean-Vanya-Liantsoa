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
import {PreferrenceComponent} from './components/preferrence/preferrence.component';
import {ProfilComponent} from './components/profil/profil.component';
import {UpdateComponent} from './components/updatepic/updatepic.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { EmployelistComponent } from './components/employelist/employelist.component';
import { ProfileEditComponent } from './components/profiledit/profiledit.component';
import { EmployeEditComponent } from './components/employeedit/employeedit.component';
import { EmployeCreateComponent } from './components/employecreate/employecreate.component';
import { ServiceEditComponent } from './components/serviceedit/serviceedit.component';
import { ServiceListComponent } from './components/servicelist/servicelist.component';

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
  {path: 'preferrence', component: PreferrenceComponent},
  {path: 'profil', component: ProfilComponent},
  {path:'updatepic',component: UpdateComponent},
  {path: 'stat', component: StatisticsComponent},
  {path:'emplist',component: EmployelistComponent},
  {path:'profiledit',component: ProfileEditComponent},
  {path:'employeedit/:id',component: EmployeEditComponent},
  {path:'employecreate',component: EmployeCreateComponent},

  {path:'servicelist',component: ServiceListComponent},
  {path:'serviceedit/:id',component: ServiceEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
