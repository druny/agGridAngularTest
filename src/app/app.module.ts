import 'ag-grid-enterprise';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LinkComponent } from './link/link.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderCheckboxComponent } from './header-checkbox/header-checkbox.component';
import { MyGridApplicationComponent } from './my-grid-application/my-grid-application.component';

@NgModule({
  declarations: [AppComponent, MyGridApplicationComponent, LinkComponent, HeaderCheckboxComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([LinkComponent, HeaderCheckboxComponent]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
