// Run the showQuote function when the page is loaded
window.onload = showQuote;

// Function to fetch and display a random quote
function showQuote() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        document.getElementById("advice-number").textContent = data.slip.id;
        document.querySelector(".advice-text").textContent = data.slip.advice;
    })
    .catch(error => {
        alert(`Error ${error}`);
    });
}

document.getElementById("dice").addEventListener("click", showQuote);
