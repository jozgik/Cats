class Card {
    constructor(dataCat, selectorTemplate) {
        this._dataCat = dataCat;
        this.selectorTemplate = selectorTemplate;
    }

    _getTemplate() { // возвращает содержимое шаблона в виде DOM узла
        return document.querySelector(this.selectorTemplate).content.querySelector('.card');
    
    }

    getElement() {
        this.element = this._getTemplate().cloneNode(true); // клонируем полученное содержимое из шаблона
        this.cardTitle = this.element.querySelector('.card__name');
        this.cardImage = this.element.querySelector('.card__image');
        this.cardLike = this.element.querySelector('.card__like');
        // console.log(this._dataCat);
        this.cardTitle.textContent = this._dataCat.name;
        this.cardImage.src = this._dataCat.img_link;


        if (this._dataCat.favourite) {
            this.cardLike.classList.toggle('card__like_active')
            // cardLike.remove() можно в элс чтоб удалить серые лайки
        }

        // this.setEventListener()

        return this.element
    }

    setElement() {

    }
    
}

