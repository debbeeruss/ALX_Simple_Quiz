// Function to check the user's answer
function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";

    // Get the selected answer from the radio buttons
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If no option is selected, we stop and return
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }

    // Get the user's selected answer
    const userAnswer = selectedOption.value;

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct!";
    } else {
        document.getElementById("feedback").textContent = "Wrong!";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
