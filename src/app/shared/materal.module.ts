import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
  ],
})
export class MateralModule {}
