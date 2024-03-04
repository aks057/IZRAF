const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

document.querySelector(".izraf").onmouseover = (event) => {
  let hiddenText = document.getElementById("input-hidden-value").value;
  let iterations = 0;

  if (!hiddenText) {
    hiddenText = "FARZI";
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

        return letters[Math.floor(Math.random() * hiddenText.length)];
      })
      .join("");

    if (iterations >= hiddenText.length) clearInterval(interval);

    iterations += 1 / 2;
  }, 25);
};

document.querySelector(".izraf").onmouseout = (event) => {
  let originalText = document.getElementById("input-original-value").value;
  let iterations = 0;

  if (!originalText) {
    originalText = "IZRAF";
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

        return letters[Math.floor(Math.random() * originalText.length)];
      })
      .join("");

    if (iterations >= originalText.length) clearInterval(interval);

    iterations += 1 / 2;
  }, 25);
};
