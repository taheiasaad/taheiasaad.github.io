// Typing Effect
document.addEventListener("DOMContentLoaded", function () {
  const text = "I'm Taheia Saad";
  const typingElement = document.querySelector(".typing");
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 150);
    }
  }

  type();
});

