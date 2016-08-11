import { Component } from '@angular/core';

import { ROUTER_PRECOMPILE } from './routes';
import { ShnavComponent } from './components';
import { SubjectService } from './services';

// Application wide styling
import './style/app.scss';

import './rxjs-operators';

@Component({
    selector: 'app',
    directives: [ShnavComponent],
    providers: [SubjectService],
    precompile: [ROUTER_PRECOMPILE],
    template: `
    <shnav></shnav>
    <section>
        <router-outlet></router-outlet>
    </section>
    <footer></footer>
`
})

export class AppComponent {

  constructor() {}
}