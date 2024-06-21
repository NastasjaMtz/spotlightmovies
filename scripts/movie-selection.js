class MovieSelection {
    #movieCarousel = [];
    #movieConfig = [
        {
            title: "John Wick",
            genre: "Action, Thriller",
            link: "assets/images/john-wick.jpg"
        },
        {
            title: "Corpse Bride",
            genre: "Romance",
            link: "assets/images/corpse-bride.jpg"
        },
        {
            title: "Back to the future",
            genre: "Sci-Fi",
            link: "assets/images/back-to-the-future.jpg"
        },
        {
            title: "Scream",
            genre: "Horror",
            link: "assets/images/scream.jpg"
        }
    ];

    currentInd = 0;

    constructor() {
        this._init();
    }

    _init() {
        this._constructAllElements();
        this._rotateCarousel(0);
    }

    _constructAllElements() {
        const movieCarousel = document.getElementById("movie-carousel");
        this.#movieConfig.reduce((container, movie) => this._constructMovieCards(container, movie), movieCarousel);
    }

    _constructMovieCards(container, movie) {
        const movieCard = createElement("div", "movie-card");
        const movieImage = createElement("img", "movie-image", {src: movie.link});
        const movieDescription = createElement("div", "movie-description font-sans");
        const title = createElement("p", "movie-title", {innerText: movie.title});
        const genre = createElement("p", "movie-genre", {innerText: movie.genre});
        movieDescription.append(title, genre);
        movieCard.append(movieImage, movieDescription);
        movieCard.id = `movie-${this.#movieCarousel.length}`;

        movieCard.addEventListener("click", () => {
            const index = Number(movieCard.id.split("-")[1]);
            this._rotateCarousel(index);
        });

        this.#movieCarousel.push(movieCard);
        container.appendChild(movieCard);
        return container;
    }

    _rotateCarousel(newCurrentInd) {
        const [prevInd, currentInd, nextInd] = this._calculateIndex(newCurrentInd);
        this.#movieCarousel.forEach((_, index) => {
            const movie = document.getElementById(`movie-${index}`);
            movie.classList.remove("previous");
            movie.classList.remove("current");
            movie.classList.remove("next");
        });

        document.getElementById(`movie-${prevInd}`).classList.add("previous");
        document.getElementById(`movie-${currentInd}`).classList.add("current");
        document.getElementById(`movie-${nextInd}`).classList.add("next");
    }

    _calculateIndex(currentInd) {
        const moviesCnt = this.#movieConfig.length;
        const mod = (n, m) => ((n % m) + m) % m;
        const prevInd = mod(currentInd - 1, moviesCnt);
        const nextInd = mod(currentInd + 1, moviesCnt);
        return [prevInd, currentInd, nextInd];
    }
}
