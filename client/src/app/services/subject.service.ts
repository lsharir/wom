import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class SubjectService {
    private items: FirebaseListObservable<any>;
    private keywords: FirebaseObjectObservable<any>

    constructor(private af: AngularFire) {
        this.items = af.database.list('/items');
        this.keywords = af.database.object('/keywords');
    }

    addSubject(item) {
        let newItem = item,
            keywords = newItem.title.toLowerCase().split(' '),
            itemKey;

        itemKey = this.items.push(newItem).key;

        _.forEach(keywords, keyword => {
            this.af.database.list('/keywords/' + keyword).push(itemKey);
        });
    }
}