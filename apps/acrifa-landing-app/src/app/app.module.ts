import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LayoutNavbarModule } from '@purplecipher/layout/navbar';
import { LayoutHelpersModule } from '@purplecipher/layout-helpers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('@purplecipher/acrifa-landing').then(m => m.AcrifaLandingModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('@purplecipher/acrifa-auth').then(m => m.AcrifaAuthModule)
      }
    ], { initialNavigation: 'enabledBlocking' }),
    LayoutNavbarModule,
    LayoutHelpersModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
