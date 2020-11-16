import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelModule } from './Panel/Panel.module';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './routes/routes.routing';
import { AuthModule } from './auth/auth.module';
import { ErrorInterceptorProvider } from './Services/error.interceptor';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import {
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION
} from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
  bgsPosition: POSITION.centerCenter,
  bgsSize: 40,
  pbColor: 'red',
  bgsType: SPINNER.fadingCircle, // background spinner type
  fgsType: SPINNER.cubeGrid, // foreground spinner type
  pbDirection: PB_DIRECTION.rightToLeft, // progress bar direction
  pbThickness: 5 // progress bar thickness
};

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    AuthModule,
    RouterModule.forRoot(adminRoutes),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'decreasing'
    }),
    HttpClientModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule,
    NgxUiLoaderRouterModule
    // NgProgressModule.withConfig({
    //   color: 'red',
    //   ease: 'ease',
    //   meteor: false,
    //   spinner: true,
    //   trickleSpeed: 200,
    //   direction: 'ltr+',
    //   min: 20
    // }),
    // NgProgressHttpModule,
    // NgProgressRouterModule
  ],
  providers: [ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
