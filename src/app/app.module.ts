import { MaterialModule } from './modules/material/material.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RevenuComponent } from './components/revenu/revenu.component';
import { DepenseComponent } from './components/depense/depense.component';
import { CreditComponent } from './components/credit/credit.component';
import { DepenserComponent } from './components/depenser/depenser.component';
import { RevenuArchiveComponent } from './components/revenu-archive/revenu-archive.component';
import { DepenseArchiveComponent } from './components/depense-archive/depense-archive.component';
import { DepenseMensuelleComponent } from './components/depense-mensuelle/depense-mensuelle.component';
import { AnalyseComponent } from './components/analyse/analyse.component';
import { NewDepenseComponent } from './dialog-box/new-depense/new-depense.component';
import { NewCreditComponent } from './dialog-box/new-credit/new-credit.component';
import { CaisseComponent } from './dialog-box/caisse/caisse.component';
import { LoginComponent } from './components/login/login.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { RevenuMensuelComponent } from './components/revenu-mensuel/revenu-mensuel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RevenuComponent,
    DepenseComponent,
    CreditComponent,
    DepenserComponent,
    RevenuArchiveComponent,
    DepenseArchiveComponent,
    DepenseMensuelleComponent,
    AnalyseComponent,
    NewDepenseComponent,
    NewCreditComponent,
    CaisseComponent,
    LoginComponent,
    RevenuMensuelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
