const textBox = document.getElementById("textBox");
const tofahrenheit = document.getElementById("tofahrenheit");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");

function convert() {
  let temp = Number(textBox.value);

  if (isNaN(temp)) {
    result.textContent = "Please enter a valid temperature";
    result.style.backgroundColor = "transparent";
    return;
  }

  if (tofahrenheit.checked) {
    temp = (temp * 9) / 5 + 32;
    temp = Math.round(temp * 10) / 10;

    if (temp >= 65 && temp <= 75) {
      result.textContent = `${temp}°F Good Weather`;
      result.style.backgroundColor = "green";
    } else {
      result.textContent = `${temp}°F Bad Weather`;
      result.style.backgroundColor = "red";
    }
  } else if (tocelsius.checked) {
    temp = ((temp - 32) * 5) / 9;
    temp = Math.round(temp * 10) / 10;

    if (temp >= 19 && temp <= 24) {
      result.textContent = `${temp}°C Good Weather`;
      result.style.backgroundColor = "green";
    } else {
      result.textContent = `${temp}°C Bad Weather`;
      result.style.backgroundColor = "red";
    }
  } else {
    result.textContent = "Select a unit";
    result.style.backgroundColor = "transparent";
  }
}
