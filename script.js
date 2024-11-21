const inputEl = document.getElementById("user-input");
const outputEl = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const validateInputUS = (input) => {
  const acceptedValues = /^1?[ ]?(\(\d{3}\)|\d{3})[ -]?\d{3}[ -]?\d{4}$/;
  return acceptedValues.test(input.value.trim());
};

const renderOutput = (num) => {
  outputEl.textContent = num
    ? "Valid US number: " + inputEl.value.trim()
    : "Invalid US number: " + inputEl.value.trim();
};

inputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter")
    if (inputEl.value.trim()) {
      renderOutput(validateInputUS(inputEl));
    } else {
      alert("Please provide a phone number"); //As per instruction
    }
});

checkBtn.addEventListener("click", () => {
  if (inputEl.value.trim()) {
    renderOutput(validateInputUS(inputEl));
  } else {
    alert("Please provide a phone number"); //As per instruction
  }
});

const clearOutput = () => (outputEl.innerHTML = "");

clearBtn.addEventListener("click", clearOutput);
