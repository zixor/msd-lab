
import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {

    constructor() {

    }

    getPatients() {
        return [
            { "name": "Juan Carlos Restrepo", "age": "24", "gender": "Hombre", "id": 1, "phonenumber": "3166266373", "color": "warm-1", "lastreview": "Feb 25, 2017" },
            { "name": "Monica Lucia Gil", "age": "33", "gender": "Mujer", "id": 2, "phonenumber": "3166266373", "color": "warm-2", "lastreview": "Ago 23, 2017" },
            { "name": "David Nolberto Gonzalez", "age": "30", "gender": "Hombre", "id": 3, "phonenumber": "3166266373", "color": "warm-3", "lastreview": "Jun 15, 2017" },
            { "name": "Laura Maria Betancur", "age": "21", "gender": "Mujer", "id": 4, "phonenumber": "3166266373", "color": "warm-4", "lastreview": "Nov 1, 2017" },
            { "name": "Esteban Salazar", "age": "44", "gender": "Hombre", "id": 5, "phonenumber": "3166266373", "color": "warm-5", "lastreview": "Nov 1, 2017" },
            { "name": "Jhon Garces", "age": "34", "gender": "Hombre", "id": 6, "phonenumber": "3166266373", "color": "warm-6", "lastreview": "Dic 26, 2017" }
        ];
    }

    getOrders() {
        return [{
            "id": "1",
            "emission_date": "2017/08/16",
            "time": "12:46",
            "provider": {
                "id": "00873",
                "prestador": "SARAMED S.A.S",
                "nit": "800.2.3",
                "address": "Avenida Siempre Viva 123",
                "phone": "3457777"
            },
            "patient": {
                "id": 1,
                "name": "Juan Carlos Restrepo",
                "age": "24",
                "gender": "Hombre",
                "phone_number": "3166266373",
                "last_appointment": "Feb 25, 2017"
            },
            "diagnostic": [{
                "id": "A013",
                "name": "FIEBRE PARATIFOIDEA C"
            }],
            "exams": [{
                "id": "Z001",
                "name": "Frotis Uñas y Garganta",
                "state": 1
            },
            {
                "id": "Z002",
                "name": "Gripe-Influenza",
                "state": 2
            }
            ]
        }, {
            "id": "2",
            "emission_date": "2017/08/16",
            "time": "12:46",
            "provider": {
                "id": "00873",
                "prestador": "SARAMED S.A.S",
                "nit": "800.2.3",
                "address": "Avenida Siempre Viva 123",
                "phone": "3457777"
            },
            "patient": {
                "id": 2,
                "name": "Monica Lucia Gil",
                "age": "33",
                "gender": "Mujer",
                "phone_number": "3166266373",
                "last_appointment": "Ago 23, 2017"
            },
            "diagnostic": [{
                "id": "A013",
                "name": "FIEBRE PARATIFOIDEA C"
            }],
            "exams": [{
                "id": "Z001",
                "name": "Frotis Uñas y Garganta",
                "state": 1
            },
            {
                "id": "Z002",
                "name": "Gripe-Influenza",
                "state": 1
            }
            ]
        }, {
            "id": "3",
            "emission_date": "2017/08/16",
            "time": "12:46",
            "provider": {
                "id": "00873",
                "prestador": "SARAMED S.A.S",
                "nit": "800.2.3",
                "address": "Avenida Siempre Viva 123",
                "phone": "3457777"
            },
            "patient": {
                "id": 3,
                "name": "David Nolberto Gonzalez",
                "age": "30",
                "gender": "Hombre",
                "phone_number": "3166266373",
                "last_appointment": "Jun 15, 2017"
            },
            "diagnostic": [{
                "id": "A013",
                "name": "FIEBRE PARATIFOIDEA C"
            }],
            "exams": [{
                "id": "Z001",
                "name": "Frotis Uñas y Garganta",
                "state": 1
            },
            {
                "id": "Z002",
                "name": "Gripe-Influenza",
                "state": 1
            }
            ]
        }, {
            "id": "4",
            "emission_date": "2017/08/16",
            "time": "12:46",
            "provider": {
                "id": "00873",
                "prestador": "SARAMED S.A.S",
                "nit": "800.2.3",
                "address": "Avenida Siempre Viva 123",
                "phone": "3457777"
            },
            "patient": {
                "id": 4,
                "name": "Laura Maria Betancur",
                "age": "33",
                "gender": "Mujer",
                "phone_number": "3166266373",
                "last_appointment": "Nov 1, 2017"
            },
            "diagnostic": [{
                "id": "A013",
                "name": "FIEBRE PARATIFOIDEA C"
            }],
            "exams": [{
                "id": "Z001",
                "name": "Frotis Uñas y Garganta",
                "state": 1
            },
            {
                "id": "Z002",
                "name": "Gripe-Influenza",
                "state": 1
            }
            ]
        }, {
            "id": "5",
            "emission_date": "2017/08/16",
            "time": "12:46",
            "provider": {
                "id": "00873",
                "prestador": "SARAMED S.A.S",
                "nit": "800.2.3",
                "address": "Avenida Siempre Viva 123",
                "phone": "3457777"
            },
            "patient": {
                "id": 5,
                "name": "Esteban Salazar",
                "age": "44",
                "gender": "Hombre",
                "phone_number": "3166266373",
                "last_appointment": "Nov 1, 2017"
            },
            "diagnostic": [{
                "id": "A013",
                "name": "FIEBRE PARATIFOIDEA C"
            }],
            "exams": [{
                "id": "Z001",
                "name": "Frotis Uñas y Garganta",
                "state": 1
            },
            {
                "id": "Z002",
                "name": "Gripe-Influenza",
                "state": 1
            }
            ]
        }, {
            "id": "6",
            "emission_date": "2017/08/16",
            "time": "12:46",
            "provider": {
                "id": "00873",
                "prestador": "SARAMED S.A.S",
                "nit": "800.2.3",
                "address": "Avenida Siempre Viva 123",
                "phone": "3457777"
            },
            "patient": {
                "id": 6,
                "name": "Jhon Garces",
                "age": "34",
                "gender": "Hombre",
                "phone_number": "3166266373",
                "last_appointment": "Dic 26, 2017"
            },
            "diagnostic": [{
                "id": "A013",
                "name": "FIEBRE PARATIFOIDEA C"
            }],
            "exams": [{
                "id": "Z001",
                "name": "Frotis Uñas y Garganta",
                "state": 1
            },
            {
                "id": "Z002",
                "name": "Gripe-Influenza",
                "state": 1
            }
            ]
        }];
    }

}