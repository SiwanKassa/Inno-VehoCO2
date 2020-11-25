import { observable } from 'mobx'
/*state management store for driving data*/
class DrivingData {

    @observable  dummyData={
        "tripSummaries": [
            {
                "identifier": "73888943BD0247FFBD4D744A02A9B43B",
                "type": "SINGLE",
                "platformDriveSessionIdentifier": "9D3D0EFE4FE0409FB5ED0CAB3D61E94E",
                "platformVehicleIdentifier": "9A58E8FBC0CF850A240A1A11B6C1ADF2",
                "platformDriverIdentifier": null,
                "name": null,
                "description": null,
                "purpose": "BUSINESS",
                "startTimestamp": "2020-11-25T11:55:29.973Z",
                "startAddress": {
                    "formattedAddress": "Maurener Weg 14, 71034 Böblingen, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Böblingen"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Böblingen"
                        },
                        {
                            "type": "StreetNumber",
                            "value": "14"
                        },
                        {
                            "type": "PostalCode",
                            "value": "71034"
                        },
                        {
                            "type": "Street",
                            "value": "Maurener Weg"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Böblingen"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.68119,
                        "lng": 9.00877
                    }
                },
                "startPosition": {
                    "latitude": 48.680983,
                    "longitude": 9.008771
                },
                "startOdometer": 60469000.0,
                "endTimestamp": "2020-11-25T12:19:56.057Z",
                "endAddress": {
                    "formattedAddress": "Bonhoefferstraße, 73760 Ostfildern, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Ostfildern"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "PostalCode",
                            "value": "73760"
                        },
                        {
                            "type": "Street",
                            "value": "Bonhoefferstraße"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Esslingen"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.7209965,
                        "lng": 9.2651359
                    }
                },
                "endPosition": {
                    "latitude": 48.720894,
                    "longitude": 9.26513
                },
                "endOdometer": 60469000.0,
                "attributes": [
                    {
                        "key": "distance",
                        "value": "0.0"
                    },
                    {
                        "key": "averageFuelConsumption",
                        "value": "6.3"
                    },
                    {
                        "key": "averageSpeed",
                        "value": "0.0"
                    },
                    {
                        "key": "totalEcoScore",
                        "value": "74.0"
                    }
                ]
            },
            {
                "identifier": "ABF86C3D2ABB42658D9CA12AF15DD194",
                "type": "SINGLE",
                "platformDriveSessionIdentifier": "F22DBC819B2F45DB9D3B3EA32A0D925E",
                "platformVehicleIdentifier": "9A58E8FBC0CF850A240A1A11B6C1ADF2",
                "platformDriverIdentifier": null,
                "name": null,
                "description": null,
                "purpose": "BUSINESS",
                "startTimestamp": "2020-11-25T11:16:32.917Z",
                "startAddress": {
                    "formattedAddress": "L1110, 74321 Bietigheim-Bissingen, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Bietigheim-Bissingen"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "PostalCode",
                            "value": "74321"
                        },
                        {
                            "type": "Street",
                            "value": "L1110"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Ludwigsburg"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.9477985,
                        "lng": 9.109809
                    }
                },
                "startPosition": {
                    "latitude": 48.947806,
                    "longitude": 9.109782
                },
                "startOdometer": 60404000.0,
                "endTimestamp": "2020-11-25T11:29:18.965Z",
                "endAddress": {
                    "formattedAddress": "Bonhoefferstraße, 73760 Ostfildern, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Ostfildern"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "PostalCode",
                            "value": "73760"
                        },
                        {
                            "type": "Street",
                            "value": "Bonhoefferstraße"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Esslingen"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.7209965,
                        "lng": 9.2651359
                    }
                },
                "endPosition": {
                    "latitude": 48.720894,
                    "longitude": 9.26513
                },
                "endOdometer": 60429000.0,
                "attributes": [
                    {
                        "key": "distance",
                        "value": "25000.0"
                    },
                    {
                        "key": "averageFuelConsumption",
                        "value": "7.0"
                    },
                    {
                        "key": "averageSpeed",
                        "value": "120.3133"
                    },
                    {
                        "key": "totalEcoScore",
                        "value": "74.0"
                    }
                ]
            },
            {
                "identifier": "C1568876BDC04A4C9514FAA1DA2FC28C",
                "type": "SINGLE",
                "platformDriveSessionIdentifier": "3FFADAC6CB2D4C04AD6F4C0DC48E09B5",
                "platformVehicleIdentifier": "9A58E8FBC0CF850A240A1A11B6C1ADF2",
                "platformDriverIdentifier": null,
                "name": null,
                "description": null,
                "purpose": "BUSINESS",
                "startTimestamp": "2020-11-24T17:07:43.743Z",
                "startAddress": {
                    "formattedAddress": "Maicklerstraße 34, 70736 Fellbach, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Fellbach"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Fellbach"
                        },
                        {
                            "type": "StreetNumber",
                            "value": "34"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70736"
                        },
                        {
                            "type": "Street",
                            "value": "Maicklerstraße"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Rems-Murr-Kreis"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.81847,
                        "lng": 9.27892
                    }
                },
                "startPosition": {
                    "latitude": 48.81854,
                    "longitude": 9.27868
                },
                "startOdometer": 60404000.0,
                "endTimestamp": "2020-11-24T17:50:29.913Z",
                "endAddress": {
                    "formattedAddress": "L1110, 74321 Bietigheim-Bissingen, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Bietigheim-Bissingen"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "PostalCode",
                            "value": "74321"
                        },
                        {
                            "type": "Street",
                            "value": "L1110"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Ludwigsburg"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.9477985,
                        "lng": 9.109809
                    }
                },
                "endPosition": {
                    "latitude": 48.947806,
                    "longitude": 9.109782
                },
                "endOdometer": 60404000.0,
                "attributes": [
                    {
                        "key": "distance",
                        "value": "0.0"
                    },
                    {
                        "key": "averageFuelConsumption",
                        "value": "8.3"
                    },
                    {
                        "key": "averageSpeed",
                        "value": "0.0"
                    },
                    {
                        "key": "totalEcoScore",
                        "value": "74.0"
                    }
                ]
            },
            {
                "identifier": "C08B59CD40B24F5D9ADE41638857BD10",
                "type": "SINGLE",
                "platformDriveSessionIdentifier": "410F65A7A1FD4D5E94ECA14F03235DCF",
                "platformVehicleIdentifier": "9A58E8FBC0CF850A240A1A11B6C1ADF2",
                "platformDriverIdentifier": null,
                "name": null,
                "description": null,
                "purpose": "BUSINESS",
                "startTimestamp": "2020-11-23T22:30:20.229Z",
                "startAddress": {
                    "formattedAddress": "Köngener Straße, 73770 Denkendorf, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Denkendorf"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "PostalCode",
                            "value": "73770"
                        },
                        {
                            "type": "Street",
                            "value": "Köngener Straße"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Esslingen"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.6915662,
                        "lng": 9.3269594
                    }
                },
                "startPosition": {
                    "latitude": 48.691447,
                    "longitude": 9.327002
                },
                "startOdometer": 8734000.0,
                "endTimestamp": "2020-11-23T22:33:55.245Z",
                "endAddress": {
                    "formattedAddress": "Maicklerstraße 34, 70736 Fellbach, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Fellbach"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Fellbach"
                        },
                        {
                            "type": "StreetNumber",
                            "value": "34"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70736"
                        },
                        {
                            "type": "Street",
                            "value": "Maicklerstraße"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Rems-Murr-Kreis"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.81847,
                        "lng": 9.27892
                    }
                },
                "endPosition": {
                    "latitude": 48.81854,
                    "longitude": 9.27868
                },
                "endOdometer": 8737000.0,
                "attributes": [
                    {
                        "key": "distance",
                        "value": "3000.0"
                    },
                    {
                        "key": "averageFuelConsumption",
                        "value": "7.7"
                    },
                    {
                        "key": "averageSpeed",
                        "value": "55.2558"
                    },
                    {
                        "key": "totalEcoScore",
                        "value": "74.0"
                    }
                ]
            },
            {
                "identifier": "2A674B73CB064A19AB47AF75DA499D6E",
                "type": "SINGLE",
                "platformDriveSessionIdentifier": "DAC34D58A38148B49E55B235D88FC586",
                "platformVehicleIdentifier": "9A58E8FBC0CF850A240A1A11B6C1ADF2",
                "platformDriverIdentifier": null,
                "name": null,
                "description": null,
                "purpose": "BUSINESS",
                "startTimestamp": "2020-11-23T15:07:32.361Z",
                "startAddress": {
                    "formattedAddress": "Marienplatz, 70178 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Süd"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70178"
                        },
                        {
                            "type": "Street",
                            "value": "Marienplatz"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.76442,
                        "lng": 9.1694
                    }
                },
                "startPosition": {
                    "latitude": 48.76441,
                    "longitude": 9.1694
                },
                "startOdometer": 96656000.0,
                "endTimestamp": "2020-11-23T15:11:01.371Z",
                "endAddress": {
                    "formattedAddress": "Hintere Gasse 41/1, 73770 Denkendorf, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Denkendorf"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Denkendorf"
                        },
                        {
                            "type": "StreetNumber",
                            "value": "41/1"
                        },
                        {
                            "type": "PostalCode",
                            "value": "73770"
                        },
                        {
                            "type": "Street",
                            "value": "Hintere Gasse"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Esslingen"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.69413,
                        "lng": 9.31332
                    }
                },
                "endPosition": {
                    "latitude": 48.693746,
                    "longitude": 9.31339
                },
                "endOdometer": 96656000.0,
                "attributes": [
                    {
                        "key": "distance",
                        "value": "0.0"
                    },
                    {
                        "key": "averageFuelConsumption",
                        "value": "7.8"
                    },
                    {
                        "key": "averageSpeed",
                        "value": "0.0"
                    },
                    {
                        "key": "totalEcoScore",
                        "value": "37.0"
                    }
                ]
            },
            {
                "identifier": "427C27D9DC1846699334D406F0D8001F",
                "type": "SINGLE",
                "platformDriveSessionIdentifier": "70E4C9202C24403DB181F67D1A74B724",
                "platformVehicleIdentifier": "9A58E8FBC0CF850A240A1A11B6C1ADF2",
                "platformDriverIdentifier": null,
                "name": null,
                "description": null,
                "purpose": "BUSINESS",
                "startTimestamp": "2020-11-23T12:43:27.307Z",
                "startAddress": {
                    "formattedAddress": "Neue Weinsteige 26, 70180 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Süd"
                        },
                        {
                            "type": "StreetNumber",
                            "value": "26"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70180"
                        },
                        {
                            "type": "Street",
                            "value": "Neue Weinsteige"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.76369,
                        "lng": 9.17867
                    }
                },
                "startPosition": {
                    "latitude": 48.763755,
                    "longitude": 9.17892
                },
                "startOdometer": 96650000.0,
                "endTimestamp": "2020-11-23T13:02:11.356Z",
                "endAddress": {
                    "formattedAddress": "Marienplatz, 70178 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Süd"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70178"
                        },
                        {
                            "type": "Street",
                            "value": "Marienplatz"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.76442,
                        "lng": 9.1694
                    }
                },
                "endPosition": {
                    "latitude": 48.76441,
                    "longitude": 9.1694
                },
                "endOdometer": 96650000.0,
                "attributes": [
                    {
                        "key": "distance",
                        "value": "0.0"
                    },
                    {
                        "key": "averageFuelConsumption",
                        "value": "7.1"
                    },
                    {
                        "key": "averageSpeed",
                        "value": "0.0"
                    },
                    {
                        "key": "totalEcoScore",
                        "value": "37.0"
                    }
                ]
            },
            {
                "identifier": "202C0269623D40B3B57B03C8D6764CBB",
                "type": "SINGLE",
                "platformDriveSessionIdentifier": "58907D1B812F4273B0E3910773E875C1",
                "platformVehicleIdentifier": "9A58E8FBC0CF850A240A1A11B6C1ADF2",
                "platformDriverIdentifier": null,
                "name": null,
                "description": null,
                "purpose": "BUSINESS",
                "startTimestamp": "2020-11-23T09:29:37.151Z",
                "startAddress": {
                    "formattedAddress": "L1110, 74321 Bietigheim-Bissingen, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Bietigheim-Bissingen"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "PostalCode",
                            "value": "74321"
                        },
                        {
                            "type": "Street",
                            "value": "L1110"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Ludwigsburg"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.9477985,
                        "lng": 9.109809
                    }
                },
                "startPosition": {
                    "latitude": 48.947806,
                    "longitude": 9.109782
                },
                "startOdometer": 96507000.0,
                "endTimestamp": "2020-11-23T10:15:40.273Z",
                "endAddress": {
                    "formattedAddress": "Neue Weinsteige 26, 70180 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Süd"
                        },
                        {
                            "type": "StreetNumber",
                            "value": "26"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70180"
                        },
                        {
                            "type": "Street",
                            "value": "Neue Weinsteige"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.76369,
                        "lng": 9.17867
                    }
                },
                "endPosition": {
                    "latitude": 48.763755,
                    "longitude": 9.17892
                },
                "endOdometer": 96613000.0,
                "attributes": [
                    {
                        "key": "distance",
                        "value": "106000.0"
                    },
                    {
                        "key": "averageFuelConsumption",
                        "value": "8.5"
                    },
                    {
                        "key": "averageSpeed",
                        "value": "138.8925"
                    },
                    {
                        "key": "totalEcoScore",
                        "value": "37.0"
                    }
                ]
            },
            {
                "identifier": "7C9AFCAE0D80438BBF8C25662DC5919E",
                "type": "SINGLE",
                "platformDriveSessionIdentifier": "19C46F3F76F94D48ADE72F168011D76B",
                "platformVehicleIdentifier": "9A58E8FBC0CF850A240A1A11B6C1ADF2",
                "platformDriverIdentifier": null,
                "name": null,
                "description": null,
                "purpose": "BUSINESS",
                "startTimestamp": "2020-11-23T05:26:33.023Z",
                "startAddress": {
                    "formattedAddress": "Eichwiesen, 73760 Ostfildern, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Ostfildern"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Scharnhausen"
                        },
                        {
                            "type": "PostalCode",
                            "value": "73760"
                        },
                        {
                            "type": "Street",
                            "value": "Eichwiesen"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Esslingen"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.705929,
                        "lng": 9.2723879
                    }
                },
                "startPosition": {
                    "latitude": 48.705916,
                    "longitude": 9.2724
                },
                "startOdometer": 96507000.0,
                "endTimestamp": "2020-11-23T06:09:19.144Z",
                "endAddress": {
                    "formattedAddress": "L1110, 74321 Bietigheim-Bissingen, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Bietigheim-Bissingen"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "PostalCode",
                            "value": "74321"
                        },
                        {
                            "type": "Street",
                            "value": "L1110"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Ludwigsburg"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.9477985,
                        "lng": 9.109809
                    }
                },
                "endPosition": {
                    "latitude": 48.947806,
                    "longitude": 9.109782
                },
                "endOdometer": 96507000.0,
                "attributes": [
                    {
                        "key": "distance",
                        "value": "0.0"
                    },
                    {
                        "key": "averageFuelConsumption",
                        "value": "6.2"
                    },
                    {
                        "key": "averageSpeed",
                        "value": "0.0"
                    },
                    {
                        "key": "totalEcoScore",
                        "value": "37.0"
                    }
                ]
            },
            {
                "identifier": "4B8C1B75DE744D988E53C5ABA461C14E",
                "type": "SINGLE",
                "platformDriveSessionIdentifier": "8D06F547E03B44F4B8AC7CEAB56F6078",
                "platformVehicleIdentifier": "9A58E8FBC0CF850A240A1A11B6C1ADF2",
                "platformDriverIdentifier": null,
                "name": null,
                "description": null,
                "purpose": "BUSINESS",
                "startTimestamp": "2020-11-22T07:45:44.920Z",
                "startAddress": {
                    "formattedAddress": "Neue Weinsteige 26, 70180 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Süd"
                        },
                        {
                            "type": "StreetNumber",
                            "value": "26"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70180"
                        },
                        {
                            "type": "Street",
                            "value": "Neue Weinsteige"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.76369,
                        "lng": 9.17867
                    }
                },
                "startPosition": {
                    "latitude": 48.763755,
                    "longitude": 9.17892
                },
                "startOdometer": 96409000.0,
                "endTimestamp": "2020-11-22T08:09:38.999Z",
                "endAddress": {
                    "formattedAddress": "Eichwiesen, 73760 Ostfildern, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Ostfildern"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Scharnhausen"
                        },
                        {
                            "type": "PostalCode",
                            "value": "73760"
                        },
                        {
                            "type": "Street",
                            "value": "Eichwiesen"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Esslingen"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.705929,
                        "lng": 9.2723879
                    }
                },
                "endPosition": {
                    "latitude": 48.705916,
                    "longitude": 9.2724
                },
                "endOdometer": 96453000.0,
                "attributes": [
                    {
                        "key": "distance",
                        "value": "44000.0"
                    },
                    {
                        "key": "averageFuelConsumption",
                        "value": "8.0"
                    },
                    {
                        "key": "averageSpeed",
                        "value": "109.7071"
                    },
                    {
                        "key": "totalEcoScore",
                        "value": "37.0"
                    }
                ]
            },
            {
                "identifier": "D8E2048B0AF74248ADEF1683B8922250",
                "type": "SINGLE",
                "platformDriveSessionIdentifier": "BF07653FF52143E1B8B6E3E294E49807",
                "platformVehicleIdentifier": "9A58E8FBC0CF850A240A1A11B6C1ADF2",
                "platformDriverIdentifier": null,
                "name": null,
                "description": null,
                "purpose": "BUSINESS",
                "startTimestamp": "2020-11-21T22:02:40.331Z",
                "startAddress": {
                    "formattedAddress": "Neue Weinsteige 26, 70180 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Süd"
                        },
                        {
                            "type": "StreetNumber",
                            "value": "26"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70180"
                        },
                        {
                            "type": "Street",
                            "value": "Neue Weinsteige"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.76369,
                        "lng": 9.17867
                    }
                },
                "startPosition": {
                    "latitude": 48.763755,
                    "longitude": 9.17892
                },
                "startOdometer": 69829000.0,
                "endTimestamp": "2020-11-21T22:48:43.448Z",
                "endAddress": {
                    "formattedAddress": "Neue Weinsteige 26, 70180 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Süd"
                        },
                        {
                            "type": "StreetNumber",
                            "value": "26"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70180"
                        },
                        {
                            "type": "Street",
                            "value": "Neue Weinsteige"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.76369,
                        "lng": 9.17867
                    }
                },
                "endPosition": {
                    "latitude": 48.763755,
                    "longitude": 9.17892
                },
                "endOdometer": 69829000.0,
                "attributes": [
                    {
                        "key": "distance",
                        "value": "0.0"
                    },
                    {
                        "key": "averageFuelConsumption",
                        "value": "7.3"
                    },
                    {
                        "key": "averageSpeed",
                        "value": "0.0"
                    },
                    {
                        "key": "totalEcoScore",
                        "value": "69.0"
                    }
                ]
            },
            {
                "identifier": "F4810839149E41B3B143F8E66D35E40B",
                "type": "SINGLE",
                "platformDriveSessionIdentifier": "EECA4CC0359F4ECFA53DB01D800FCEA7",
                "platformVehicleIdentifier": "9A58E8FBC0CF850A240A1A11B6C1ADF2",
                "platformDriverIdentifier": null,
                "name": null,
                "description": null,
                "purpose": "BUSINESS",
                "startTimestamp": "2020-11-21T12:47:05.213Z",
                "startAddress": {
                    "formattedAddress": "L1110, 74321 Bietigheim-Bissingen, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Bietigheim-Bissingen"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "PostalCode",
                            "value": "74321"
                        },
                        {
                            "type": "Street",
                            "value": "L1110"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Ludwigsburg"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.9477985,
                        "lng": 9.109809
                    }
                },
                "startPosition": {
                    "latitude": 48.947806,
                    "longitude": 9.109782
                },
                "startOdometer": 69723000.0,
                "endTimestamp": "2020-11-21T13:33:08.322Z",
                "endAddress": {
                    "formattedAddress": "Neue Weinsteige 26, 70180 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Süd"
                        },
                        {
                            "type": "StreetNumber",
                            "value": "26"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70180"
                        },
                        {
                            "type": "Street",
                            "value": "Neue Weinsteige"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.76369,
                        "lng": 9.17867
                    }
                },
                "endPosition": {
                    "latitude": 48.763755,
                    "longitude": 9.17892
                },
                "endOdometer": 69723000.0,
                "attributes": [
                    {
                        "key": "distance",
                        "value": "0.0"
                    },
                    {
                        "key": "averageFuelConsumption",
                        "value": "10.1"
                    },
                    {
                        "key": "averageSpeed",
                        "value": "0.0"
                    },
                    {
                        "key": "totalEcoScore",
                        "value": "69.0"
                    }
                ]
            },
            {
                "identifier": "DEDDA6568F7244E9B49E7691FB8E5FD3",
                "type": "SINGLE",
                "platformDriveSessionIdentifier": "DC1118252AE64E3AA85ACC6CBF4362E4",
                "platformVehicleIdentifier": "9A58E8FBC0CF850A240A1A11B6C1ADF2",
                "platformDriverIdentifier": null,
                "name": null,
                "description": null,
                "purpose": "BUSINESS",
                "startTimestamp": "2020-11-20T20:27:41.091Z",
                "startAddress": {
                    "formattedAddress": "Olgastraße 102, 70180 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Süd"
                        },
                        {
                            "type": "StreetNumber",
                            "value": "102"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70180"
                        },
                        {
                            "type": "Street",
                            "value": "Olgastraße"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.76809,
                        "lng": 9.17917
                    }
                },
                "startPosition": {
                    "latitude": 48.76805,
                    "longitude": 9.17931
                },
                "startOdometer": 69617000.0,
                "endTimestamp": "2020-11-20T21:10:27.203Z",
                "endAddress": {
                    "formattedAddress": "L1110, 74321 Bietigheim-Bissingen, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Bietigheim-Bissingen"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "PostalCode",
                            "value": "74321"
                        },
                        {
                            "type": "Street",
                            "value": "L1110"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Ludwigsburg"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.9477985,
                        "lng": 9.109809
                    }
                },
                "endPosition": {
                    "latitude": 48.947806,
                    "longitude": 9.109782
                },
                "endOdometer": 69617000.0,
                "attributes": [
                    {
                        "key": "distance",
                        "value": "0.0"
                    },
                    {
                        "key": "averageFuelConsumption",
                        "value": "10.5"
                    },
                    {
                        "key": "averageSpeed",
                        "value": "0.0"
                    },
                    {
                        "key": "totalEcoScore",
                        "value": "69.0"
                    }
                ]
            },
            {
                "identifier": "2D2F204A6668486C87A0592FC254F59E",
                "type": "SINGLE",
                "platformDriveSessionIdentifier": "4ABB7BE69907428F93645F65A26A1989",
                "platformVehicleIdentifier": "9A58E8FBC0CF850A240A1A11B6C1ADF2",
                "platformDriverIdentifier": null,
                "name": null,
                "description": null,
                "purpose": "BUSINESS",
                "startTimestamp": "2020-11-20T16:44:29.280Z",
                "startAddress": {
                    "formattedAddress": "Neue Weinsteige 26, 70180 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Süd"
                        },
                        {
                            "type": "StreetNumber",
                            "value": "26"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70180"
                        },
                        {
                            "type": "Street",
                            "value": "Neue Weinsteige"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.76369,
                        "lng": 9.17867
                    }
                },
                "startPosition": {
                    "latitude": 48.763755,
                    "longitude": 9.17892
                },
                "startOdometer": 57232000.0,
                "endTimestamp": "2020-11-20T16:47:56.289Z",
                "endAddress": {
                    "formattedAddress": "Olgastraße 102, 70180 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Süd"
                        },
                        {
                            "type": "StreetNumber",
                            "value": "102"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70180"
                        },
                        {
                            "type": "Street",
                            "value": "Olgastraße"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.76809,
                        "lng": 9.17917
                    }
                },
                "endPosition": {
                    "latitude": 48.76805,
                    "longitude": 9.17931
                },
                "endOdometer": 57232000.0,
                "attributes": [
                    {
                        "key": "distance",
                        "value": "0.0"
                    },
                    {
                        "key": "averageFuelConsumption",
                        "value": "9.7"
                    },
                    {
                        "key": "averageSpeed",
                        "value": "0.0"
                    },
                    {
                        "key": "totalEcoScore",
                        "value": "27.0"
                    }
                ]
            },
            {
                "identifier": "2E643AC9CC4348F39D001B4FC7ECF1BC",
                "type": "SINGLE",
                "platformDriveSessionIdentifier": "30F51E6A8B3E4A2FBADE49BAB1103000",
                "platformVehicleIdentifier": "9A58E8FBC0CF850A240A1A11B6C1ADF2",
                "platformDriverIdentifier": null,
                "name": null,
                "description": null,
                "purpose": "BUSINESS",
                "startTimestamp": "2020-11-20T01:53:28.052Z",
                "startAddress": {
                    "formattedAddress": "Neue Weinsteige 26, 70180 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Süd"
                        },
                        {
                            "type": "StreetNumber",
                            "value": "26"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70180"
                        },
                        {
                            "type": "Street",
                            "value": "Neue Weinsteige"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.76369,
                        "lng": 9.17867
                    }
                },
                "startPosition": {
                    "latitude": 48.763755,
                    "longitude": 9.17892
                },
                "startOdometer": 57123000.0,
                "endTimestamp": "2020-11-20T02:39:31.276Z",
                "endAddress": {
                    "formattedAddress": "Neue Weinsteige 26, 70180 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Süd"
                        },
                        {
                            "type": "StreetNumber",
                            "value": "26"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70180"
                        },
                        {
                            "type": "Street",
                            "value": "Neue Weinsteige"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.76369,
                        "lng": 9.17867
                    }
                },
                "endPosition": {
                    "latitude": 48.763755,
                    "longitude": 9.17892
                },
                "endOdometer": 57229000.0,
                "attributes": [
                    {
                        "key": "distance",
                        "value": "106000.0"
                    },
                    {
                        "key": "averageFuelConsumption",
                        "value": "5.9"
                    },
                    {
                        "key": "averageSpeed",
                        "value": "138.8925"
                    },
                    {
                        "key": "totalEcoScore",
                        "value": "27.0"
                    }
                ]
            },
            {
                "identifier": "3952E7748A094BE5ABE5FA52B5AA1CAA",
                "type": "SINGLE",
                "platformDriveSessionIdentifier": "9D81442094A84090817B5320A846A640",
                "platformVehicleIdentifier": "9A58E8FBC0CF850A240A1A11B6C1ADF2",
                "platformDriverIdentifier": null,
                "name": null,
                "description": null,
                "purpose": "BUSINESS",
                "startTimestamp": "2020-11-19T05:31:42.171Z",
                "startAddress": {
                    "formattedAddress": "Neue Weinsteige 26, 70180 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Süd"
                        },
                        {
                            "type": "StreetNumber",
                            "value": "26"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70180"
                        },
                        {
                            "type": "Street",
                            "value": "Neue Weinsteige"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.76369,
                        "lng": 9.17867
                    }
                },
                "startPosition": {
                    "latitude": 48.763755,
                    "longitude": 9.17892
                },
                "startOdometer": 51300000.0,
                "endTimestamp": "2020-11-19T06:25:02.350Z",
                "endAddress": {
                    "formattedAddress": "Neue Weinsteige 26, 70180 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Süd"
                        },
                        {
                            "type": "StreetNumber",
                            "value": "26"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70180"
                        },
                        {
                            "type": "Street",
                            "value": "Neue Weinsteige"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.76369,
                        "lng": 9.17867
                    }
                },
                "endPosition": {
                    "latitude": 48.763755,
                    "longitude": 9.17892
                },
                "endOdometer": 51300000.0,
                "attributes": [
                    {
                        "key": "distance",
                        "value": "0.0"
                    },
                    {
                        "key": "averageFuelConsumption",
                        "value": "10.2"
                    },
                    {
                        "key": "averageSpeed",
                        "value": "0.0"
                    },
                    {
                        "key": "totalEcoScore",
                        "value": "58.0"
                    }
                ]
            },
            {
                "identifier": "03070B56AA804076B0D4B01198050E68",
                "type": "SINGLE",
                "platformDriveSessionIdentifier": "95B870F6D8874CD09D3E18ED514CEC81",
                "platformVehicleIdentifier": "9A58E8FBC0CF850A240A1A11B6C1ADF2",
                "platformDriverIdentifier": null,
                "name": null,
                "description": null,
                "purpose": "BUSINESS",
                "startTimestamp": "2020-11-18T16:41:06.828Z",
                "startAddress": {
                    "formattedAddress": "Neue Weinsteige 26, 70180 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Süd"
                        },
                        {
                            "type": "StreetNumber",
                            "value": "26"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70180"
                        },
                        {
                            "type": "Street",
                            "value": "Neue Weinsteige"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.76369,
                        "lng": 9.17867
                    }
                },
                "startPosition": {
                    "latitude": 48.763755,
                    "longitude": 9.17892
                },
                "startOdometer": 51104000.0,
                "endTimestamp": "2020-11-18T17:34:27.160Z",
                "endAddress": {
                    "formattedAddress": "Neue Weinsteige 26, 70180 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Süd"
                        },
                        {
                            "type": "StreetNumber",
                            "value": "26"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70180"
                        },
                        {
                            "type": "Street",
                            "value": "Neue Weinsteige"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.76369,
                        "lng": 9.17867
                    }
                },
                "endPosition": {
                    "latitude": 48.763755,
                    "longitude": 9.17892
                },
                "endOdometer": 51202000.0,
                "attributes": [
                    {
                        "key": "distance",
                        "value": "98000.0"
                    },
                    {
                        "key": "averageFuelConsumption",
                        "value": "9.5"
                    },
                    {
                        "key": "averageSpeed",
                        "value": "109.2375"
                    },
                    {
                        "key": "totalEcoScore",
                        "value": "58.0"
                    }
                ]
            },
            {
                "identifier": "FA1ACF6A4B184D8691A7E217073B053C",
                "type": "SINGLE",
                "platformDriveSessionIdentifier": "D1FD3DACD0224D51B2B450E37A6CAE61",
                "platformVehicleIdentifier": "9A58E8FBC0CF850A240A1A11B6C1ADF2",
                "platformDriverIdentifier": null,
                "name": null,
                "description": null,
                "purpose": "BUSINESS",
                "startTimestamp": "2020-11-18T10:13:59.897Z",
                "startAddress": {
                    "formattedAddress": "Brombeerweg, 70619 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Sillenbuch"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70619"
                        },
                        {
                            "type": "Street",
                            "value": "Brombeerweg"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.7501515,
                        "lng": 9.2110326
                    }
                },
                "startPosition": {
                    "latitude": 48.750157,
                    "longitude": 9.211071
                },
                "startOdometer": 10970000.0,
                "endTimestamp": "2020-11-18T11:00:03.083Z",
                "endAddress": {
                    "formattedAddress": "Neue Weinsteige 26, 70180 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Süd"
                        },
                        {
                            "type": "StreetNumber",
                            "value": "26"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70180"
                        },
                        {
                            "type": "Street",
                            "value": "Neue Weinsteige"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.76369,
                        "lng": 9.17867
                    }
                },
                "endPosition": {
                    "latitude": 48.763755,
                    "longitude": 9.17892
                },
                "endOdometer": 10970000.0,
                "attributes": [
                    {
                        "key": "distance",
                        "value": "0.0"
                    },
                    {
                        "key": "averageFuelConsumption",
                        "value": "11.0"
                    },
                    {
                        "key": "averageSpeed",
                        "value": "0.0"
                    },
                    {
                        "key": "totalEcoScore",
                        "value": "80.0"
                    }
                ]
            },
            {
                "identifier": "C45530FE43FC4B50A7BA8545E7D64355",
                "type": "SINGLE",
                "platformDriveSessionIdentifier": "911BB0F2EDD847ADA0B310BFC31A54C8",
                "platformVehicleIdentifier": "9A58E8FBC0CF850A240A1A11B6C1ADF2",
                "platformDriverIdentifier": null,
                "name": null,
                "description": null,
                "purpose": "BUSINESS",
                "startTimestamp": "2020-11-17T22:15:28.838Z",
                "startAddress": {
                    "formattedAddress": "L1110, 74321 Bietigheim-Bissingen, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Bietigheim-Bissingen"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "PostalCode",
                            "value": "74321"
                        },
                        {
                            "type": "Street",
                            "value": "L1110"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Ludwigsburg"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.9477985,
                        "lng": 9.109809
                    }
                },
                "startPosition": {
                    "latitude": 48.947806,
                    "longitude": 9.109782
                },
                "startOdometer": 10864000.0,
                "endTimestamp": "2020-11-17T22:32:06.886Z",
                "endAddress": {
                    "formattedAddress": "Brombeerweg, 70619 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Sillenbuch"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70619"
                        },
                        {
                            "type": "Street",
                            "value": "Brombeerweg"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.7501515,
                        "lng": 9.2110326
                    }
                },
                "endPosition": {
                    "latitude": 48.750157,
                    "longitude": 9.211071
                },
                "endOdometer": 10864000.0,
                "attributes": [
                    {
                        "key": "distance",
                        "value": "0.0"
                    },
                    {
                        "key": "averageFuelConsumption",
                        "value": "11.3"
                    },
                    {
                        "key": "averageSpeed",
                        "value": "0.0"
                    },
                    {
                        "key": "totalEcoScore",
                        "value": "80.0"
                    }
                ]
            },
            {
                "identifier": "27379DBE26F946B7B8431D224891A873",
                "type": "SINGLE",
                "platformDriveSessionIdentifier": "5734A42A53C94FA488C4B8B92DCAE304",
                "platformVehicleIdentifier": "9A58E8FBC0CF850A240A1A11B6C1ADF2",
                "platformDriverIdentifier": null,
                "name": null,
                "description": null,
                "purpose": "BUSINESS",
                "startTimestamp": "2020-11-17T18:36:22.662Z",
                "startAddress": {
                    "formattedAddress": "Neue Weinsteige 26, 70180 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Süd"
                        },
                        {
                            "type": "StreetNumber",
                            "value": "26"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70180"
                        },
                        {
                            "type": "Street",
                            "value": "Neue Weinsteige"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.76369,
                        "lng": 9.17867
                    }
                },
                "startPosition": {
                    "latitude": 48.763755,
                    "longitude": 9.17892
                },
                "startOdometer": 10784000.0,
                "endTimestamp": "2020-11-17T19:19:08.832Z",
                "endAddress": {
                    "formattedAddress": "L1110, 74321 Bietigheim-Bissingen, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Bietigheim-Bissingen"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "PostalCode",
                            "value": "74321"
                        },
                        {
                            "type": "Street",
                            "value": "L1110"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Ludwigsburg"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.9477985,
                        "lng": 9.109809
                    }
                },
                "endPosition": {
                    "latitude": 48.947806,
                    "longitude": 9.109782
                },
                "endOdometer": 10838000.0,
                "attributes": [
                    {
                        "key": "distance",
                        "value": "54000.0"
                    },
                    {
                        "key": "averageFuelConsumption",
                        "value": "9.6"
                    },
                    {
                        "key": "averageSpeed",
                        "value": "75.7599"
                    },
                    {
                        "key": "totalEcoScore",
                        "value": "80.0"
                    }
                ]
            },
            {
                "identifier": "1BA03EB1216E4AA7B13E11F6FF030AEA",
                "type": "SINGLE",
                "platformDriveSessionIdentifier": "ECC95245F8F44364A007A25A4CC64487",
                "platformVehicleIdentifier": "9A58E8FBC0CF850A240A1A11B6C1ADF2",
                "platformDriverIdentifier": null,
                "name": null,
                "description": null,
                "purpose": "BUSINESS",
                "startTimestamp": "2020-11-17T05:11:10.371Z",
                "startAddress": {
                    "formattedAddress": "Mittlere Filderstraße, 70619 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Degerloch"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70619"
                        },
                        {
                            "type": "Street",
                            "value": "Mittlere Filderstraße"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.744743,
                        "lng": 9.1998542
                    }
                },
                "startPosition": {
                    "latitude": 48.74475,
                    "longitude": 9.19987
                },
                "startOdometer": 6485000.0,
                "endTimestamp": "2020-11-17T05:57:13.504Z",
                "endAddress": {
                    "formattedAddress": "Neue Weinsteige 26, 70180 Stuttgart, Deutschland",
                    "addressComponents": [
                        {
                            "type": "City",
                            "value": "Stuttgart"
                        },
                        {
                            "type": "CountryShortName",
                            "value": "DE"
                        },
                        {
                            "type": "District",
                            "value": "Süd"
                        },
                        {
                            "type": "StreetNumber",
                            "value": "26"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70180"
                        },
                        {
                            "type": "Street",
                            "value": "Neue Weinsteige"
                        },
                        {
                            "type": "Country",
                            "value": "Deutschland"
                        },
                        {
                            "type": "State/Province",
                            "value": "Baden-Württemberg"
                        },
                        {
                            "type": "County",
                            "value": "Stuttgart"
                        }
                    ],
                    "coordinate": {
                        "lat": 48.76369,
                        "lng": 9.17867
                    }
                },
                "endPosition": {
                    "latitude": 48.763755,
                    "longitude": 9.17892
                },
                "endOdometer": 6591000.0,
                "attributes": [
                    {
                        "key": "distance",
                        "value": "106000.0"
                    },
                    {
                        "key": "averageFuelConsumption",
                        "value": "11.6"
                    },
                    {
                        "key": "averageSpeed",
                        "value": "138.8925"
                    },
                    {
                        "key": "totalEcoScore",
                        "value": "70.0"
                    }
                ]
            }
        ]
    }
    @observable distance = this.dummyData.tripSummaries[0].attributes[0];
    @observable avgFuelConsumption = this.dummyData.tripSummaries[0].attributes[1];
    @observable avgSpeed = this.dummyData.tripSummaries[0].attributes[2];
    @observable ecoScore = this.dummyData.tripSummaries[0].attributes[3];
}

export default DrivingData;