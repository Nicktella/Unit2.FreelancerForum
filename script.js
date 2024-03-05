// Project Setup
const names = ['Alice', 'Bob', 'Carol', 'David', 'Eva'];
const occupations = ['Writer', 'Teacher', 'Programmer', 'Designer', 'Photographer'];
const initialFreelancers = [
    { name: 'Alice', occupation: 'Writer', startingPrice: 30 },
    { name: 'Bob', occupation: 'Teacher', startingPrice: 50 }
];

// DOM
const freelancersList = document.querySelector('#freelancers-list');

// State
let freelancers = [...initialFreelancers];

// Functionality
function renderFreelancers() {
    freelancersList.innerHTML = ''; // Clear previous content
    freelancers.forEach(freelancer => {
        const freelancerElement = document.createElement('div');
        freelancerElement.classList.add('freelancer-box');
        freelancerElement.innerHTML = `<strong>${freelancer.name}</strong>, ${freelancer.occupation}, Starting Price: $${freelancer.startingPrice}`;
        freelancersList.appendChild(freelancerElement);
    });
}

function calculateAverageStartingPrice() {
    const totalStartingPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    return totalStartingPrice / freelancers.length || 0; // Avoid division by zero
}

function updateAverageStartingPrice() {
    const averageStartingPrice = calculateAverageStartingPrice();
    const averageElement = document.createElement('p');
    averageElement.classList.add('average-price');
    averageElement.textContent = `Average Starting Price: $${averageStartingPrice.toFixed(2)}`;
    freelancersList.appendChild(averageElement);
}

function generateRandomFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomStartingPrice = Math.floor(Math.random() * 100) + 1; // Random price between 1 and 100
    return { name: randomName, occupation: randomOccupation, startingPrice: randomStartingPrice };
}

function addNewFreelancer() {
    const newFreelancer = generateRandomFreelancer();
    freelancers.push(newFreelancer);
    renderFreelancers();
    updateAverageStartingPrice();
}

// Initial rendering
renderFreelancers();
updateAverageStartingPrice();

// Interval to add new freelancer every 3 seconds (3000 milliseconds)
setInterval(addNewFreelancer, 3000);

