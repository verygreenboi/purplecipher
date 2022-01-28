import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { NavConfig } from '@purplecipher/layout/navbar';

@Component({
  selector: 'purplecipher-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  @Input() config: NavConfig = {
    title: 'Acrifa',
    menu: [],
    hasSecondary: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
