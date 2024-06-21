class Seats {
    #seatConfig = [8, 8, 10, 10, 12, 12];
    #seatsContainer = document.getElementById("seats").getElementsByClassName("seats-container")[0];
    #selectedSeats = [];

    constructor() {
        this._init();
    }

    _init() {
        this._constructSeats();
    }

    _constructSeats() {
        this.#seatConfig.forEach((seatsInRow, rowIndex) => {
            this.#seatsContainer.appendChild(this._constructRow(rowIndex, seatsInRow));
        });
        console.log(this.#seatsContainer);
    }

    _constructRow(rowIndex, seatsInRow) {
        const row = createElement("div", "row");
        Array.apply(null, Array(seatsInRow)).map((_, i) => {
            row.appendChild(this._constructSeat(rowIndex, i));
        });
        return row;
    }

    _constructSeat(rowIndex, seatIndex) {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const seat = createElement("div", "seat");
        seat.dataset.seat = `${alphabet.charAt(rowIndex)}${seatIndex + 1}`;
        seat.addEventListener("click", () => {
            this._handleSeatClick(seat);
        });
        return seat;
    }

    _handleSeatClick(seat) {
        if (seat.classList.contains("active")) {
            seat.classList.remove("active");
            this.#selectedSeats.splice(this.#selectedSeats.indexOf(seat.dataset.seat), 1);
        } else {
            seat.classList.add("active");
            this.#selectedSeats.push(seat.dataset.seat);
        }
        const seatSelectionScreen = document.getElementById("seats-selection").getElementsByClassName("seat-selection-screen")[0];
        seatSelectionScreen.innerHTML = this.#selectedSeats.sort().join(", ");

        const helperText = document.getElementById("seat-helper-text");
        console.log(helperText);
        helperText.style.display = this.#selectedSeats.length ? "block" : "none";
    }
}