export class Filter {
    constructor(title, predicate) {
        this.title = title;
        this.predicate = predicate;
        this.isEnabled = false;
    }
}