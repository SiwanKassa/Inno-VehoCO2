import DrivingDataStore from './drivingEmissionDataStore.js'

export default class RootStore {
    constructor() {
        this.drivingDataStore = new DrivingDataStore()
    }
}