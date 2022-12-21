import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { DepartmentComponent } from './department/department.component';
import { WorksComponent } from './works/works.component';
import { InventoryComponent } from './inventory/inventory.component';
import { UomComponent } from './uom/uom.component';


@NgModule({
  declarations: [
    DepartmentComponent,
    WorksComponent,
    InventoryComponent,
    UomComponent
  ],
  imports: [
    CommonModule,
    MastersRoutingModule
  ]
})
export class MastersModule { }
