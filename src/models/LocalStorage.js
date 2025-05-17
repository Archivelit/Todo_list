export class StorageWrapper {
    constructor() {
        try {
            this.storage = window.localStorage;
        } catch(error){
            console.error(error);
        }
    }

    get(key) {
        try {
            return JSON.parse(this.storage.getItem(key));
        } catch (error){
            console.log(error);
        }
    }

    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    }

    remove(key) {
        try {
            localStorage.removeItem(key);
        } catch (error){
            console.error(error);
        }
    }

    clear() {
        localStorage.clear();
    }
}