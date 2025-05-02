const fetch = require('node-fetch');

exports.handler = async (event) => {
  const data = JSON.parse(event.body);

  const response = await fetch("https://api.convoso.com/v1/leads/insert?auth_token=sg19yks0iek24aeebmmgebhsuwxsmpd4&list_id=9689&hopper=1&hopper_priority=99", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone_number: data.phone_number,
      date_of_birth: data.date_of_birth,
      address1: data.address,
      ip_address: data.ip_address,
      note: "Posted via HealthQuotePros",
      publisher: "healthquotepros"
    })
  });

  const resText = await response.text();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Posted to Convoso', convosoResponse: resText })
  };
};
