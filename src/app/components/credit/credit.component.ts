import { UserService } from './../../services/user.service';
import { CaisseService } from './../../services/caisse.service';
import { NewCreditComponent } from '../../dialog-box/new-credit/new-credit.component';
import { MatDialog } from '@angular/material/dialog';
import { RevenuService } from '../../services/revenu.service';
import { Component, OnInit } from '@angular/core';
import { RevenuItem } from 'src/app/class/revenu';

const REVENU_TYPE: any[] = [
  'pension',
  'aide à domicile',
  'formation',
  'droit de stage',
  'massage',
  'garde malade',
  'opération',
  'consultation',
  'extrat',
];

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss'],
})
export class CreditComponent implements OnInit {
  revenus: RevenuItem[] = [];
  types = REVENU_TYPE;

  constructor(
    private dialog: MatDialog,
    private revenuService: RevenuService,
    private caisseService: CaisseService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.revenus = this.revenuService.newCredits;
  }

  onNewRevenu(
    type:
      | 'pension'
      | 'aide à domicile'
      | 'formation'
      | 'droit de stage'
      | 'massage'
      | 'garde malade'
      | 'opération'
      | 'consultation'
      | 'extrat'
  ) {
    this.revenuService.newRevenu = new RevenuItem('', type, '', 0);

    this.dialog.open(NewCreditComponent, {
      width: '350px',
      panelClass: 'dialog-box',
    });

    this.dialog.afterAllClosed.subscribe(() => {
      const _revenu = this.revenuService.newRevenu;

      if (_revenu && _revenu.montant && _revenu.source.length > 0) {
        this.revenus.push(_revenu);
      }
      this.revenuService.dropNewRevenu();
    });
    this.revenuService.newCredits = this.revenus;
  }

  onDropRevenu(index: number) {
    this.revenus.splice(index, 1);
    this.revenuService.newCredits = this.revenus;
  }

  onConfirm() {
    this.caisseService.newCredit(
      this.userService.currentUser.type,
      this.revenus
    );
    this.revenuService.confirmRevenu(this.revenus);
    this.revenus = [];
    this.revenuService.newCredits = this.revenus;
  }
}
