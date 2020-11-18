import { observable } from 'mobx'
/*state management store for driving data*/
export default class DrivingData {

    @observable  dummyData={ "tripSummaries": [
            {
                "identifier": "F305A23D8F6D4D3198C818F4E6168600",
                "type": "SINGLE",
                "platformDriveSessionIdentifier": "9A6E80E6F8204658A3A5C96D5242FCDC",
                "platformVehicleIdentifier": "DEBBFB19986A06294B7AD485716B4461",
                "platformDriverIdentifier": null,
                "name": null,
                "description": null,
                "purpose": "BUSINESS",
                "startTimestamp": "2020-02-03T23:49:51.368Z",
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
                "startOdometer": 21121000.0,
                "endTimestamp": "2020-02-04T00:09:54.435Z",
                "endAddress": {
                    "formattedAddress": "Cannstatter Straße, 70190 Stuttgart, Deutschland",
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
                            "value": "Ost"
                        },
                        {
                            "type": "PostalCode",
                            "value": "70190"
                        },
                        {
                            "type": "Street",
                            "value": "Cannstatter Straße"
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
                        "lat": 48.7923057,
                        "lng": 9.1971888
                    }
                },
                "endPosition": {
                    "latitude": 48.79232,
                    "longitude": 9.19718
                },
                "endOdometer": 21164000.0,
                "attributes": [
                    {
                        "key": "distance",
                        "value": "43000.0"
                    },
                    {
                        "key": "averageFuelConsumption",
                        "value": "9.8"
                    },
                    {
                        "key": "averageSpeed",
                        "value": "128.6783"
                    },
                    {
                        "key": "totalEcoScore",
                        "value": "89.0"
                    }
                ]
            },
        ]
    }
    @observable distance = this.dummyData.tripSummaries[0].attributes[0];
   @observable avgFuelConsumption = this.dummyData.tripSummaries[0].attributes[1];
    @observable avgSpeed = this.dummyData.tripSummaries[0].attributes[2];
    @observable ecoScore = this.dummyData.tripSummaries[0].attributes[3];
}