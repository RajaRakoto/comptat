import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import {} from '@angular/material';
import {} from '@angular/material';
import {} from '@angular/material';
import {} from '@angular/material';
import {} from '@angular/material';
import {} from '@angular/material';
import {} from '@angular/material';
import {} from '@angular/material';

let materials = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatTableModule,
];

@NgModule({
  imports: [materials],
  exports: [materials],
})
export class MaterialModule {}
