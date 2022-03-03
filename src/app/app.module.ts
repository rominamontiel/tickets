import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SumaSimpleComponent } from './components/suma-simple/suma-simple.component';
import { SumaTicketComponent } from './components/suma-ticket/suma-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    SumaSimpleComponent,
    SumaTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
