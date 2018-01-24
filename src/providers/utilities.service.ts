
import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {

    constructor() {

    }

    getPatients() {
        return [
            { "name": "Juan Carlos Restrepo", "age": "24", "state_exam": 2, "gender": "Hombre", "avatar": "assets/avatars/1.png", "id": 1, "phonenumber": "3166266373", "color": "warm-1", "lastreview": "Feb 25, 2017" },
            { "name": "Monica Lucia Gil", "age": "33", "state_exam": 3, "gender": "Mujer", "avatar": "assets/avatars/2.png", "id": 2, "phonenumber": "3166266373", "color": "warm-2", "lastreview": "Ago 23, 2017" },
            { "name": "David Nolberto Gonzalez", "state_exam": 1, "age": "30", "gender": "Hombre", "avatar": "assets/avatars/3.png", "id": 3, "phonenumber": "3166266373", "color": "warm-3", "lastreview": "Jun 15, 2017" },
            { "name": "Laura Maria Betancur", "state_exam": 2, "age": "21", "gender": "Mujer", "avatar": "assets/avatars/4.png", "id": 4, "phonenumber": "3166266373", "color": "warm-4", "lastreview": "Nov 1, 2017" },
            { "name": "Esteban Salazar", "state_exam": 1, "age": "44", "gender": "Hombre", "id": 5, "avatar": "assets/avatars/5.png", "phonenumber": "3166266373", "color": "warm-5", "lastreview": "Nov 1, 2017" },
            { "name": "Jhon Garces", "state_exam": 1, "age": "34", "gender": "Hombre", "avatar": "assets/avatars/6.png", "id": 6, "phonenumber": "3166266373", "color": "warm-6", "lastreview": "Dic 26, 2017" }
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
                "state": "2",
                "link_ref": "assets/files/dummy.png"
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
        return [
            {
                "messageId": "1",
                "userId": "140000198202211138",
                "userName": "Guillermo Andrés Velasco B.",
                "userImgUrl": "./assets/avatars/profesional.png",
                "toUserId": "210000198410281948",
                "toUserName": "Especialistas",
                "userAvatar": "./assets/avatars/1.png",
                "time": 1488349800000,
                "message": "Buenas tardes Doc. Como está? ",
                "status": "success"
            },
            {
                "messageId": "2",
                "userId": "210000198410281948",
                "userName": "Especialistas",
                "userImgUrl": "./assets/avatars/profesional.png",
                "toUserId": "140000198202211138",
                "toUserName": "Guillermo Andrés Velasco B.",
                "userAvatar": "./assets/avatars/profesional.png",
                "time": 1491034800000,
                "message": "Muy bien gracias y como vas ?",
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
                "message": "Todo muy bien thanks!. Doc, Tengo una duda sobre el procedimiento ABCD. Mi duda en particular es referente a la cantidad a suministrar.",
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
                "message": "Ya veo, pero sabes!, depende del paciente. Es adulto o niño ?",
                "status": "success"
            },
            {
                "messageId": "5",
                "userId": "140000198202211138",
                "userName": "Guillermo Andrés Velasco B.",
                "userImgUrl": "./assets/avatars/profesional.png",
                "toUserId": "210000198410281948",
                "toUserName": "Especialistas",
                "userAvatar": "./assets/avatars/1.png",
                "time": 1491108720000,
                "message": "Adulto Doc.",
                "status": "success"
            },
            {
                "messageId": "6",
                "userId": "210000198410281948",
                "userName": "Especialistas",
                "userImgUrl": "./assets/avatars/1.png",
                "toUserId": "140000198202211138",
                "toUserName": "Guillermo Andrés Velasco B.",
                "userAvatar": "./assets/avatars/profesional.png",
                "time": 1491231120000,
                "message": "Ok, Entiendo suminístrale 500 grs!",
                "status": "success"
            },
            {
                "messageId": "7",
                "userId": "140000198202211138",
                "userName": "Guillermo Andrés Velasco B.",
                "userImgUrl": "./assets/avatars/1.png",
                "toUserId": "210000198410281948",
                "toUserName": "Especialistas",
                "userAvatar": "./assets/avatars/1.png",
                "time": 1491231150000,
                "message": "Ok, Muchas gracias por su ayuda Doc.",
                "status": "success"
            },
            {
                "messageId": "1",
                "userId": "210000198410281948",
                "userName": "Especialistas",
                "userImgUrl": "./assets/avatars/1.png",
                "toUserId": "140000198202211138",
                "toUserName": "Guillermo Andrés Velasco B.",
                "userAvatar": "./assets/avatars/profesional.png",
                "time": 1488349800000,
                "message": "Con gusto no dudes en consultar nuevamente si tienes alguna duda. ",
                "status": "success"
            },
            {
                "messageId": "2",
                "userId": "140000198202211138",
                "userName": "Guillermo Andrés Velasco B.",
                "userImgUrl": "./assets/avatars/profesional.png",
                "toUserId": "210000198410281948",
                "toUserName": "Especialistas",
                "userAvatar": "./assets/avatars/1.png",
                "time": 1491034800000,
                "message": "Genial!, feliz tarde.",
                "status": "success"
            },
            {
                "messageId": "3",
                "userId": "210000198410281948",
                "userName": "Especialistas",
                "userImgUrl": "./assets/avatars/1.png",
                "toUserId": "140000198202211138",
                "toUserName": "Guillermo Andrés Velasco B.",
                "userAvatar": "./assets/avatars/profesional.png",
                "time": 1491034920000,
                "message": "Hasta pronto!",
                "status": "success"
            }
        ];

    }

    getCongressDetail() {
        return [
            { "time": "8:30-9:00", "title": "Registro de participantes", "detail": "Hall Principal" },
            { "time": "9:00-9:30", "title": "Bienvenida", "detail": "Dirk Jaspers, Director CELADE-División de Población de la CEPAL" },
            { "time": "9:30-10:30", "title": "Derechos, políticas públicas, y salud", "detail": "En el presente trabajo nos proponemos exponer un panorama exhaustivo de la cuestión, abordándola desde tres miradas absolutamente imprescindibles: la del derecho, la de las políticas públicas y la de la salud" },
            { "time": "10:30-10:45", "title": "Café", "detail": "Plazoleta comidas." },
            { "time": "10:45-13:00 ", "title": "Continuación sesión 1 ", "detail": "Políticas públicas y salud intercultural en el marco de los derechos humanos" },
            { "time": "13:00-14:30", "title": "Almuerzo", "detail": "Plazoleta comidas." },
            { "time": "14:30-16:30 ", "title": "Avances en políticas y programas nacionales", "detail": "Mecanismos de participación " },
            { "time": "16:30-16:45", "title": "Café", "detail": "Plazoleta comidas." },
            { "time": "16:30-18:00", "title": "Políticas y programas territoriales y autónomos", "detail": "Orden ancestral para la vida, modelo de atención en salud" }
        ];
    }


    getListTopics() {
        return [
            { "title": "Chat con Especialista", "icon": "ios-chatbubbles-outline", "color": "secondary", "id": 1 },
            { "title": "Foros", "icon": "ios-megaphone-outline", "color": "primary", "id": 2 },
            { "title": "Publicaciones", "icon": "ios-eye-outline", "color": "warm-17", "id": 3 },
        ];

    }

    getSpecialists() {
        return [
            { "name": "Guillermo Andrés Velasco B.", "medical_speciality": "Urólogo", "avatar": "assets/avatars/1.png", "id": 1, "phonenumber": "3166266373" },
            { "name": "Juan Carlos Avila", "medical_speciality": "Urólogo", "avatar": "assets/avatars/8.png", "id": 2, "phonenumber": "3166266373" },
            { "name": "Maria Cecilia Turizo", "medical_speciality": "Urólogo", "avatar": "assets/avatars/7.png", "id": 3, "phonenumber": "3166266373" },
            { "name": "Fabian Raigoza", "medical_speciality": "Urólogo", "avatar": "assets/avatars/9.png", "id": 4, "phonenumber": "3166266373" },
            { "name": "Juan Velz", "id": 5, "medical_speciality": "Urólogo", "avatar": "assets/avatars/10.png", "phonenumber": "3166266373" },
            { "name": "Jhon Garces", "medical_speciality": "Urólogo", "avatar": "assets/avatars/11.png", "id": 6, "phonenumber": "3166266373" }
        ];
    }

    getPublishings() {
        return [
            {
                "id": 1,
                "date": "Enero 12, 2018",
                "specialist": { "name": "Guillermo Andrés Velasco B.", "medical_speciality": "Urólogo", "avatar": "assets/avatars/1.png", "id": 1, "phonenumber": "3166266373" },
                "name": "Alergología.", "description": "La alergia es una respuesta exagerada " + "(reacción de hipersensibilidad) del sistema defensivo (sistema inmunitario) "
                + "del paciente que identifica como nocivas determinadas sustancias inocuas (como pueden ser los pólenes de algunas plantas o los ácaros del polvo doméstico, " +
                "por ejemplo) habitualmente toleradas por la mayoría de las personas.",
                "img": "assets/imgs/Alergologia.jpg",
                "link": "https://www.barnaclinic.com/es/especialidades/139/alergologia"
            },
            {
                "id": 2,
                "date": "Diciembre 8, 2017",
                "specialist": { "name": "Juan Carlos Avila", "medical_speciality": "Urólogo", "avatar": "assets/avatars/8.png", "id": 2, "phonenumber": "3166266373" },
                "name": "Análisis Clínicos .", "description": "Los análisis clínicos también son conocidos como pruebas de laboratorio y consisten " +
                "básicamente en el estudio de los componentes de muestras biológicas que se toman del cuerpo, tales como la sangre, la orina, " +
                "el tejido, etc. Los resultados de los análisis clínicos son de valiosa utilidad para el médico ya que le permiten confirmar o " +
                " descartar un determinado diagnóstico.",
                "img": "assets/imgs/analisis-clinico.jpg",
                "link": "http://www.educativo.net/articulos/que-son-los-analisis-clinicos-1142.html"
            },
            {
                "id": 3,
                "date": "Noviembre 30, 2017",
                "specialist": { "name": "Maria Cecilia Turizo", "medical_speciality": "Urólogo", "avatar": "assets/avatars/7.png", "id": 3, "phonenumber": "3166266373" },
                "name": "Anatomía Patológica .", "description": "La salud en general y la medicina en particular están experimentado grandes " +
                "transformaciones en este siglo xxi, y su devenir en el próximo futuro está basado en condicionantes que dependen en buena medida " +
                "de las nuevas tecnologías diagnósticas y terapéuticas",
                "img": "assets/imgs/anatomia_patologica.jpg",
                "link": "http://www.elsevier.es/es-revista-revista-espanola-patologia-297-articulo-la-evolucion-anatomia-patologica-hacia-S1699885517300284"
            },
            {
                "id": 4,
                "date": "Noviembre 12, 2017",
                "specialist": { "name": "Fabian Raigoza", "medical_speciality": "Urólogo", "avatar": "assets/avatars/9.png", "id": 4, "phonenumber": "3166266373" },
                "name": "Anestesiología y Reanimación.", "description": "En esta sección pueden consultar los trabajos, artículos, ensayos, estudios," +
                " investigaciones etc. de las especialidades de Anestesiología y Reanimación.",
                "img": "assets/imgs/anastesiologia.jpg",
                "link": "https://www.portalesmedicos.com/publicaciones/categories/Articulos/Anestesiologia-y-Reanimacion/"
            },

        ];
    }


}