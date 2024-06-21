class Critics {

    #criticsConfig = ["assets/images/Kino_Kritik_1.webp", "assets/images/Kino_Kritik_2.webp", "assets/images/Kino_Kritik_3.webp", "assets/images/Kino_Kritik_4.webp", "assets/images/Kino_Kritik_5.webp",]
    #criticsImages = [];

    constructor() {
        this._init();
    }

    _init() {
        this._constructAllElements();
    }

    _constructAllElements() {
        const criticsContainer = document.getElementById("critics-container");
        this.#criticsImages = this.#criticsConfig.reduce(this._constructCriticCard.bind(this), criticsContainer);
    }

    _constructCriticCard(container, link, index) {
        const totalSeconds = 30;
        const secondsBetweenElements = totalSeconds / (this.#criticsConfig.length ?? 1);
        const image = createElement("img", "critic-image", {src: link});
        image.style.animationDelay = `${-secondsBetweenElements * index}s`;
        image.style.animationDuration = `${totalSeconds}s`;
        container.appendChild(image);
        return container;
    }
}