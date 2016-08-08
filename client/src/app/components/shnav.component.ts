import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth';

@Component({
    selector: 'shnav',
    template: `
    <nav class="shrow">
        <span class="title">shlooper</span>
        <shtretch></shtretch>
        <span class="shpadding">{{ authService.email }}</span>
        <button class="shbutton" *ngIf="!authService.authState" (click)="authService.signInWithGoogle()">Login with Google</button>
        <button class="shbutton" *ngIf="authService.authState" (click)="authService.signOut()">Logout</button>
    </nav>
    `
})
export class ShnavComponent implements OnInit {
    constructor(public authService: AuthService) { }

    ngOnInit() { }

}