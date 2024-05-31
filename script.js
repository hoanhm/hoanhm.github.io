window.onload = () => {
  const textElements = document.querySelectorAll(".text");
  const targetDiv = document.querySelector("#target-div"); // Change this to the correct selector for your target div
  const rocket = document.getElementById('rocket');

  textElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      targetDiv.classList.remove("not-loaded");
      targetDiv.classList.add("loaded");
    });
  });
};
