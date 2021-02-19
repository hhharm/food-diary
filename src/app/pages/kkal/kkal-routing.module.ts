import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KkalComponent } from './kkal.component';

const routes: Routes = [{ path: '', component: KkalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KkalRoutingModule { }
