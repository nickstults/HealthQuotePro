const fetch = require("node-fetch");

exports.handler = async function (event) {
  const data = JSON.parse(event.body);

  const params = new URLSearchParams({
    auth_token: "sg19yks0iek24aeebmmgebhsuwxsmpd4",
    list_id: "9689",
    phone_code: "1",
    check_dup: "0",
    check_dup_archive: "0",
    check_dnc: "0",
    check_wireless: "0",
    hopper: "1",
    hopper_priority: "99",
    hopper_expires_in: "0",
    update_order_by_last_called_time: "DESC",
    lead_id: "0",
    publisher: "healthquotepros",
    first_name: data.first_name || "",
    last_name: data.last_name || "",
    phone_number: data.phone_number || "",
    email: data.email || "",
    address1: data.address || "",
    date_of_birth: data.date_of_birth || "",
    ip_address: data.ip_address || "",
  });

  const url = `https://api.convoso.com/v1/leads/insert?${params.toString()}`;

  const response = await fetch(url, {
    method: "GET"
  });

  const result = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};

