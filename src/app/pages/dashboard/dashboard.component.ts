import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { BalanceData, balanceStartValue } from 'src/app/data/balanse.data';
import { CalculationsService } from 'src/app/services/calculations.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
