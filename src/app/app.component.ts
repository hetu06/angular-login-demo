import { Component } from '@angular/core';
import { User } from './model/user';
import { AccountService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-login-app';
  user: User;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x =>  this.user = x );
  }

  logout() {
    this.accountService.logout();
  }
}
