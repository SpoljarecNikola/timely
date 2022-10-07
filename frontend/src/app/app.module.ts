import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionService } from './session.service';
import { FormsModule } from '@angular/forms';
import { StartedSessionComponent } from './started-session/started-session.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
