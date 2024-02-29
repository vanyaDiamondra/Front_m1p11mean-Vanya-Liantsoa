import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import { environment } from 'src/environments/environment';
import { NgChartsModule } from 'ng2-charts'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { RdvComponent } from './components/rdv/rdv.component';
import { ServicesalonComponent } from './components/servicesalon/servicesalon.component';
import { LoaderComponent } from './components/loader/loader.component';
import { EtoilesComponent } from './components/etoiles/etoiles.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { HistoriqueComponent } from './components/historique/historique.component';
import {EmailVerifyComponent} from './components/emailverify/emailverify.component'
import { EmployerdvComponent } from './components/employerdv/employerdv.component';
import { EmployesidebarComponent } from './components/employesidebar/employesidebar.component';
import { EmployetachesComponent } from './components/employetaches/employetaches.component';
import {NotificationListComponent} from './components/notification/notification-list.component';
import {PreferrenceComponent} from './components/preferrence/preferrence.component';
import {ProfilComponent} from './components/profil/profil.component';
import {UpdateComponent} from './components/updatepic/updatepic.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ManagersidebarComponent } from './components/managersidebar/managersidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    InscriptionComponent,
    RdvComponent,
    ServicesalonComponent,
    LoaderComponent,
    EtoilesComponent,
    PaiementComponent,
    HistoriqueComponent,
    EmailVerifyComponent,
    EmployerdvComponent,
    EmployesidebarComponent,
    EmployetachesComponent,
    NotificationListComponent,
    PreferrenceComponent,
    ProfilComponent,
    UpdateComponent, 
    StatisticsComponent,
    ManagersidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
