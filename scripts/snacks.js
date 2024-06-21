class Snacks {

    #snackConfig = {
        popcorn: "Classic Duo Menü",
        chips: "Nacho Night Combo",
        sweets: "Sommer Filmgenuss",
    }

    constructor() {
        this._init();
    }

    _init() {
        this._constructAllElements();
        this._handleSnackClick(document.getElementById("snacks-container").getElementsByClassName("snack")[0]);
    }

    _constructAllElements() {
        Array.from(document.getElementById("snacks-container").getElementsByClassName("snack")).forEach((snack) => {
            snack.addEventListener("click", this._handleSnackClick.bind(this, snack));
        });
    }

    _handleSnackClick(snack) {
        const currentDisplay = document.getElementById("snacks-container").getElementsByClassName("display snack")[0];
        const snackId = snack.dataset.snack;
        document.getElementById("snack-info").innerHTML = `<span>${this.#snackConfig[snackId]}</span>`;
        if (snack.classList.contains("display")) return;
        if (snack.classList.contains("snack-one")) {
            currentDisplay.classList.add("snack-one");
            currentDisplay.classList.remove("display");
            snack.classList.add("display");
            snack.classList.remove("snack-one");
        }
        if (snack.classList.contains("snack-two")) {
            currentDisplay.classList.add("snack-two");
            currentDisplay.classList.remove("display");
            snack.classList.add("display");
            snack.classList.remove("snack-two");
        }

    }
}