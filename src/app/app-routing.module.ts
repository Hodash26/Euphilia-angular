import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
