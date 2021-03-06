import { PLATFORM_DIRECTIVES } from '@angular/core';
import { provideRouter, ROUTER_DIRECTIVES, RouterConfig }  from '@angular/router';

import { AuthGuard, UnauthGuard } from '../auth';

import { LoginPage } from './login';
import { SubjectsPage } from './topics';


const routes: RouterConfig = [
  {path: '', component: LoginPage, canActivate: [UnauthGuard]},
  {path: 'topics', component: SubjectsPage, canActivate: [AuthGuard]}
];

export const ROUTER_PRECOMPILE = [
  LoginPage,
  SubjectsPage
];

export const ROUTER_PROVIDERS = [
  provideRouter(routes),
  {provide: PLATFORM_DIRECTIVES, useValue: ROUTER_DIRECTIVES, multi: true}
];