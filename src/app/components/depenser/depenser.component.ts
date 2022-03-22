import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../services/user.service';
import { CaisseService } from './../../services/caisse.service';
import { DepenseService } from 'src/app/services/depense.service';
import { NewDepenseComponent } from 'src/app/dialog-box/new-depense/new-depense.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DepenseItem } from 'src/app/class/depense';

const DEPENSE_TYPE: any[] = [
  'alimentaire',
  'provision',
  'culte',
  'action',
  'consultation',
  'déplacement',
  'extrat',
];

@Component({
  selector: 'app-depenser',
  templateUrl: './depenser.component.html',
  styleUrls: ['./depenser.component.scss'],
})
export class DepenserComponent implements OnInit {
  depenses: DepenseItem[] = [];
  types = DEPENSE_TYPE;

  constructor(
    private dialog: MatDialog,
    private depenseService: DepenseService,
    private caisseService: CaisseService,
    private userService: UserService,
    private toast: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.depenses = this.depenseService.newDepenses;
  }

  onNewDepense(
    type:
      | 'alimentaire'
      | 'provision'
      | 'culte'
      | 'action'
      | 'consultation'
      | 'déplacement'
      | 'extrat'
  ) {
    this.depenseService.newDepense = new DepenseItem('', type, '', 0);

    this.dialog.open(NewDepenseComponent, {
      width: '350px',
      panelClass: 'dialog-box',
    });

    this.dialog.afterAllClosed.subscribe(() => {
      const _depense = this.depenseService.newDepense;

      if (_depense && _depense.montant && _depense.motif.length > 0) {
        this.depenses.push(_depense);
      }
      this.depenseService.dropNewDepense();
    });
    this.depenseService.newDepenses = this.depenses;
  }

  onDropDepense(index: number) {
    this.depenses.splice(index, 1);
  }

  onConfirm() {
    const valid = this.caisseService.newDepense(
      this.userService.currentUser.type,
      this.depenses
    );

    if (valid) {
      this.depenseService.confirmDepense(this.depenses);
      this.depenses = [];
      this.depenseService.newDepenses = this.depenses;
    } else {
      this.toast.open('Vous dépensez trop !', 'ok', {
        duration: 5000,
        panelClass: 'toast-warn',
      });
    }
  }
}
