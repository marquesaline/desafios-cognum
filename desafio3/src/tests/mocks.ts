import { IEmployee } from '../models/employee.model';

export const newEmployeeData = {
    "firstName": "Sjaak",
    "lastName": "Kessen",
    "gender": "male",
    "address": {
        "street": "Boshoverbeek",
        "city": "Broekhuizen Dr",
        "state": "Drenthe",
        "country": "Netherlands",
        "postalCode": "7075 DK"
    },
    "dateOfBirth": "1983-02-07T05:29:28.197Z",
    "email": "sjaak.kessen@example.com",
    "_id": "65034b34c3bfd013c3921475",
    "__v": 0
}

export const employees = [
    {
        "firstName": "النا",
        "lastName": "کوتی",
        "gender": "female",
        "address": {
            "street": "میدان سلماس",
            "city": "ورامین",
            "state": "اصفهان",
            "country": "Iran",
            "postalCode": "95188"
        },
        "dateOfBirth": "1985-10-14T14:35:46.219Z",
        "email": "ln.khwty@example.com",
        "_id": "6503416db5a7a0efa529b081",
        "__v": 0
    },
    {
        "firstName": "Sjaak",
        "lastName": "Kessen",
        "gender": "male",
        "address": {
            "street": "Boshoverbeek",
            "city": "Broekhuizen Dr",
            "state": "Drenthe",
            "country": "Netherlands",
            "postalCode": "7075 DK"
        },
        "dateOfBirth": "1983-02-07T05:29:28.197Z",
        "email": "sjaak.kessen@example.com",
        "_id": "6503416db5a7a0efa529b082",
        "__v": 0
    },
    {
        "firstName": "Roselei",
        "lastName": "Lopes",
        "gender": "female",
        "address": {
            "street": "Rua São Pedro ",
            "city": "Taboão da Serra",
            "state": "Bahia",
            "country": "Brazil",
            "postalCode": "25343"
        },
        "dateOfBirth": "1992-12-03T11:59:55.552Z",
        "email": "roselei.lopes@example.com",
        "_id": "6503416db5a7a0efa529b083",
        "__v": 0
    },
    {
        "firstName": "Anton",
        "lastName": "Hansen",
        "gender": "male",
        "address": {
            "street": "Haderslevvej",
            "city": "Horsens",
            "state": "Midtjylland",
            "country": "Denmark",
            "postalCode": "38053"
        },
        "dateOfBirth": "1987-05-09T20:13:16.029Z",
        "email": "anton.hansen@example.com",
        "_id": "6503416db5a7a0efa529b084",
        "__v": 0
    },
    {
        "firstName": "هستی",
        "lastName": "سالاری",
        "gender": "female",
        "address": {
            "street": "تقوی",
            "city": "کرمانشاه",
            "state": "سیستان و بلوچستان",
            "country": "Iran",
            "postalCode": "55660"
        },
        "dateOfBirth": "1999-02-28T01:00:37.171Z",
        "email": "hsty.slry@example.com",
        "_id": "6503416db5a7a0efa529b085",
        "__v": 0
    },
    {
        "firstName": "Ellen",
        "lastName": "Salmela",
        "gender": "female",
        "address": {
            "street": "Suvantokatu",
            "city": "Ypäjä",
            "state": "Pirkanmaa",
            "country": "Finland",
            "postalCode": "54200"
        },
        "dateOfBirth": "1993-08-14T11:38:50.349Z",
        "email": "ellen.salmela@example.com",
        "_id": "6503416db5a7a0efa529b086",
        "__v": 0
    },
    {
        "firstName": "Frederikke",
        "lastName": "Møller",
        "gender": "male",
        "address": {
            "street": "Bogfinkevej",
            "city": "Argerskov",
            "state": "Nordjylland",
            "country": "Denmark",
            "postalCode": "92145"
        },
        "dateOfBirth": "1989-07-13T19:14:45.320Z",
        "email": "frederikke.moller@example.com",
        "_id": "6503416db5a7a0efa529b087",
        "__v": 0
    },
    {
        "firstName": "Giulia",
        "lastName": "Da Silva",
        "gender": "female",
        "address": {
            "street": "Rue Saint-Georges",
            "city": "Villeurbanne",
            "state": "Lozère",
            "country": "France",
            "postalCode": "45806"
        },
        "dateOfBirth": "1954-08-08T07:18:39.872Z",
        "email": "giulia.dasilva@example.com",
        "_id": "6503416db5a7a0efa529b088",
        "__v": 0
    },
    {
        "firstName": "Débora",
        "lastName": "Moura",
        "gender": "female",
        "address": {
            "street": "Rua Vinte E Quatro de Outubro",
            "city": "Guarujá",
            "state": "Acre",
            "country": "Brazil",
            "postalCode": "23148"
        },
        "dateOfBirth": "1975-07-30T11:00:05.448Z",
        "email": "debora.moura@example.com",
        "_id": "6503416db5a7a0efa529b089",
        "__v": 0
    },
    {
        "firstName": "علی رضا",
        "lastName": "مرادی",
        "gender": "male",
        "address": {
            "street": "شهید کامبیز خشی",
            "city": "سنندج",
            "state": "اردبیل",
            "country": "Iran",
            "postalCode": "35098"
        },
        "dateOfBirth": "1963-07-25T03:46:36.137Z",
        "email": "aalyrd.mrdy@example.com",
        "_id": "6503416db5a7a0efa529b08a",
        "__v": 0
    }
]
  
export const RandomUserServiceMock = [
    {
        gender: 'male',
        name: { title: 'Mr', first: 'Rick', last: 'Johnson' },
        location: {
        street: [Object],
        city: 'Carrigtwohill',
        state: 'Dún Laoghaire–Rathdown',
        country: 'Ireland',
        postcode: 35291,
        coordinates: [Object],
        timezone: [Object]
        },
        email: 'rick.johnson@example.com',
        login: {
        uuid: 'c7b7b334-57e1-42bc-a20a-fcb8fa738ec0',
        username: 'angrymouse970',
        password: 'bootsy',
        salt: 'wC4hlTV4',
        md5: '4ba98724fa6812c3a77d92b9b0d4ff21',
        sha1: '2a529bb3629a95b474194383e74e0f879ee948c7',
        sha256: '7c7740f759eee6250ae07c0a15841f096357c37b438968d2d3e740cf72395ead'
        },
        dob: { date: '1989-12-14T15:25:19.955Z', age: 33 },
        registered: { date: '2016-08-16T08:33:29.347Z', age: 7 },
        phone: '071-641-5970',
        cell: '081-878-5128',
        id: { name: 'PPS', value: '6784228T' },
        picture: {
        large: 'https://randomuser.me/api/portraits/men/55.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/55.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/55.jpg'
        },
        nat: 'IE'
    },
    {
        gender: 'female',
        name: { title: 'Ms', first: 'Lea', last: 'Mortensen' },
        location: {
        street: [Object],
        city: 'Sandved',
        state: 'Syddanmark',
        country: 'Denmark',
        postcode: 73522,
        coordinates: [Object],
        timezone: [Object]
        },
        email: 'lea.mortensen@example.com',
        login: {
        uuid: 'd813ebbd-733d-43f8-8d09-7bfb450075fd',
        username: 'angrybear382',
        password: '1222',
        salt: 'qxbaEt0Z',
        md5: '1ebe742df6e5f7b59ceff7f97afe3dab',
        sha1: 'b728b4c483b5ad667dc2dc8fdef997b855d92799',
        sha256: '7bdd8816701ee98d6409e7a42d8738786df2f79c60bcbd2cab358e9d231d7ba0'
        },
        dob: { date: '1963-02-09T17:16:50.801Z', age: 60 },
        registered: { date: '2018-05-22T23:11:26.882Z', age: 5 },
        phone: '67561201',
        cell: '87681030',
        id: { name: 'CPR', value: '090263-3745' },
        picture: {
        large: 'https://randomuser.me/api/portraits/women/92.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/92.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/92.jpg'
        },
        nat: 'DK'
    },
    {
        gender: 'male',
        name: { title: 'Mr', first: 'Balduíno', last: 'Rocha' },
        location: {
        street: [Object],
        city: 'Vitória',
        state: 'Mato Grosso',
        country: 'Brazil',
        postcode: 15839,
        coordinates: [Object],
        timezone: [Object]
        },
        email: 'balduino.rocha@example.com',
        login: {
        uuid: '055cfbb8-9140-41cc-ac10-514c78112d75',
        username: 'crazybear229',
        password: 'dimas',
        salt: 'uc7fufOz',
        md5: 'c3ca1bd676c13c2b5e433b9f5e0e1448',
        sha1: 'fcfa7a3058ab7bd240a2ac49048428cf851b8fcd',
        sha256: '8a06d1b9abd43297ec2a08dd29bce6ad6801dc0c6ee9b992124cae5626891753'
        },
        dob: { date: '1998-03-30T10:06:05.814Z', age: 25 },
        registered: { date: '2017-04-21T17:19:31.752Z', age: 6 },
        phone: '(60) 0715-2776',
        cell: '(80) 4316-3283',
        id: { name: 'CPF', value: '417.591.494-34' },
        picture: {
        large: 'https://randomuser.me/api/portraits/men/81.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/81.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/81.jpg'
        },
        nat: 'BR'
    },
    {
        gender: 'female',
        name: { title: 'Miss', first: 'Alisha', last: 'Bjerkan' },
        location: {
        street: [Object],
        city: 'Tomb',
        state: 'Oslo',
        country: 'Norway',
        postcode: '5646',
        coordinates: [Object],
        timezone: [Object]
        },
        email: 'alisha.bjerkan@example.com',
        login: {
        uuid: '6150f151-a644-402f-bd90-1c193bb9d165',
        username: 'blackleopard727',
        password: 'stereo',
        salt: 'wyBIcTLl',
        md5: 'f27d749cfbd5024d0ff7da8126ffb319',
        sha1: 'acbcd60888ceda00dbf953811041077a517cbab9',
        sha256: '8d5128f16ac047c78cba8c7373ccd97aaa0baf90d335a517b32d2284c70619b3'
        },
        dob: { date: '1970-03-22T18:19:49.934Z', age: 53 },
        registered: { date: '2003-06-07T12:53:44.320Z', age: 20 },
        phone: '63794104',
        cell: '43255067',
        id: { name: 'FN', value: '22037042645' },
        picture: {
        large: 'https://randomuser.me/api/portraits/women/72.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/72.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/72.jpg'
        },
        nat: 'NO'
    },
    {
        gender: 'male',
        name: { title: 'Mr', first: 'Jacob', last: 'Allen' },
        location: {
        street: [Object],
        city: 'Reno',
        state: 'Wyoming',
        country: 'United States',
        postcode: 75713,
        coordinates: [Object],
        timezone: [Object]
        },
        email: 'jacob.allen@example.com',
        login: {
        uuid: '53d572c8-e26e-4667-be01-18e3d9156780',
        username: 'angryfish157',
        password: 'password',
        salt: 'M7AllWH5',
        md5: '7ed4369103cd5564113ecb78c2b06610',
        sha1: 'cb1d1f0c985cf3c5c50df318cfa8f4ba93eed3db',
        sha256: '8f57175c7207067d39951499b541b825dbd9138b28a06098fce24cfb55bbb657'
        },
        dob: { date: '1952-05-23T09:45:44.755Z', age: 71 },
        registered: { date: '2010-04-27T02:21:22.047Z', age: 13 },
        phone: '(347) 328-9252',
        cell: '(429) 529-4195',
        id: { name: 'SSN', value: '596-94-8199' },
        picture: {
        large: 'https://randomuser.me/api/portraits/men/40.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/40.jpg'
        },
        nat: 'US'
    },
    {
        gender: 'female',
        name: { title: 'Mrs', first: 'Katiane', last: 'Freitas' },
        location: {
        street: [Object],
        city: 'Mogi Guaçu',
        state: 'Mato Grosso do Sul',
        country: 'Brazil',
        postcode: 83946,
        coordinates: [Object],
        timezone: [Object]
        },
        email: 'katiane.freitas@example.com',
        login: {
        uuid: '2d28b70b-85bf-4621-b043-981ac29f6702',
        username: 'purpleladybug385',
        password: 'dragonfl',
        salt: 'T5AdlPyx',
        md5: 'a7212eab7cb1dc47fdbd51ee41d77035',
        sha1: '060e4daf2273440fabde34c1ea4514a996aee4bc',
        sha256: '3257ed011d481067f338eb021dcbaf32bf5a5dcf542e494762cc5f88a346a50c'
        },
        dob: { date: '1979-07-14T06:35:23.378Z', age: 44 },
        registered: { date: '2015-02-10T07:03:25.212Z', age: 8 },
        phone: '(54) 3279-3255',
        cell: '(66) 8644-0890',
        id: { name: 'CPF', value: '174.532.244-54' },
        picture: {
        large: 'https://randomuser.me/api/portraits/women/25.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/25.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/25.jpg'
        },
        nat: 'BR'
    },
    {
        gender: 'female',
        name: { title: 'Mrs', first: 'Angela', last: 'Bergsvik' },
        location: {
        street: [Object],
        city: 'Mebonden',
        state: 'Hordaland',
        country: 'Norway',
        postcode: '6044',
        coordinates: [Object],
        timezone: [Object]
        },
        email: 'angela.bergsvik@example.com',
        login: {
        uuid: 'bfb9f622-c8ea-4041-a663-7b33ce48353f',
        username: 'whitemeercat414',
        password: 'beach',
        salt: 'e3avICVq',
        md5: '151355e0388556f694b83697989c50b0',
        sha1: '2b4ed8dbfc48e808d872f006b1663491aedd2ecb',
        sha256: 'b136eea3f615443c8a1da82c552d2873af5bb4055c99da84ec3c24feaca0f18b'
        },
        dob: { date: '1993-07-22T15:27:55.172Z', age: 30 },
        registered: { date: '2013-10-02T04:19:47.496Z', age: 9 },
        phone: '82231485',
        cell: '41227906',
        id: { name: 'FN', value: '22079326449' },
        picture: {
        large: 'https://randomuser.me/api/portraits/women/42.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/42.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/42.jpg'
        },
        nat: 'NO'
    },
    {
        gender: 'female',
        name: { title: 'Mrs', first: 'Sowjanya', last: 'Kamath' },
        location: {
        street: [Object],
        city: 'Khammam',
        state: 'Punjab',
        country: 'India',
        postcode: 64768,
        coordinates: [Object],
        timezone: [Object]
        },
        email: 'sowjanya.kamath@example.com',
        login: {
        uuid: 'f72f88fa-f6d2-4ef1-a87a-16b86dbe602a',
        username: 'greenrabbit609',
        password: 'videoes',
        salt: 'E624SIiM',
        md5: 'a219f7a0e8285cf5aba0548ba01865f8',
        sha1: '7d196cc6105d4777746f6b6acb2fb29191f67820',
        sha256: '1bccbab986cd733d0d678f682529a2b59492678b2bba53e10aa2e16971c59ea5'
        },
        dob: { date: '1986-06-29T08:56:21.989Z', age: 37 },
        registered: { date: '2010-09-21T22:32:21.185Z', age: 12 },
        phone: '9412972679',
        cell: '9477285783',
        id: { name: 'UIDAI', value: '719807208015' },
        picture: {
        large: 'https://randomuser.me/api/portraits/women/47.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/47.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/47.jpg'
        },
        nat: 'IN'
    },
    {
        gender: 'male',
        name: { title: 'Monsieur', first: 'Davide', last: 'Fabre' },
        location: {
        street: [Object],
        city: 'Schwaderloch',
        state: 'Uri',
        country: 'Switzerland',
        postcode: 5466,
        coordinates: [Object],
        timezone: [Object]
        },
        email: 'davide.fabre@example.com',
        login: {
        uuid: '4a759a48-764c-4f53-99ba-da670df02c78',
        username: 'organicmouse109',
        password: 'astro',
        salt: '4DPs3f5i',
        md5: 'e7ac53d50063caa4868f52e644a22dba',
        sha1: '7faf5d6557745d1b0316019c6f174829f41a3156',
        sha256: '4d3967a952e17336d5e0093afd809be8f1d37718d7f7c49fa6aa5a39704b5e0a'
        },
        dob: { date: '1969-01-26T09:19:25.440Z', age: 54 },
        registered: { date: '2012-02-21T21:39:59.219Z', age: 11 },
        phone: '077 408 40 00',
        cell: '078 235 51 91',
        id: { name: 'AVS', value: '756.9993.9921.54' },
        picture: {
        large: 'https://randomuser.me/api/portraits/men/61.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/61.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/61.jpg'
        },
        nat: 'CH'
    },
    {
        gender: 'male',
        name: { title: 'Mr', first: 'Anton', last: 'Pakkala' },
        location: {
        street: [Object],
        city: 'Keuruu',
        state: 'Finland Proper',
        country: 'Finland',
        postcode: 31286,
        coordinates: [Object],
        timezone: [Object]
        },
        email: 'anton.pakkala@example.com',
        login: {
        uuid: '37787c91-095b-4985-b1e0-587c41e95d97',
        username: 'yellowpanda345',
        password: 'alanis',
        salt: '762rpyam',
        md5: '35691bda8164aa0ada32cad449076b32',
        sha1: '6ab57081387acd000138e8beac9388d5cbdba938',
        sha256: '3bfb95265a522bd26076c68672f4cac78a492f89f2e4540a27e7e3d087ae6280'
        },
        dob: { date: '1958-12-19T13:14:05.236Z', age: 64 },
        registered: { date: '2004-08-08T18:23:59.167Z', age: 19 },
        phone: '03-121-612',
        cell: '047-297-96-53',
        id: { name: 'HETU', value: 'NaNNA235undefined' },
        picture: {
        large: 'https://randomuser.me/api/portraits/men/38.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/38.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/38.jpg'
        },
        nat: 'FI'
    }
]