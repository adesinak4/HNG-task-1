const axios = require('axios');
require("dotenv").config();

exports.sayHello = async (req, res) => {
  const visitorName = req.query.visitor_name;

  if (!visitorName) {
    return res.status(400).json({ msg: 'Visitor\'s name is required' });
  }

  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.json(clientIp)

//   try {
//     // Get location and weather information
//     const locationResponse = await axios.get(`https://ipinfo.io/${clientIp}?token=YOUR_IPINFO_TOKEN`);
//     const location = locationResponse.data.city;

//     const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=YOUR_OPENWEATHERMAP_API_KEY`);
//     const temperature = weatherResponse.data.main.temp;

//     // Prepare response
//     const response = {
//       client_ip: clientIp,
//       location: location,
//       greeting: `Hello, ${visitorName}! The temperature is ${temperature} degrees Celsius in ${location}.`
//     };

//     res.json(response);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('An error occurred while processing your request.');
//   }
};
