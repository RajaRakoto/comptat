import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { DepenseMensuelleComponent } from './depense-mensuelle/depense-mensuelle.component';
import { DepenseArchiveComponent } from './depense-archive/depense-archive.component';
import { RevenuArchiveComponent } from './revenu-archive/revenu-archive.component';
import { DepenserComponent } from './depenser/depenser.component';
import { CreditComponent } from './credit/credit.component';
import { DepenseComponent } from './depense/depense.component';
import { RevenuComponent } from './revenu/revenu.component';
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
