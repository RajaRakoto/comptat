import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {} from '@angular/material';
import {} from '@angular/material';
import {} from '@angular/material';
import {} from '@angular/material';
import {} from '@angular/material';
import {} from '@angular/material';

let materials = [
  MatButtonModule,
  MatToolbarModule,
  MatTableModule,
  MatDialogModule,
  MatIconModule,
];

@NgModule({
  imports: [materials],
  exports: [materials],
})
export class MaterialModule {}
