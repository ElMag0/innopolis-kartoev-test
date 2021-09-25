import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionPageComponent } from './pages/description-page/description-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomePageComponent, DescriptionPageComponent],
  imports: [
    DataViewModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    DropdownModule,
    RippleModule,
    ButtonModule,
    PanelModule,
    TableModule,
    CheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
