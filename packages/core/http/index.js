const axios = require('axios');
const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 2000,
  headers: {
    'X-corelation-id': +new Date(),
    'Content-Type': 'application/json'
  }
});
instance.defaults.timeout = 2500;
instance.interceptors.request.use((configs) => {
  const {
    headers
  } = configs;
  console.log(`HEADERS: ${JSON.stringify(headers, null, 4)}`)
  return configs
})
module.exports = instance;
