import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHelperService } from './layout-helper.service';

@NgModule({
  imports: [CommonModule],
  providers: [LayoutHelperService]
})
export class LayoutHelpersModule {}
