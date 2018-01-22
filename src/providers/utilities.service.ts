
import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {

    constructor() {

    }

    getPatients() {
        return [
            { "name": "Juan Carlos Restrepo", "age": "24", "state_exam":2, "gender": "Hombre", "avatar": "assets/avatars/1.png", "id": 1, "phonenumber": "3166266373", "color": "warm-1", "lastreview": "Feb 25, 2017" },
            { "name": "Monica Lucia Gil", "age": "33", "state_exam":3, "gender": "Mujer", "avatar": "assets/avatars/2.png", "id": 2, "phonenumber": "3166266373", "color": "warm-2", "lastreview": "Ago 23, 2017" },
            { "name": "David Nolberto Gonzalez", "state_exam":1, "age": "30", "gender": "Hombre", "avatar": "assets/avatars/3.png", "id": 3, "phonenumber": "3166266373", "color": "warm-3", "lastreview": "Jun 15, 2017" },
            { "name": "Laura Maria Betancur", "state_exam":2, "age": "21", "gender": "Mujer", "avatar": "assets/avatars/4.png", "id": 4, "phonenumber": "3166266373", "color": "warm-4", "lastreview": "Nov 1, 2017" },
            { "name": "Esteban Salazar", "state_exam":1, "age": "44", "gender": "Hombre", "id": 5, "avatar": "assets/avatars/5.png", "phonenumber": "3166266373", "color": "warm-5", "lastreview": "Nov 1, 2017" },
            { "name": "Jhon Garces", "state_exam":1, "age": "34", "gender": "Hombre", "avatar": "assets/avatars/6.png", "id": 6, "phonenumber": "3166266373", "color": "warm-6", "lastreview": "Dic 26, 2017" }
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
                "avatar": "assets/avatars/1.png",
                "name": "Juan Carlos Restrepo",
                "age": "24",
                "gender": "Hombre",
                "phone_number": "3166266373",
                "last_appointment": "Feb 25, 2017"
            },
            "medic": {
                "id": 1,
                "avatar": "assets/avatars/profesional.png",
                "name": "Guillermo Andrés Velasco B.",
                "phone_number": "316789072",
                "specialist": "Oncología Médica"
            },
            "diagnostic": [{
                "id": "A013",
                "name": "FIEBRE PARATIFOIDEA C",
                "medical_treatment": [{
                    "medicine": "Isoniazid (H)",
                    "dose": "250 mlg",
                    "duration_in_days": "5",
                    "supply_time_in_hours": "9"
                }, {
                    "medicine": "Rifampicin (R)",
                    "dose": "150 ml",
                    "duration_in_days": "12",
                    "supply_time_in_hours": "12"
                }]
            }],
            "exams": [{
                "id": "Z001",
                "name": "Frotis Uñas y Garganta",
                "state": "1 ",
                "link_ref": ""
            },
            {
                "id": "Z002",
                "name": "Gripe-Influenza",
                "state": "2",
                "link_ref": "assets/files/dummy.png"
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
                "avatar": "assets/avatars/2.png",
                "name": "Monica Lucia Gil",
                "age": "33",
                "gender": "Mujer",
                "phone_number": "3166266373",
                "last_appointment": "Ago 23, 2017"
            },
            "medic": {
                "id": 1,
                "avatar": "assets/avatars/profesional.png",
                "name": "Guillermo Andrés Velasco B.",
                "phone_number": "316789072",
                "specialist": "Oncología Médica"
            },
            "diagnostic": [{
                "id": "A013",
                "name": "FIEBRE PARATIFOIDEA C",
                "medical_treatment": [{
                    "medicine": "Isoniazid (H)",
                    "dose": "250 mlg",
                    "duration_in_days": "5",
                    "supply_time_in_hours": "9"
                }, {
                    "medicine": "Rifampicin (R)",
                    "dose": "150 ml",
                    "duration_in_days": "12",
                    "supply_time_in_hours": "12"
                }]
            }],
            "exams": [{
                "id": "Z001",
                "name": "Frotis Uñas y Garganta",
                "state": "2"
            },
            {
                "id": "Z002",
                "name": "Gripe-Influenza",
                "state": "2",
                "link_ref": "assets/files/dummy.png"
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
                "avatar": "assets/avatars/3.png",
                "name": "David Nolberto Gonzalez",
                "age": "30",
                "gender": "Hombre",
                "phone_number": "3166266373",
                "last_appointment": "Jun 15, 2017"
            },
            "medic": {
                "id": 1,
                "avatar": "assets/avatars/profesional.png",
                "name": "Guillermo Andrés Velasco B.",
                "phone_number": "316789072",
                "specialist": "Oncología Médica"
            },
            "diagnostic": [{
                "id": "A013",
                "name": "FIEBRE PARATIFOIDEA C",
                "medical_treatment": [{
                    "medicine": "Isoniazid (H)",
                    "dose": "250 mlg",
                    "duration_in_days": "5",
                    "supply_time_in_hours": "9"
                }, {
                    "medicine": "Rifampicin (R)",
                    "dose": "150 ml",
                    "duration_in_days": "12",
                    "supply_time_in_hours": "12"
                }]
            }],
            "exams": [{
                "id": "Z001",
                "name": "Frotis Uñas y Garganta",
                "state": "1 ",
                "link_ref": ""
            },
            {
                "id": "Z002",
                "name": "Gripe-Influenza",
                "state": "1 ",
                "link_ref": ""
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
                "avatar": "assets/avatars/4.png",
                "name": "Laura Maria Betancur",
                "age": "33",
                "gender": "Mujer",
                "phone_number": "3166266373",
                "last_appointment": "Nov 1, 2017"
            },
            "medic": {
                "id": 1,
                "avatar": "assets/avatars/profesional.png",
                "name": "Guillermo Andrés Velasco B.",
                "phone_number": "316789072",
                "specialist": "Oncología Médica"
            },
            "diagnostic": [{
                "id": "A013",
                "name": "FIEBRE PARATIFOIDEA C",
                "medical_treatment": [{
                    "medicine": "Isoniazid (H)",
                    "dose": "250 mlg",
                    "duration_in_days": "5",
                    "supply_time_in_hours": "9"
                }, {
                    "medicine": "Rifampicin (R)",
                    "dose": "150 ml",
                    "duration_in_days": "12",
                    "supply_time_in_hours": "12"
                }]
            }],
            "exams": [{
                "id": "Z001",
                "name": "Frotis Uñas y Garganta",
                "state": "1 ",
                "link_ref": ""
            },
            {
                "id": "Z002",
                "name": "Gripe-Influenza",
                "state": "2",
                "link_ref": "assets/files/dummy.png"
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
                "avatar": "assets/avatars/5.png",
                "name": "Esteban Salazar",
                "age": "44",
                "gender": "Hombre",
                "phone_number": "3166266373",
                "last_appointment": "Nov 1, 2017"
            },
            "medic": {
                "id": 1,
                "avatar": "assets/avatars/profesional.png",
                "name": "Guillermo Andrés Velasco B.",
                "phone_number": "316789072",
                "specialist": "Oncología Médica"
            },
            "diagnostic": [{
                "id": "A013",
                "name": "FIEBRE PARATIFOIDEA C",
                "medical_treatment": [{
                    "medicine": "Isoniazid (H)",
                    "dose": "250 mlg",
                    "duration_in_days": "5",
                    "supply_time_in_hours": "9"
                }, {
                    "medicine": "Rifampicin (R)",
                    "dose": "150 ml",
                    "duration_in_days": "12",
                    "supply_time_in_hours": "12"
                }]
            }],
            "exams": [{
                "id": "Z001",
                "name": "Frotis Uñas y Garganta",
                "state": "1 ",
                "link_ref": ""
            },
            {
                "id": "Z002",
                "name": "Gripe-Influenza",
                "state": "1 ",
                "link_ref": ""
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
                "avatar": "assets/avatars/6.png",
                "name": "Jhon Garces",
                "age": "34",
                "gender": "Hombre",
                "phone_number": "3166266373",
                "last_appointment": "Dic 26, 2017"
            },
            "medic": {
                "id": 1,
                "avatar": "assets/avatars/profesional.png",
                "name": "Guillermo Andrés Velasco B.",
                "phone_number": "316789072",
                "specialist": "Oncología Médica"
            },
            "diagnostic": [{
                "id": "A013",
                "name": "FIEBRE PARATIFOIDEA C",
                "medical_treatment": [{
                    "medicine": "Isoniazid (H)",
                    "dose": "250 mlg",
                    "duration_in_days": "5",
                    "supply_time_in_hours": "9"
                }, {
                    "medicine": "Rifampicin (R)",
                    "dose": "150 ml",
                    "duration_in_days": "12",
                    "supply_time_in_hours": "12"
                }]
            }],
            "exams": [{
                "id": "Z001",
                "name": "Frotis Uñas y Garganta",
                "state": "1 ",
                "link_ref": ""
            },
            {
                "id": "Z002",
                "name": "Gripe-Influenza",
                "state": "1 ",
                "link_ref": ""
            }
            ]
        }];
    }

    getCongress() {
        return [{
            "id": "1",
            "name": "XX CONGRESO ACTUALIZACION GINECOLOGIA Y OBSTETRICIA. FUNDACION SANTA FE DE BOGOTA",
            "date": "del 02 al 04 de marzo de 2018",
            "location": "CARTAGENA DE INDIAS, Colombia"
        },
        {
            "id": "2",
            "name": "XVIII Simposio Internacional de Neumología y Alergia Pediátrica",
            "date": "del 20 al 21 de abril de 2018",
            "location": "Cartagena de Indias, Colombia"
        },
        {
            "id": "2",
            "name": "XVIII Simposio Internacional de Neumología y Alergia Pediátrica",
            "date": "del 20 al 21 de abril de 2018",
            "location": "Cartagena de Indias, Colombia"
        },
        {
            "id": "2",
            "name": "XVIII Simposio Internacional de Neumología y Alergia Pediátrica",
            "date": "del 20 al 21 de abril de 2018",
            "location": "Cartagena de Indias, Colombia"
        },
        {
            "id": "3",
            "name": "Maternal-Fetal Imaging 2018: Advances in OB-GYN Ultrasound",
            "date": "del 19 al 21 de enero de 2018",
            "location": "San Antonio, Texas, Estados Unidos"
        },
        {
            "id": "4",
            "name": "ECOGRAFI OBSTÉTRICO-GINECOLÓGICA ",
            "date": "23 de enero de 2018",
            "location": "Barcelona, España"
        },
        {
            "id": "5",
            "name": "Congreso Entre Dos Manos",
            "date": "del 26 al 27 de enero de 2018",
            "location": "MADRID, España"
        },
        {
            "id": "6",
            "name": "XIV Congreso Internacional de Ginecología y Obstetricia ISAMI 2018 ",
            "date": "del 21 al 24 de febrero de 2018",
            "location": "Quito, Ecuador"
        },
        {
            "id": "7",
            "name": "VII FORO DE SALUD SEXUAL",
            "date": "del 23 al 24 de febrero de 2018",
            "location": "Alicante, España"
        },
        ];
    }

    getProviders() {
        return [{
            "id": "00873",
            "prestador": "SARAMED S.A.S",
            "nit": "800.2.3",
            "address": "Avenida Siempre Viva 123",
            "phone": "3457777"
        },
        {
            "id": "00253",
            "prestador": "MERCO SALUD S.A.S",
            "nit": "414.44.53",
            "address": "Calle 23 # 35-12",
            "phone": "4362663"
        },
        {
            "id": "004252",
            "prestador": "PROCAPS S.A.S",
            "nit": "243.24.36",
            "address": "Cra 45 # 56-78",
            "phone": "5464644"
        }
        ]
    }

    getListMessage() {
        return {
            "array": [
                {
                    "messageId": "1",
                    "userId": "140000198202211138",
                    "userName": "Guillermo Andrés Velasco B.",
                    "userImgUrl": "./assets/avatars/profesional.png",
                    "toUserId": "210000198410281948",
                    "toUserName": "Especialistas",
                    "userAvatar": "./assets/avatars/1.png",
                    "time": 1488349800000,
                    "message": "A good programmer is someone who always looks both ways before crossing a one-way street. ",
                    "status": "success"
                },
                {
                    "messageId": "2",
                    "userId": "210000198410281948",
                    "userName": "Especialistas",
                    "userImgUrl": "./assets/avatars/profesional.png",
                    "toUserId": "140000198202211138",
                    "toUserName": "Guillermo Andrés Velasco B.",
                    "userAvatar": "./assets/avatars/1.png",
                    "time": 1491034800000,
                    "message": "Don’t worry if it doesn't work right. If everything did, you’d be out of a job.",
                    "status": "success"
                },
                {
                    "messageId": "3",
                    "userId": "140000198202211138",
                    "userName": "Guillermo Andrés Velasco B.",
                    "userImgUrl": "./assets/avatars/profesional.png",
                    "toUserId": "210000198410281948",
                    "toUserName": "Especialistas",
                    "userAvatar": "./assets/avatars/1.png",
                    "time": 1491034920000,
                    "message": "Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris.",
                    "status": "success"
                },
                {
                    "messageId": "4",
                    "userId": "210000198410281948",
                    "userName": "Especialistas",
                    "userImgUrl": "./assets/avatars/1.png",
                    "toUserId": "140000198202211138",
                    "toUserName": "Guillermo Andrés Velasco B.",
                    "userAvatar": "./assets/avatars/profesional.png",
                    "time": 1491036720000,
                    "message": "One man’s crappy software is another man’s full time job.",
                    "status": "success"
                },
                {
                    "messageId": "5",
                    "userId": "210000198410281948",
                    "userName": "Especialistas",
                    "userImgUrl": "./assets/avatars/1.png",
                    "toUserId": "140000198202211138",
                    "toUserName": "Guillermo Andrés Velasco B.",
                    "userAvatar": "./assets/avatars/profesional.png",
                    "time": 1491108720000,
                    "message": "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
                    "status": "success"
                },
                {
                    "messageId": "6",
                    "userId": "140000198202211138",
                    "userName": "Guillermo Andrés Velasco B.",
                    "userImgUrl": "./assets/user.jpg",
                    "toUserId": "210000198410281948",
                    "toUserName": "Especialistas",
                    "userAvatar": "./assets/to-user.jpg",
                    "time": 1491231120000,
                    "message": "If at first you don’t succeed, call it version 1.0",
                    "status": "success"
                },
                {
                    "messageId": "7",
                    "userId": "140000198202211138",
                    "userName": "Guillermo Andrés Velasco B.",
                    "userImgUrl": "./assets/user.jpg",
                    "toUserId": "210000198410281948",
                    "toUserName": "Especialistas",
                    "userAvatar": "./assets/to-user.jpg",
                    "time": 1491231150000,
                    "message": "The <textarea> tag defines a multi-line text input control.\nA text area can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier).\nThe size of a text area can be specified by the cols and rows attributes, or even better; through CSS' height and width properties.",
                    "status": "success"
                }
            ]
        }
    }



}