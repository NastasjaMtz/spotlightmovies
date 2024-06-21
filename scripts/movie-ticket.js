class MovieTicket {
    constructor() {
        this._init();
    }

    _init() {
        document.getElementById("movie-ticket").getElementsByClassName("button-container")[0].addEventListener("click", this._handleClick.bind(this));
    }

    _handleClick(event) {
        document.getElementById("ticket-button-ripper").classList.add("ripped");
    }
}