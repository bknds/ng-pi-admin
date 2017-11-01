import { Injectable } from '@angular/core';

@Injectable()
export class TablesService {

    DEFAULT_DATA = [
        { checked: false, first_name: 'Larry', last_name: 'Thornton', user_name: '@fat', email: 'fat@yandex.ru' },
        { checked: false, first_name: 'Larry', last_name: 'Thornton', user_name: '@fat', email: 'fat@yandex.ru' },
        { checked: false, first_name: 'Larry', last_name: 'Thornton', user_name: '@fat', email: 'fat@yandex.ru' },
        { checked: false, first_name: 'Larry', last_name: 'Thornton', user_name: '@fat', email: 'fat@yandex.ru' },
        { checked: false, first_name: 'Larry', last_name: 'Thornton', user_name: '@fat', email: 'fat@yandex.ru' },
        { checked: false, first_name: 'Larry', last_name: 'Thornton', user_name: '@fat', email: 'fat@yandex.ru' },
        { checked: false, first_name: 'Larry', last_name: 'Thornton', user_name: '@fat', email: 'fat@yandex.ru' }
    ];

    constructor() {
    }
}
