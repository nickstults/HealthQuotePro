const fetch = require("node-fetch");

exports.handler = async function (event) {
  const data = JSON.parse(event.body);

  const convosoUrl = "https://api.convoso.com/v1/leads/insert";
  const token = "YOUR_CONVOSO_API_TOKEN";

  const payload = {
    auth_token: token,
    list_id: 9689,
    phone_number: data.phone_number,
    first_name: data.first_name,
    last_name: data.last_name,
    address1: data.address,
    email: data.email,
    date_of_birth: data.date_of_birth,
    ip_address: data.ip_address,
    publisher: "healthquotepros",
  };

  const response = await fetch(convosoUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};
