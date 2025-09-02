const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const inputContainer = document.getElementById("input-container");

let playerName = "DQ"; // default override
let step = 0;

// Typewriter effect for text
function typeText(text, callback) {
  questionEl.innerHTML = "";
  let i = 0;
  let interval = setInterval(() => {
    questionEl.innerHTML += text[i];
    i++;
    if (i === text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 50); // speed of typing
}

// Load next step
function loadStep() {
  optionsEl.innerHTML = "";
  inputContainer.innerHTML = "";

  if (step === 0) {
    typeText("What is your name?", () => {
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Enter your name";
      inputContainer.appendChild(input);

      const btn = document.createElement("button");
      btn.textContent = "Submit";
      btn.onclick = () => {
        playerName = input.value || "DQ";
        step++;
        loadStep();
      };
      inputContainer.appendChild(btn);
    });
  }

  else if (step === 1) {
    typeText(`The name you entered is DQ, is that correct?`, () => {
      ["Yes", "No"].forEach(answer => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => {
          step++;
          loadStep();
        };
        optionsEl.appendChild(btn);
      });
    });
  }

  else if (step === 2) {
    typeText(`Welcome to your first day of school DQ`, () => {
      setTimeout(() => {
        step++;
        loadStep();
      }, 2000);
    });
  }

  else if (step === 3) {
    typeText("What is the only right option for a beverage at school?", () => {
      const answers = ["A: Tea", "B: Coffee", "C: Milk", "D: Beer"];
      answers.forEach(ans => {
        const btn = document.createElement("button");
        btn.textContent = ans;
        btn.onclick = () => {
          if (ans.startsWith("C")) {
            typeText("No wonder they call you DQ", () => {
              step++;
              setTimeout(loadStep, 2000);
            });
          } else {
            typeText("You know that’s not the right answer", () => {
              step++;
              setTimeout(loadStep, 2000);
            });
          }
        };
        optionsEl.appendChild(btn);
      });
    });
  }

  else if (step === 4) {
    typeText("If someone offers you drugs do you accept them?", () => {
      ["A: Yes", "B: No"].forEach(ans => {
        const btn = document.createElement("button");
        btn.textContent = ans;
        btn.onclick = () => {
          if (ans.startsWith("B")) {
            typeText("Good girl", () => {
              step++;
              setTimeout(loadStep, 2000);
            });
          } else {
            typeText("Smarten up missy", () => {
              step++;
              setTimeout(loadStep, 2000);
            });
          }
        };
        optionsEl.appendChild(btn);
      });
    });
  }

  else if (step === 5) {
    typeText("Who’s the smartest, coolest, prettiest person (after the creator of this quiz)?", () => {
      const btn = document.createElement("button");
      btn.textContent = "A: DQ aka egghead";
      btn.onclick = () => {
        typeText("Correct! 🎉 Quiz Complete.", null);
      };
      optionsEl.appendChild(btn);
    });
  }
}

// Start quiz
loadStep();