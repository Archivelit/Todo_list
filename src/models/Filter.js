export class Filter {
    constructor(name, predicate) {
        this.name = name;
        this.predicate = predicate;
        this.isEnabled = false;
    }
}