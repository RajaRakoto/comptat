import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';
import { AnalyseComponent } from './components/analyse/analyse.component';
import { DepenseMensuelleComponent } from './components/depense-mensuelle/depense-mensuelle.component';
import { DepenseArchiveComponent } from './components/depense-archive/depense-archive.component';
import { RevenuArchiveComponent } from './components/revenu-archive/revenu-archive.component';
import { DepenserComponent } from './components/depenser/depenser.component';
import { CreditComponent } from './components/credit/credit.component';
import { DepenseComponent } from './components/depense/depense.component';
import { RevenuComponent } from './components/revenu/revenu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'revenu',
        pathMatch: 'full',
      },
      {
        path: 'revenu',
        component: RevenuComponent,
      },
      {
        path: 'depense',
        component: DepenseComponent,
      },
      {
        path: 'credit',
        component: CreditComponent,
      },
      {
        path: 'depenser',
        component: DepenserComponent,
      },
      {
        path: 'revenu-archive',
        component: RevenuArchiveComponent,
      },
      {
        path: 'depense-archive',
        component: DepenseArchiveComponent,
      },
      {
        path: 'depense-mensuelle',
        component: DepenseMensuelleComponent,
      },
      {
        path: 'analyse',
        component: AnalyseComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
