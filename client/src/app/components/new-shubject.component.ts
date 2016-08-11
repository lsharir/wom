import { Component, OnInit, Input } from '@angular/core';
import { SubjectService } from '../services';

@Component({
    selector: 'new-shubject',
    template: `
    <shcard>
        <shrow>
            <span class="subject-title">{{item.title}}</span>
            <shtretch></shtretch>
        </shrow>
        <shrow>
            <shtretch></shtretch>
            <button class="shbutton" (click)="createSubject()">create subject</button>
        </shrow>
    </shcard>
    `
})
export class NewShubjectComponent implements OnInit {
    @Input('item') item;

    constructor(private subjectService: SubjectService) {

    }

    ngOnInit() { }

    createSubject() {
        this.subjectService.addSubject(this.item);
    }
}