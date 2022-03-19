import { MaterialModule } from './modules/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RevenuComponent } from './revenu/revenu.component';
import { DepenseComponent } from './depense/depense.component';
import { CreditComponent } from './credit/credit.component';
import { DepenserComponent } from './depenser/depenser.component';
import { RevenuArchiveComponent } from './revenu-archive/revenu-archive.component';
import { DepenseArchiveComponent } from './depense-archive/depense-archive.component';
import { DepenseMensuelleComponent } from './depense-mensuelle/depense-mensuelle.component';
import { AnalyseComponent } from './analyse/analyse.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, RevenuComponent, DepenseComponent, CreditComponent, DepenserComponent, RevenuArchiveComponent, DepenseArchiveComponent, DepenseMensuelleComponent, AnalyseComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
