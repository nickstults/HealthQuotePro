const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  try {
    const data = JSON.parse(event.body);

    const params = new URLSearchParams({
      auth_token: "sg19yks0iek24aeebmmgebhsuwxsmpd4",
      adaptor_id: "",
      list_id: "9689",
      check_dup: "0",
      check_dup_archive: "0",
      check_dnc: "0",
      check_wireless: "0",
      hopper: "1",
      hopper_priority: "99",
      hopper_expires_in: "0",
      update_if_found: "",
      update_order_by_last_called_time: "DESC",
      blueinkdigital_token: "",
      reject_by_carrier_type: "",
      filter_phone_code: "",
      lead_id: "0",
      phone_code: "1",
      created_by: "",
      email: data.email || "",
      last_modified_by: "",
      owner_id: "",
      first_name: data.first_name || "",
      last_name: data.last_name || "",
      phone_number: data.phone_number || "",
      alt_phone_1: "",
      alt_phone_2: "",
      address1: data.address || "",
      address2: "",
      city: "",
      state: "",
      province: "",
      postal_code: "",
      country: "",
      gender: "",
      date_of_birth: data.date_of_birth || "",
      note: "",
      publisher: "healthquotepros"
    });

    const response = await fetch("https://api.convoso.com/v1/leads/insert?" + params.toString(), {
      method: "GET"
    });

    const result = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() })
    };
  }
};
