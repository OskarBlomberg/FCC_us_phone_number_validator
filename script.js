const inputEl = document.getElementById("user-input");
const outputEl = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const validateInput = (inputEl) => {
  const acceptedValues = /1?[ ]?(\(?\d{3})( -)?(\d{3})( -)?(\d{4})/;
};

checkBtn.addEventListener("click", () => {
  // validateInput();
  // renderOutput();
  // clearInput();
});

clearBtn.addEventListener("click", clearOutput());

/* 
When you click on the #check-btn element without entering a value into the #user-input element, an alert should appear with the text "Please provide a phone number".
When you click on the #clear-btn element, the content within the #results-div element should be removed.
When the #user-input element contains 1 555-555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: 1 555-555-5555".
When the #user-input element contains 1 (555) 555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: 1 (555) 555-5555".
When the #user-input element contains 555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 555-5555". */

/* 1 555-555-5555
1 (555) 555-5555
1(555)555-5555
1 555 555 5555
5555555555
555-555-5555
(555)555-5555 */
