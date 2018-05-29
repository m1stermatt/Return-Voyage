import { Observable } from "data/observable";

class MainWorldModel extends Observable {
    counter: number;

    constructor() {
        super();

        this.counter = 42;
        this.set("message", this.counter + " taps left");
    }

    tapAction() {
        this.counter--;
        if (this.counter <= 0) {
            this.set("message", "Yay");
        }
        else {
            this.set("message", this.counter + " taps left")
        }
    }
}

export default MainWorldModel;