import { Component } from '@angular/core';
import { AngularFire, FirebaseAuth, FirebaseListObservable } from 'angularfire2';

// Application wide styling
import './style/app.scss';

import './rxjs-operators';

@Component({
    selector: 'app',
    template: `
    <h1>App</h1>
    <div *ngIf="auth | async">You are logged in</div>
    <div *ngIf="!(auth | async)">Please log in</div>
    <button (click)="login()">Login</button>
    <button (click)="logout()">Logout</button>
    <ul>
        <li class="text" *ngFor="let item of items | async">
            {{item.$value}}
        </li>
    </ul>
`
})

export class AppComponent {
  items: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire, public auth: FirebaseAuth) {
      this.items = af.database.list('/items');
  }

  login() {
      this.auth.login();
  }

  logout() {
      this.auth.logout();
  }
}