import { AuthGuard } from './auth.guard';
import { UnauthGuard } from './unauth.guard';
import { AuthService } from './auth.service';


export { AuthGuard };
export { UnauthGuard };
export { AuthService };


export const AUTH_PROVIDERS: any[] = [
  AuthGuard,
  AuthService,
  UnauthGuard
];