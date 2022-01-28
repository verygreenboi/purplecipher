import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { UniversalModule } from '@ng-web-apis/universal';
import { ANIMATION_FRAME } from '@ng-web-apis/common';
import { EMPTY } from 'rxjs';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    UniversalModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: ANIMATION_FRAME,
      useValue: EMPTY
    }
  ]
})
export class AppServerModule {}
