export class SubjectModel {
    id: String;
    author: String;
    title: String;
    shloopers: Number;
    
    constructor (data: any) {
        this.id = data.id;
        this.author = data.author;
        this.title = data.title;
        this.shloopers = data.shloopers;
    }
}