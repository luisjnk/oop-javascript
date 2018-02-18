class Negociation {

    constructor(date, qtty, value) {
        this._date = new Date(date.getTime());
        this._qtty = qtty;
        this._value = value;

        Object.freeze(this);
    }

    get Size() {
        return this._value * this._qtty;
    }

    get date(){
        return new Date(this._date.getTime());
    }

    get value(){
        return this._value;
    }

    get quantity(){
        return this._qtty;
    }
}