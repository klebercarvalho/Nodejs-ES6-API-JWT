var request = require("request");

var options = { method: 'POST',
  url: 'http://localhost:3000/api/v1/users',
  headers: 
   { 'postman-token': 'a1b9aa8c-c7a1-5452-b635-a532d47d1643',
     'cache-control': 'no-cache',
     'content-type': 'application/x-www-form-urlencoded' },
  form: { name: 'kleber', password: 'password' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});