import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent }         from './app/app';
import { FIREBASEAPP_CONFIG } from './firebaseapp.config';
import { 
    FIREBASE_PROVIDERS, 
    defaultFirebase,
    firebaseAuthConfig,
    AuthProviders,
    AuthMethods
} from 'angularfire2';

if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    FIREBASE_PROVIDERS,
    defaultFirebase(FIREBASEAPP_CONFIG),
    firebaseAuthConfig({
        provider: AuthProviders.Google,
        method: AuthMethods.Popup
    })
]);