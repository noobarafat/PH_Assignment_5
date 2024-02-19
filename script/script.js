// Buy ticket button enable
const buyTicketButton = document.getElementById('buy-ticket-button');

const ticketSelectDiv = document.getElementById('ticket-select');

buyTicketButton.addEventListener('click', function () {
    ticketSelectDiv.scrollIntoView({ behavior: 'smooth' });
});




// Get references to the seat buttons
const seatButtons = document.querySelectorAll('.seat');

// Get reference to the seats left count span
const seatsLeftCountSpan = document.getElementById('seats-left-count');

// Initialize the count of available seats
let availableSeats = 40;

// Add event listener to each seat button
seatButtons.forEach(seatButton => {
    seatButton.addEventListener('click', () => {
        // Check if the seat is already selected
        if (!seatButton.classList.contains('selected')) {
            // If not selected, select the seat
            seatButton.classList.add('selected');
            // Decrease available seat count
            availableSeats--;
            // Update the display of available seats
            seatsLeftCountSpan.textContent = availableSeats;
        } else {
            // If already selected, deselect the seat
            seatButton.classList.remove('selected');
            // Increase available seat count
            availableSeats++;
            // Update the display of available seats
            seatsLeftCountSpan.textContent = availableSeats;
        }
    });
});
