class NegociationController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputDate = $('#date');
        this._inputQuantity = $('#qtty')
        this._inputValue = $('#value')
    }

    add(event) {
        event.preventDefault();
        let helper = new DateHelper();
        let date = helper.textForDate(this._inputDate.value);

        let negociation = new Negociation(
            date,
            this._inputQuantity.value,
            this._inputValue.value
        );

        console.log(negociation)
        console.log(helper.dateForText(negociation._date))
    }

}