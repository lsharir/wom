import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'shubject',
    template: `
    <shcard>
        <shrow>
            <span class="subject-title">{{item.title}}</span>
            <shtretch></shtretch>
        </shrow>
        <shrow>
            <shtretch></shtretch>
            <button class="shbutton">join {{item.shloopers}} shloopers</button>
        </shrow>
    </shcard>
    `
})
export class ShubjectComponent implements OnInit {
    @Input('item') item;

    constructor() { }

    ngOnInit() { }

}