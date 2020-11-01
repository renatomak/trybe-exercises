const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
function sendMarsTemperature(temperatura){
    const temp = temperatura();
    setTimeout(()=> console.log(`${temp} degree Celsius`), messageDelay());
}

sendMarsTemperature(getMarsTemperature); // imprime "Mars temperature is: 20 degree Celsius", por exemplo