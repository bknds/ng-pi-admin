import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {

    private _todoList = [
        { text: 'Check me out' },
        { text: 'Lorem ipsum dolor sit amet, possit denique oportere at his, etiam corpora deseruisse te pro' },
        { text: 'Ex has semper alterum, expetenda dignissim' },
        { text: 'Vim an eius ocurreret abhorreant, id nam aeque persius ornatus.' },
        { text: 'Simul erroribus ad usu' },
        { text: 'Ei cum solet appareat, ex est graeci mediocritatem' },
        { text: 'Get in touch with akveo team' },
        { text: 'Write email to business cat' },
    ];

    getTodoList() {
        return this._todoList;
    }
}
