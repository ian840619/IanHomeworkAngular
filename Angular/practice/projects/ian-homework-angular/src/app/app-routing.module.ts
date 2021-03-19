import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DataTransferApplyFormComponent} from './data-transfer-apply-form/data-transfer-apply-form.component'

const routes: Routes = [
  { path: '', component: DataTransferApplyFormComponent},
  { path: 'DataTransferApplyForm', component: DataTransferApplyFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
