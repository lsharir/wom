import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent }         from './app/app';
import { ROUTER_PROVIDERS } from './app/routes';
import { AUTH_PROVIDERS } from './app/auth';
import { FIREBASEAPP_PROVIDERS } from './app/firebase';

if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    AUTH_PROVIDERS,
    FIREBASEAPP_PROVIDERS,
    ROUTER_PROVIDERS
]);