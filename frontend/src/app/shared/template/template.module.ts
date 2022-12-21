import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from '../shared.module';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { FooterComponent } from "./footer/footer.component";

// import { SideNavDirective } from "../directives/side-nav.directive";
import { ThemeConstantService } from '../services/theme-constant.service';


import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const antdModule = [
    NzAvatarModule,
    NzBadgeModule,
    NzRadioModule,
    NzDropDownModule,
    NzListModule,
    NzDrawerModule,
    NzDividerModule,
    NzSwitchModule,
    NzInputModule,
    NzButtonModule,
    NzNotificationModule
]

@NgModule({
    exports: [
        CommonModule,
        // SideNavDirective,
        FooterComponent,
        HeaderComponent,
        SidenavComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        SharedModule,
        NzSkeletonModule,
        NzSpaceModule,
        ...antdModule
    ],
    declarations: [

        FooterComponent,
          HeaderComponent,
          SidenavComponent
    ],
    providers: [ 
        ThemeConstantService
    ]
})

export class TemplateModule { }
