import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CompanyComponent } from './presentation/company/company.component';
import { FaqComponent } from './presentation/faq/faq.component';
import { VestigesEuphiliaComponent } from './presentation/vestiges-euphilia/vestiges-euphilia.component';
import { DiscordComponent } from './presentation/discord/discord.component';
import { HistoireComponent } from './univers/histoire/histoire.component';
import { RacesComponent } from './univers/races/races.component';
import { MondeComponent } from './univers/monde/monde.component';
import { EvenementsComponent } from './univers/evenements/evenements.component';
import { PersonnagesComponent } from './univers/personnages/personnages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    CompanyComponent,
    FaqComponent,
    VestigesEuphiliaComponent,
    DiscordComponent,
    HistoireComponent,
    RacesComponent,
    MondeComponent,
    EvenementsComponent,
    PersonnagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
