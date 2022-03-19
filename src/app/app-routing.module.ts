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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

/* 
    <h3 class="menu-item">Dépense</h3>
    <h3 class="menu-item">Crédit</h3>
    <h3 class="menu-item">Dépenser</h3>
    <h3 class="menu-item">Revenu archivé</h3>
    <h3 class="menu-item">Dépense archivé</h3>
    <h3 class="menu-item">Dépense mensuelle</h3>
    <h3 class="menu-item">Analyse</h3>
 */
