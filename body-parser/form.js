const axios = require('axios');

axios.post('http://localhost:3000/submit-json', {
  name: "John Doe",
  age: 30
})
.then(response => {
  console.log(response.data); // Log the response data
})
.catch(error => {
  console.error('Error:', error); // Log any errors
});
