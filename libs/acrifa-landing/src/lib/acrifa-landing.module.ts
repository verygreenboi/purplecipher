import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', pathMatch: 'full',
        component: LandingPageComponent,
        data: {
          showNav: false
        }
      }
    ]),
  ],
  declarations: [
    LandingPageComponent
  ],
})
export class AcrifaLandingModule {}
