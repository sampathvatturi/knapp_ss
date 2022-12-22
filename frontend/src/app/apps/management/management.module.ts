import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SurveyReportComponent } from './survey-report/survey-report.component';
import { WorkOrdersComponent } from './work-orders/work-orders.component';
import { ExpenditureComponent } from './expenditure/expenditure.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { VendorsComponent } from './vendors/vendors.component';
import { UserAccountsComponent } from './user-accounts/user-accounts.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { TenderModule } from './tender/tender.module';
import { AccountingModule } from './accounting/accounting.module';
import { MastersModule } from './masters/masters.module';
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    DashboardComponent,
    SurveyReportComponent,
    WorkOrdersComponent,
    ExpenditureComponent,
    InvoicesComponent,
    VendorsComponent,
    UserAccountsComponent,
    ApprovalsComponent,
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    TenderModule,
    AccountingModule,
    MastersModule,
    DxDataGridModule,
    DxButtonModule
  ]
})
export class ManagementModule { }
