const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

document.querySelector("h1").onmouseover = (event) => {
  let hiddenText = document.getElementById("input-hidden-value").value;
  let iterations = 0;

  if (!hiddenText) {
    hiddenText = "EltonJCS";
  }
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .padEnd(hiddenText.length)
      .slice(0, hiddenText.length)
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return hiddenText[index];
        }

        return letters[Math.floor(Math.random() * 52)];
      })
      .join("");

    if (iterations >= hiddenText.length) clearInterval(interval);

    iterations += 1 / 2;
  }, 25);
};

document.querySelector("h1").onmouseout = (event) => {
  let originalText = document.getElementById("input-original-value").value;
  let iterations = 0;

  if (!originalText) {
    originalText = "HACKER_TEXT";
  }
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .padEnd(originalText.length)
      .slice(0, originalText.length)
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return originalText[index];
        }

        return letters[Math.floor(Math.random() * 52)];
      })
      .join("");

    if (iterations >= originalText.length) clearInterval(interval);

    iterations += 1 / 2;
  }, 25);
};
