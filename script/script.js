// Buy ticket button enable
const buyTicketButton = document.getElementById('buy-ticket-button');

const ticketSelectDiv = document.getElementById('ticket-select');

buyTicketButton.addEventListener('click', function () {
    ticketSelectDiv.scrollIntoView({ behavior: 'smooth' });
});




const seatButtons = document.querySelectorAll('.seat');
const seatsLeftCountSpan = document.getElementById('seats-left-count');

let availableSeats = 4;

seatButtons.forEach(function (seatButton) {
    seatButton.addEventListener('click', function () {
        if (!seatButton.classList.contains('selected')) {
            if (availableSeats > 0) {
                seatButton.classList.add('selected');
                availableSeats--;
                seatsLeftCountSpan.textContent = availableSeats;
            } else {
                alert("You can only select up to 4 seats.");
            }
        } else {
            seatButton.classList.remove('selected');
            availableSeats++;
            seatsLeftCountSpan.textContent = availableSeats;
        }
    });
});











