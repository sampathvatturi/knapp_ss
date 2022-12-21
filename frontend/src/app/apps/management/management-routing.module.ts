import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalsComponent } from './approvals/approvals.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpenditureComponent } from './expenditure/expenditure.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { WorksComponent } from './masters/works/works.component';
import { SurveyReportComponent } from './survey-report/survey-report.component';
import { UserAccountsComponent } from './user-accounts/user-accounts.component';
import { VendorsComponent } from './vendors/vendors.component';

const routes: Routes = [
  {path:'tender', loadChildren:()=> import('./tender/tender.module').then(m => m.TenderModule)},
  {path:'masters', loadChildren:()=> import('./masters/masters.module').then(m => m.MastersModule)},
  {path:'accounting', loadChildren:()=> import('./accounting/accounting.module').then(m => m.AccountingModule)},
  {path:'dashboard', component:DashboardComponent},
  {path:'survey-report', component:SurveyReportComponent},
  {path:'work-orders', component:WorksComponent},
  {path:'expenditure', component:ExpenditureComponent},
  {path:'invoices', component:InvoicesComponent},
  {path:'vendors', component:VendorsComponent},
  {path:'user-accounts', component:UserAccountsComponent},
  {path:'approvals', component:ApprovalsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
