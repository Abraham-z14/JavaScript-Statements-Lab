//Variables
const temperature = 90
const timeOfDay = "morning"
let soilMoisture = 40

//temperature
if (temperature > 80){
  console.log("Watering on")
}else{
  console.log("watering off")
}

//timeOfDay
if (timeOfDay === "evening"){
  console.log("lights on")
}else if (timeOfDay ==="night" ){
  console.log("lights on")
}else{
  console.log("lights off")
}

//soilMoisture
while (soilMoisture > 5){
  console.log("moisture levels", + soilMoisture)
  soilMoisture--
}