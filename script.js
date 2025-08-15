document.getElementById("bmiForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const heightInput = document.getElementById("height").value.trim();
  const weightInput = document.getElementById("weight").value.trim();
  const height = parseFloat(heightInput);
  const weight = parseFloat(weightInput);
  const resultEl = document.querySelector(".result");
  const categoryEl = document.querySelector(".result_bmi");

  if (
    !height ||
    !weight ||
    height <= 0 ||
    weight <= 0 ||
    isNaN(height) ||
    isNaN(weight)
  ) {
    resultEl.textContent =
      "⚠️ Please enter valid height and weight in number format.";
    categoryEl.textContent = "";
    return;
  }

  // Convert cm to meters
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  resultEl.textContent = `✅ Your BMI is ${bmi.toFixed(2)}`;

  let category = "";
  if (bmi < 18.6) {
    category = "You are underweight.";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    category = "You have a normal weight.";
  } else {
    category = "You are overweight.";
  }

  categoryEl.textContent = category;
});