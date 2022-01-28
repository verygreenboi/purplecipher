import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutHelperService } from '@purplecipher/layout-helpers';
import { BaseAuthComponent } from '../base-auth.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'purplecipher-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent extends BaseAuthComponent {

  title = 'Acrifa | Sign in';

  constructor(layoutHelperService: LayoutHelperService, title: Title) {
    super(layoutHelperService, title);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
