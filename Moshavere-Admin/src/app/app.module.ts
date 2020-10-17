import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelModule } from './Panel/Panel.module';
import { LoginModule } from './Login/Login.module';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './routes/routes.routing';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    LoginModule,
    RouterModule.forRoot(adminRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
