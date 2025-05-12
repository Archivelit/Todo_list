import { v4 as uuidv4 } from 'uuid';

export class Task {
    constructor(title, description) {
        if (title.trim() === '') {
            this.title = new Date().toLocaleString('cs');
        } else {
            this.title = title;
        }
        this.description = description;
        this.id = uuidv4();
        this.isComplete = false;    
    }

    toggle() {
        this.isComplete = !this.isComplete;
    }
}