import DrivingDataStore from './drivingEmissionDataStore.js'
import UserData from "./userData";

export default class RootStore {
    constructor() {
        this.drivingDataStore = new DrivingDataStore();
        this.userData = new UserData();
    }
}