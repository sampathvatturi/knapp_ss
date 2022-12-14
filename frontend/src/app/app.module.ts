import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { LayoutAppComponent } from './layouts/layout-app/layout-app.component';
import { SharedModule } from './shared/shared.module';
import { TemplateModule } from './shared/template/template.module';
import { AppsService } from './shared/services/apps.service';
import { KeyboardShortcutsModule } from "ng-keyboard-shortcuts";


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CommonLayoutComponent,
    FullLayoutComponent,
    LayoutAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    TemplateModule,
    KeyboardShortcutsModule.forRoot(),

  ],
  providers: [
    AppsService,
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
