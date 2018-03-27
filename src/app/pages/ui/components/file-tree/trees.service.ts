import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TreesService {
    constructor() {
    }
    FILE_DATA = [
        {
            name: 'Folder1',
            isSelect: true,
            children: [
                {
                    name: 'Item1',
                    isSelect: true,
                    children: [
                        {
                            name: 'Child1',
                        },
                        {
                            name: 'Child2',
                        }
                    ]
                },
                {
                    name: 'Item2',
                }
            ]
        }, {
            name: 'Folder2',
            isSelect: true,
            children: [
                {
                    name: 'Item1',
                },
                {
                    name: 'Item2',
                }
            ]
        }, {
            name: 'Folder3',
            children: [
                {
                    name: 'Item1',
                },
                {
                    name: 'Item2',
                }
            ]
        }, {
            name: 'Folder4',
            children: [
                {
                    name: 'Item1',
                },
                {
                    name: 'Item2',
                }
            ]
        }, {
            name: 'Folder5',
            children: [
                {
                    name: 'Item1',
                },
                {
                    name: 'Item2',
                }
            ]
        }, {
            name: 'Folder6',
        }
    ];
}
