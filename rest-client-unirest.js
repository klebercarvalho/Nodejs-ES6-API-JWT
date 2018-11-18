var unirest = require("unirest");

var req = unirest("POST", "http://localhost:3000/api/v1/users");

req.headers({
  "postman-token": "e9194f90-daa6-91db-84e5-335139710129",
  "cache-control": "no-cache",
  "content-type": "application/x-www-form-urlencoded"
});

req.form({
  "name": "kleber",
  "password": "password"
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});