import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent }         from './app/app';

if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent);