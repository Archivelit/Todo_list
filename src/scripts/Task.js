export class Task {
    constructor(title, description, id = Date.now()) {
        if (title.trim() === '') {
            this.title = id
        } else {
            this.title = title;
        }
        this.description = description;
        this.id = id;
        this.isComplete = false;    
    }

    toggle() {
        this.isComplete = !this.isComplete;
    }
}