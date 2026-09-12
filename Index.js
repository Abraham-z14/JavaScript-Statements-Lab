// Step 1
const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

// Step 2
if (temperature > 80) {
  console.log("Watering on");
} else {
  console.log("Watering off");
}

// Step 3
if (timeOfDay === "evening" || timeOfDay === "night") {
  console.log("Lights on");
} else {
  console.log("Lights off");
}

// Step 4
while (soilMoisture < 40) {
  soilMoisture += 5;
  console.log(soilMoisture);
}