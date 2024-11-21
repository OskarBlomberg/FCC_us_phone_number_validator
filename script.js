const inputEl = document.getElementById("user-input");
const outputEl = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const validateInputUS = (input) => {
  const acceptedValues = /1?[ ]?(\(?\d{3})\)?( -)?(\d{3})( -)?(\d{4})/;
  return acceptedValues.test(input.value.trim());
};

const renderOutput = (num) => {
  outputEl.textContent = num
    ? "Valid US number: " + inputEl.value
    : "Invalid US number: " + inputEl.value;
};

const clearInput = (input) => (input.value = "");

checkBtn.addEventListener("click", () => {
  if (inputEl.value.trim()) {
    renderOutput(validateInputUS(inputEl));
    clearInput(inputEl);
  } else {
    alert("Please provide a phone number");
  }
});

const clearOutput = () => (outputEl.innerHTML = "");

clearBtn.addEventListener("click", clearOutput);
