import { Component, OnInit } from '@angular/core';
import { LayoutConfig, LayoutHelperService } from '@purplecipher/layout-helpers';
import { TitledComponent } from '@purplecipher/shared/base-class';
import { Title } from '@angular/platform-browser';

@Component({
  template: ''
})
export abstract class BaseAuthComponent implements OnInit, LayoutConfig, TitledComponent {
  abstract title: string;
  layoutHelperService: LayoutHelperService;
  titleService: Title;

  protected constructor(layoutHelperService: LayoutHelperService, title: Title) {
    this.layoutHelperService = layoutHelperService;
    this.titleService = title;
  }

  toggleFooter(show: boolean): void {
  }

  toggleNav(show: boolean): void {
    this.layoutHelperService.toggleNav(show);
  }

  ngOnInit(): void {
    this.setTitle(this.title);
    this.toggleNav(false);
  }

  setTitle(title: string): void {
    this.titleService.setTitle(title);
  }


}
