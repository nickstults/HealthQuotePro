
const fetch = require("node-fetch");

exports.handler = async function(event) {
  const data = JSON.parse(event.body);

  const convosoURL = 'https://api.convoso.com/v1/leads/insert';

  const params = new URLSearchParams({
    auth_token: "sg19yks0iek24aeebmmgebhsuwxsmpd4",
    list_id: "9689",
    check_dup: "0",
    check_dup_archive: "0",
    check_dnc: "0",
    check_wireless: "0",
    hopper: "1",
    hopper_priority: "99",
    hopper_expires_in: "0",
    update_order_by_last_called_time: "DESC",
    phone_code: "1",
    first_name: data.first_name,
    last_name: data.last_name,
    phone_number: data.phone_number,
    address1: data.address,
    email: data.email,
    date_of_birth: data.date_of_birth,
    publisher: "healthquotepros"
  });

  try {
    const response = await fetch(`${convosoURL}?${params.toString()}`);
    const result = await response.json();

    console.log("📤 Convoso Response:", result);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "✅ Convoso submission complete.", convoso: result })
    };
  } catch (error) {
    console.error("❌ Convoso Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.toString() })
    };
  }
};
