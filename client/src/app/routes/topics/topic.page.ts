import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { SubjectModel } from '../../models';
import { AuthService } from '../../auth';
import { ShubjectComponent, NewShubjectComponent } from '../../components';

@Component({
    selector: 'subject-page',
    directives: [ShubjectComponent, NewShubjectComponent],
    template: `
    <shcontainer>
        <shrow>
            <input type="text" 
                placeholder="Enter something"
                class="shinput"
                [ngFormControl]="query">
        </shrow>
        <new-shubject [item]="newItem" *ngIf="filteredItemsLength === 0"></new-shubject>
        <shubject [item]="item" *ngFor="let item of filteredItems"></shubject>
    </shcontainer>
    `
})
export class SubjectsPage implements OnInit {
    public items: FirebaseListObservable<any>;
    private _items: any[];
    public filteredItems: any[];
    public filteredItemsLength: number;
    public newItem: SubjectModel;
    public query = new FormControl();

    constructor(public af: AngularFire, private authService: AuthService) {
        this.items = af.database.list('/items');

        this.items.subscribe(items => {
            this._items = items;
            this.updateFilteredList(this.query.value || '');
        });

        this.query.valueChanges
            .subscribe(value => this.updateFilteredList(value));

        this.newItem = new SubjectModel({
            title: '',
            author: this.authService.id,
            shloopers: 0,
            id : shortid.generate()
        })
    }

    ngOnInit() {}

    updateFilteredList(value) {
        let keywords = value.toLowerCase().split(' ').map(keyword => new RegExp(keyword, 'ig'));
        this.newItem.title = value;
        this.filteredItems = _.filter(this._items, item => {
            let include = true;
            _.forEach(keywords, keyword => {
                include = include && (item.title.search(keyword) !== -1);
            })
            return include;
        });
        this.filteredItemsLength = this.filteredItems.length;
    }
}