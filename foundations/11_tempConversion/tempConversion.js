const convertToCelsius = function(fahrenheit) {
    let celsius = ((fahrenheit - 32) / (1.8));
    return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = ((celsius * 1.8) + 32);
  return Number(fahrenheit.toFixed(1));
};

// const convertToCelsius = f => Number(((f - 32) / 1.8).toFixed(1))
// const convertToFahrenheit = c => Number(((c * 1.8) + 32).toFixed(1)) // other solution, inline

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
