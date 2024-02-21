import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
import { EmployerdvComponent } from './components/employerdv/employerdv.component';
import { EmployesidebarComponent } from './components/employesidebar/employesidebar.component';
import { EmployetachesComponent } from './components/employetaches/employetaches.component';

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
    EmployerdvComponent,
    EmployesidebarComponent,
    EmployetachesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
