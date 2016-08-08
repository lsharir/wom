import {
    FIREBASE_PROVIDERS, 
    defaultFirebase,
    firebaseAuthConfig,
    AuthProviders,
    AuthMethods
} from 'angularfire2';
import { FIREBASEAPP_CONFIG } from './firebaseapp.config';

export const FIREBASEAPP_PROVIDERS = [
    FIREBASE_PROVIDERS,
    defaultFirebase(FIREBASEAPP_CONFIG),
    firebaseAuthConfig({
        provider: AuthProviders.Google,
        method: AuthMethods.Popup
    })
];