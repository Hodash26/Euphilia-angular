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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
