// Buy ticket button enable
const buyTicketButton = document.getElementById('buy-ticket-button');
const ticketSelectDiv = document.getElementById('ticket-select');

buyTicketButton.addEventListener('click', () => {
    ticketSelectDiv.scrollIntoView({ behavior: 'smooth' });
});

// Get references to the seat buttons
const seatButtons = document.querySelectorAll('.seat');

// Get references to the selected seat information
const selectedSeatElement = document.getElementById('selected-seat');
const selectedClassElement = document.getElementById('selected-class');
const selectedPriceElement = document.getElementById('selected-price');

// Get reference to the selected seats list container
const selectedSeatsListContainer = document.getElementById('selected-seats-list');

// Initialize the count of available seats
let availableSeats = 40; // Total available seats

// Maximum seats that can be selected
const maxSeatsAllowed = 4;

// Array to store selected seats
const selectedSeats = [];

// Add event listener to each seat button
seatButtons.forEach(seatButton => {
    seatButton.addEventListener('click', () => {
        if (selectedSeats.length < maxSeatsAllowed || seatButton.classList.contains('selected')) {
            seatButton.classList.toggle('selected'); // Toggle selected class
            updateSelectedSeatInfo();
        } else {
            alert("You can only select up to 4 seats.");
        }
    });
});

// Function to update selected seat information
function updateSelectedSeatInfo() {
    // Get the current total price and grand total
    let totalPrice = parseInt(document.getElementById('total-price').textContent);
    let grandTotal = parseInt(document.getElementById('grand-total').textContent);

    // Clear selected seats array
    selectedSeats.length = 0;

    // Iterate over each seat button
    seatButtons.forEach(seatButton => {
        if (seatButton.classList.contains('selected')) {
            // If the seat is selected, add its text content to the selected seats array
            selectedSeats.push(seatButton.textContent);
        }
    });

    // Update total price and grand total by adding 500 for each selected seat
    const seatsSelected = selectedSeats.length;
    const seatsPriceIncrease = seatsSelected * 500;
    totalPrice += seatsPriceIncrease;
    grandTotal += seatsPriceIncrease;

    // Clear previous selected seats list
    selectedSeatsListContainer.innerHTML = '';

    // Display selected seats with "Economic" and "500" beside each seat with gaps
    selectedSeats.forEach(seat => {
        const seatLine = document.createElement('div');
        seatLine.textContent = seat;
        const economicText = document.createElement('span');
        economicText.textContent = ' Economic 500';
        seatLine.appendChild(economicText);
        selectedSeatsListContainer.appendChild(seatLine);
    });

    // Update total price label
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = totalPrice;

    // Update grand total label
    const grandTotalElement = document.getElementById('grand-total');
    grandTotalElement.textContent = grandTotal;
}



