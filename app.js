const flightForm = document.getElementById("flightForm");
const originInput = document.getElementById("origin");
const destinationInput = document.getElementById("destination");
const flightDataDiv = document.getElementById("flightData");

const apiKey = "82017956b7msh174fc68a9f1d658p13b768jsn2cb150dd6c2a";
const apiUrl = "https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/direct/";

flightForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const origin = originInput.value;
  const destination = destinationInput.value;

  const headers = {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
  };

  const params = {
    destination,
    origin
  };

  try {
    const response = await fetch(apiUrl, { headers, params });
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error(error);
  }
});

function displayData(data) {
  let flightData = "";
  data.data.forEach((flight) => {
    flightData += `<div>
    <p>Airline: ${flight.airline}</p>
    <p>Price: ${flight.price}</p>
    <p>Departure: ${flight.departure_at}</p>
    <p>Return: ${flight.return_at}</p>
    </div>`;
  });
  flightDataDiv.innerHTML = flightData;
}