const fetch = require("node-fetch");

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    const payload = {
      auth_token: "sg19yks0iek24aeebmmgebhsuwxsmpd4",
      list_id: "9689",
      check_dup: 0,
      check_dup_archive: 0,
      check_dnc: 0,
      check_wireless: 0,
      hopper: 1,
      hopper_priority: 99,
      hopper_expires_in: 0,
      update_order_by_last_called_time: "DESC",
      phone_code: 1,

      first_name: data.first_name,
      last_name: data.last_name,
      phone_number: data.phone_number,
      email: data.email,
      address1: data.address,
      postal_code: data.zip,
      date_of_birth: `${data.dob_month}/${data.dob_day}/${data.dob_year}`,
      publisher: "healthquotepros"
    };

    const response = await fetch("https://api.convoso.com/v1/leads/insert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, response: result }),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};

