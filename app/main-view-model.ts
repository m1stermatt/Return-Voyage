import { Observable, fromObject } from 'data/observable';
import { Label } from "ui/label";

class MainWorldModel extends Observable {

    messages: Array<string>;
    index: number = -1;

    constructor() {
        super();
        this.messages = ["hello", "how are you", "no u", "knock"];
        this.set("message", "Hello world");
    }

    tapAction() {
        this.index++;
        if (this.index >= this.messages.length) {
            this.index = 0;
        }
        this.set("message", this.get("message").text + this.messages[this.index]);
    }
}

export default MainWorldModel;