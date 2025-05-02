const fetch = require("node-fetch");

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    const convosoBaseURL = "https://api.convoso.com/v1/leads/insert";
    const convosoParams = new URLSearchParams({
      auth_token: "sg19yks0iek24aeebmmgebhsuwxsmpd4",
      list_id: "9689",
      check_dup: "0",
      check_dup_archive: "0",
      check_dnc: "0",
      check_wireless: "0",
      hopper: "1",
      hopper_priority: "99",
      update_order_by_last_called_time: "DESC",
      phone_code: "1",
      first_name: data.first_name,
      last_name: data.last_name,
      phone_number: data.phone_number,
      address1: data.address,
      date_of_birth: data.date_of_birth,
      email: data.email,
      publisher: "healthquotepros"
    }).toString();

    const response = await fetch(`${convosoBaseURL}?${convosoParams}`);
    const result = await response.json();

    console.log("✅ Convoso response:", result);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, response: result })
    };

  } catch (error) {
    console.error("❌ Convoso submission failed:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message })
    };
  }
};
