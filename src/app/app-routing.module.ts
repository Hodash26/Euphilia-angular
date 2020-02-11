import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CompanyComponent } from './presentation/company/company.component';
import { FaqComponent } from './presentation/faq/faq.component';
import { VestigesEuphiliaComponent } from './presentation/vestiges-euphilia/vestiges-euphilia.component';
import { DiscordComponent } from './presentation/discord/discord.component';



const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'company', component: CompanyComponent},
  { path: 'discord', component: DiscordComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'vestiges-euphilia', component: VestigesEuphiliaComponent},
  { path: 'company', component: CompanyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
