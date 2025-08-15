document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload on form submit

  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const resultEl = document.querySelector(".result");
  const categoryEl = document.querySelector(".result_bmi");

  if (!height || !weight || height <= 0 || weight <= 0 || isNaN(height)  || isNaN(weight)) {
    resultEl.textContent = "Please enter valid height and weight in number format.";
    categoryEl.textContent = "";
    return;
  }

  const bmi = weight / (height * height);
  resultEl.textContent = `Your BMI is ${bmi.toFixed(2)}`;

  let category = "";
  if (bmi < 18.6) {
    category = "You are underweight";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    category = "You have normal weight";
  } else {
    category = "You are overweight";
  }

  categoryEl.textContent = category;
});
