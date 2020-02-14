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
import { HumainComponent } from './univers/races/humain/humain.component';
import { ElfeComponent } from './univers/races/elfe/elfe.component';
import { NainComponent } from './univers/races/nain/nain.component';
import { TaidoComponent } from './univers/races/taido/taido.component';
import { HaganosComponent } from './univers/races/haganos/haganos.component';
import { GnomeComponent } from './univers/races/gnome/gnome.component';
import { OrcComponent } from './univers/races/orc/orc.component';
import { LycanComponent } from './univers/races/lycan/lycan.component';
import { FulvaComponent } from './univers/races/fulva/fulva.component';
import { ReptilienComponent } from './univers/races/reptilien/reptilien.component';
import { SogornComponent } from './univers/races/sogorn/sogorn.component';
import { ZinngoComponent } from './univers/races/zinngo/zinngo.component';
import { SangMeleComponent } from './univers/races/sang-mele/sang-mele.component';

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
    HumainComponent,
    ElfeComponent,
    NainComponent,
    TaidoComponent,
    HaganosComponent,
    GnomeComponent,
    OrcComponent,
    LycanComponent,
    FulvaComponent,
    ReptilienComponent,
    SogornComponent,
    ZinngoComponent,
    SangMeleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
