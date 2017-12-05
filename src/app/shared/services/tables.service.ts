import { Injectable } from '@angular/core';

@Injectable()
export class TablesService {

    DEFAULT_DATA = [
        { price: 5.6, checked: false, first_name: 'Larry', last_name: 'Thornton', user_name: '@fat', email: 'fat@yandex.ru' },
        { price: 5.2, checked: false, first_name: 'Larry', last_name: 'Thornton', user_name: '@fat', email: 'fat@yandex.ru' },
        { price: 51, checked: false, first_name: 'Larry', last_name: 'Thornton', user_name: '@fat', email: 'fat@yandex.ru' },
        { price: 5.56, checked: false, first_name: 'Larry', last_name: 'Thornton', user_name: '@fat', email: 'fat@yandex.ru' },
        { price: 5.1, checked: false, first_name: 'Larry', last_name: 'Thornton', user_name: '@fat', email: 'fat@yandex.ru' },
        { price: 5.5, checked: false, first_name: 'Larry', last_name: 'Thornton', user_name: '@fat', email: 'fat@yandex.ru' },
        { price: 5, checked: false, first_name: 'Larry', last_name: 'Thornton', user_name: '@fat', email: 'fat@yandex.ru' },
        { price: 1.5, checked: false, first_name: 'Larry', last_name: 'Thornton', user_name: '@fat', email: 'fat@yandex.ru' },
        { price: 1.8, checked: false, first_name: 'Larry', last_name: 'Thornton', user_name: '@fat', email: 'fat@yandex.ru' },
        { price: 9.1, checked: false, first_name: 'Larry', last_name: 'Thornton', user_name: '@fat', email: 'fat@yandex.ru' },
    ];

    constructor() {
    }
}
