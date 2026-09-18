const temp = document.querySelector("#temp-value");
const feel = document.querySelector("#feel-value");
const humidity = document.querySelector("#humidity-value");
const windKph = document.querySelector("#wind-kph-value");
const country = document.querySelector("#country-value");
const province = document.querySelector("#province-value");
const city = document.querySelector("#city-value");
const update = document.querySelector("#update-value");
const errorP = document.querySelector("#error");
let answer;
async function getWeather(event) {
  try {
    event.preventDefault();
    const city_input = document.querySelector("#city-input").value;
    errorP.textContent = "";
    if (city_input.trim() === "") {
      errorP.textContent = "Please enter a city!";
      errorP.style.color = "red";
      temp.innerHTML = "";
      feel.innerHTML = "";
      humidity.innerHTML = "";
      windKph.innerHTML = "";
      country.innerHTML = "";
      province.innerHTML = "";
      city.innerHTML = "";
      update.innerHTML = "";
      return;
    }
    answer = await axios(
      `https://api.weatherapi.com/v1/current.json?key=60e0a3d2f152486e950213038260606&q=${city_input}`,
    );

    temp.innerHTML = answer.data.current.temp_c + " °C";
    feel.innerHTML = answer.data.current.feelslike_c;
    humidity.innerHTML = answer.data.current.humidity;
    windKph.innerHTML = answer.data.current.wind_kph;
    country.innerHTML = answer.data.location.country;
    province.innerHTML = answer.data.location.region;
    city.innerHTML = answer.data.location.name;
    update.innerHTML = answer.data.current.last_updated;
  } catch (error) {
    // console.log(error.response.data.error.message);
    errorP.innerHTML = error.response.data.error.message;
    errorP.style.color = "red";
    temp.innerHTML = "";
    feel.innerHTML = "";
    humidity.innerHTML = "";
    windKph.innerHTML = "";
    country.innerHTML = "";
    province.innerHTML = "";
    city.innerHTML = "";
    update.innerHTML = "";
  }
}
// console.log(answer);
