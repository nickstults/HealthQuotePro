const fetch = require("node-fetch");

exports.handler = async function (event) {
  const data = JSON.parse(event.body);

  const url = `https://api.convoso.com/v1/leads/insert?auth_token=sg19yks0iek24aeebmmgebhsuwxsmpd4&list_id=9689&hopper=1&hopper_priority=99&phone_code=1&first_name=${encodeURIComponent(data.first_name)}&last_name=${encodeURIComponent(data.last_name)}&phone_number=${encodeURIComponent(data.phone_number)}&address1=${encodeURIComponent(data.address)}&email=${encodeURIComponent(data.email)}&date_of_birth=${encodeURIComponent(data.date_of_birth)}&publisher=healthquotepros`;

  try {
    const convosoRes = await fetch(url, { method: "POST" });
    const raw = await convosoRes.text(); // handle HTML/text response
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, raw })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.toString() })
    };
  }
};
