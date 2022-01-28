import { Component, OnDestroy, OnInit } from '@angular/core';
import { TitledComponent } from './titled-component';
import { Title } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';
import { LayoutHelperService } from '@purplecipher/layout-helpers';

@Component({
  template: ''
})
export abstract class BaseLayoutComponent implements OnInit, OnDestroy, TitledComponent {
  abstract titleService: Title;
  abstract title: string;
  abstract setTitle(title: string): void;

  destroy = new Subject();

  showNav: Observable<boolean> = this.layoutHelper.showNav$;

  protected constructor(
    private layoutHelper: LayoutHelperService
  ) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }



}
