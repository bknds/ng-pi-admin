import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class TreesService {
    constructor() {
    }
    treesData = [
        {
            name: 'A1',
            children: [
                {
                    name: 'B1',
                },
                {
                    name: 'B2',
                    children: [
                        {
                            name: 'C1',
                            children: [
                                {
                                    name: 'D1',
                                },
                                {
                                    name: 'D2',
                                },
                                {
                                    name: 'D3',
                                },
                                {
                                    name: 'D2',
                                },
                                {
                                    name: 'D3',
                                },
                                {
                                    name: 'D2',
                                },
                                {
                                    name: 'D3',
                                }
                            ]
                        },
                        {
                            name: 'C2',
                            children: [
                                {
                                    name: 'D1',
                                },
                                {
                                    name: 'D2',
                                },
                                {
                                    name: 'D3',
                                }
                            ]
                        },
                        {
                            name: 'C3',
                            children: [
                                {
                                    name: 'D1',
                                },
                                {
                                    name: 'D2',
                                },
                                {
                                    name: 'D3',
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'B3',
                }
            ]
        }
    ];
}
