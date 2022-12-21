import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenderRoutingModule } from './tender-routing.module';
import { TenderDetailsComponent } from './tender-details/tender-details.component';
import { AssignTenderComponent } from './assign-tender/assign-tender.component';


@NgModule({
  declarations: [
    TenderDetailsComponent,
    AssignTenderComponent
  ],
  imports: [
    CommonModule,
    TenderRoutingModule
  ]
})
export class TenderModule { }
