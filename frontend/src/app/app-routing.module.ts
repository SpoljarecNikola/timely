import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionListComponent } from './session-list/session-list.component';
import { StartedSessionComponent } from './started-session/started-session.component';

const routes: Routes = [
  { path: 'sessions', component: SessionListComponent },
  { path: 'newSession', component: StartedSessionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SessionListComponent, StartedSessionComponent]
