const fetch = require("node-fetch");

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const {
      first_name,
      last_name,
      zip,
      address,
      email,
      phone_number,
      dob_day,
      dob_month,
      dob_year
    } = body;

    const date_of_birth = `${dob_month}/${dob_day}/${dob_year}`;

    const convosoURL = new URL("https://api.convoso.com/v1/leads/insert");

    // Add query parameters to the URL
    convosoURL.searchParams.append("auth_token", "sg19yks0iek24aeebmmgebhsuwxsmpd4");
    convosoURL.searchParams.append("list_id", "9689");
    convosoURL.searchParams.append("check_dup", "0");
    convosoURL.searchParams.append("check_dup_archive", "0");
    convosoURL.searchParams.append("check_dnc", "0");
    convosoURL.searchParams.append("check_wireless", "0");
    convosoURL.searchParams.append("hopper", "1");
    convosoURL.searchParams.append("hopper_priority", "99");
    convosoURL.searchParams.append("hopper_expires_in", "0");
    convosoURL.searchParams.append("update_order_by_last_called_time", "DESC");
    convosoURL.searchParams.append("phone_code", "1");
    convosoURL.searchParams.append("first_name", first_name);
    convosoURL.searchParams.append("last_name", last_name);
    convosoURL.searchParams.append("phone_number", phone_number);
    convosoURL.searchParams.append("email", email);
    convosoURL.searchParams.append("address1", address);
    convosoURL.searchParams.append("postal_code", zip);
    convosoURL.searchParams.append("date_of_birth", date_of_birth);
    convosoURL.searchParams.append("publisher", "healthquotepros");

    const response = await fetch(convosoURL.toString(), {
      method: "POST"
    });

    const result = await response.json();

    if (result && result.success) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true })
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, error: result.message || "Convoso error" })
      };
    }

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message })
    };
  }
};
