import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Menu - sous_menu
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

// sous_menu - races

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

const routes: Routes = [
  // Menu - sous_menu
  { path: '', component: HomePageComponent},
  { path: 'company', component: CompanyComponent},
  { path: 'discord', component: DiscordComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'vestiges-euphilia', component: VestigesEuphiliaComponent},
  { path: 'history', component: HistoireComponent},
  { path: 'races', component: RacesComponent},
  { path: 'world', component: MondeComponent},
  { path: 'events', component: EvenementsComponent},
  { path: 'characters', component: PersonnagesComponent},
  // sous_menu - races
  { path: 'humain', component: HumainComponent},
  { path: 'elfe', component: ElfeComponent},
  { path: 'nain', component: NainComponent},
  { path: 'taido', component: TaidoComponent},
  { path: 'haganos', component: HaganosComponent},
  { path: 'gnome', component: GnomeComponent},
  { path: 'orc', component: OrcComponent},
  { path: 'lycan', component: LycanComponent},
  { path: 'fulva', component: FulvaComponent},
  { path: 'reptilien', component: ReptilienComponent},
  { path: 'sogorn', component: SogornComponent},
  { path: 'zinngo', component: ZinngoComponent},
  { path: 'sang-mele', component: SangMeleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
