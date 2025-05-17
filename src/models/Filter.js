import { v4 as uuidv4} from "uuid";

export class Filter {
    constructor(title, predicate) {
        this.title = title;
        this.predicate = predicate;
        this.isEnabled = false;
        this.id = uuidv4();
    }
}