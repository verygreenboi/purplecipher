import { Component, OnInit } from '@angular/core';
import { LayoutConfig, LayoutHelperService } from '@purplecipher/layout-helpers';
import { TitledComponent } from '@purplecipher/shared/base-class';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'purplecipher-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, LayoutConfig, TitledComponent {

  title = 'Acrifa | Book a trip';

  constructor(public layoutHelperService: LayoutHelperService, public titleService: Title) {}

  ngOnInit(): void {
    this.toggleNav(true);
    this.setTitle(this.title);
  }

  toggleFooter(show: boolean): void {
  }

  toggleNav(show: boolean): void {
    this.layoutHelperService.toggleNav(show);
  }

  setTitle(title: string): void {
    this.titleService.setTitle(title);
  }

}
