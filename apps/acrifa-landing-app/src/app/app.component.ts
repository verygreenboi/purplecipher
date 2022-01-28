import { Component } from '@angular/core';
import { BaseLayoutComponent } from '@purplecipher/shared/base-class';
import { Title } from '@angular/platform-browser';
import { LayoutHelperService } from '@purplecipher/layout-helpers';

@Component({
  selector: 'purplecipher-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseLayoutComponent {
  title = 'Acrifa';

  constructor(public titleService: Title, layoutService: LayoutHelperService) {
    super(layoutService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.setTitle(this.title);
  }

  setTitle(title: string): void {
    this.titleService.setTitle(title);
  }
}
