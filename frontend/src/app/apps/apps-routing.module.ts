import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ChatComponent } from './chat/chat.component';
// import { FileManagerComponent } from './file-manager/file-manager.component';
// import { MailComponent } from './mail/mail.component';

// import { OrdersListComponent } from './e-commerce/orders-list/orders-list.component';
// import { ProductsListComponent } from './e-commerce/products-list/products-list.component';
// import { ProductComponent } from './e-commerce/product/product.component';

import { LayoutAppComponent } from '../layouts/layout-app/layout-app.component';

// import { AuthGuardService } from '../apps/auth/auth-guard.service';

const routes: Routes = [
    {path:'management', loadChildren:()=> import('../apps/management/management.module').then(m => m.ManagementModule)}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppsRoutingModule { }
